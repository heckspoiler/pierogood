import React, { useState, useEffect, useRef } from 'react';
import * as prismic from '@prismicio/client';
import { useStore } from 'zustand';
import { projectStore } from '../../../../../stores/projectStore';
import styles from './ImageGrid.module.css';
import { PrismicNextImage } from '@prismicio/next';

export default function ImageGrid({ projects }: { projects: any }) {
  const isClicked = useStore(projectStore).isClicked;
  const containerRef = useRef<HTMLDivElement>(null);
  const [projectToUse, setProjectToUse] = useState<any>(null);
  const [imageAreas, setImageAreas] = useState<string[]>([]);

  useEffect(() => {
    if (isClicked !== '') {
      setProjectToUse(
        projects.find((project: { id: string }) => project.id === isClicked)
      );
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
        area = 'span 1 / span 2';
      } else if (aspect < 0.67) {
        area = 'span 2 / span 1';
      } else {
        area = 'span 1 / span 1';
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

  return (
    <section className={styles.Container}>
      <div className={styles.GridContainer} ref={containerRef}>
        {projectToUse?.data.images.map((image: any, index: number) => (
          <div
            key={index}
            className={styles.ImageWrapper}
            style={{ gridArea: imageAreas[index] }}
          >
            <PrismicNextImage field={image.project_image} key={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
