'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useStore } from 'zustand';
import { projectStore } from '../../../../../stores/projectStore';
import styles from './ImageGrid.module.css';
import { PrismicNextImage } from '@prismicio/next';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);

export default function ImageGrid({
  projects,
  project,
}: {
  projects: any;
  project: any;
}) {
  const isClicked = useStore(projectStore).isClicked;
  const containerRef = useRef<HTMLDivElement>(null);
  const [projectToUse, setProjectToUse] = useState<any>(null);
  const [imageAreas, setImageAreas] = useState<string[]>([]);
  const pathname = usePathname();
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [firstPath, secondPath, thirdPath] = pathname.split('/');

  useEffect(() => {
    if (project && project.project.url === pathname) {
      setProjectToUse(project.project);
    }
  }, [pathname, project, projectToUse]);

  useEffect(() => {
    console.log('adfshsdfjkdsjkö', projectToUse);
  }, [pathname, projectToUse]);

  useEffect(() => {
    if (isClicked !== '' && projects) {
      const newProject = projects.find(
        (project: { uid: string }) => project.uid === isClicked
      );
      if (newProject) {
        setProjectToUse(newProject);
      }
    } else if (isClicked !== '') {
      console.log('Projects array is undefined or empty');
    }
  }, [isClicked, projects]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [isClicked]);

  useEffect(() => {
    if (projectToUse) {
      calculateImageAreas();
    }
  }, [projectToUse]);

  const calculateImageAreas = async () => {
    const areas: string[] = [];
    for (const image of projectToUse.data.images) {
      const dimensions = await getImageDimensions(image.project_image.url);
      const aspect = dimensions.width / dimensions.height;
      let area;
      if (aspect > 1.5) {
        area = 'span 1 / span 2'; // Wide image
      } else if (aspect < 0.67) {
        area = 'span 2 / span 1'; // Tall image
      } else {
        area = 'span 1 / span 1'; // Square-ish image
      }
      areas.push(area);
    }
    setImageAreas(areas);
  };

  const getImageDimensions = (
    src: string
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.src = src;
    });
  };

  useGSAP(
    () => {
      if (projectToUse) {
        gsap.fromTo(
          imagesRef.current,
          { visibility: 'hidden' },
          {
            visibility: 'visible',
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out',
          }
        );
      } else {
        gsap.to(imagesRef.current, {
          visibility: 'hidden',
          duration: 0.3,
          delay: 0.5,
          ease: 'power2.in',
        });
      }
    },
    { dependencies: [projectToUse] }
  );

  return (
    <section className={styles.Container}>
      <div className={styles.GridContainer} ref={containerRef}>
        {projectToUse?.data.images.map((image: any, index: number) => (
          <div
            key={index}
            className={styles.ImageWrapper}
            style={{ gridArea: imageAreas[index] }}
            ref={(el: any) => (imagesRef.current[index] = el)}
          >
            <PrismicNextImage field={image.project_image} />
          </div>
        ))}
      </div>
      {projectToUse && (
        <div className={styles.Link}>
          {thirdPath !== projectToUse.uid ? (
            <Link href={`/projects/${projectToUse.uid}`}>See more</Link>
          ) : (
            <Link href={`/projects`}>Go back</Link>
          )}
        </div>
      )}
    </section>
  );
}
