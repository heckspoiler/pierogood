'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { projectStore } from '../../../../stores/projectStore';
import styles from './CursorImage.module.css';

import { useStore } from 'zustand';
import { PrismicNextImage } from '@prismicio/next';

gsap.registerPlugin(useGSAP);

// Define a type for your project
interface Project {
  id: string;
  data: {
    hover_image: any;
    main_image: any;
  };
}

export default function CursorImage({
  projects,
  hoverImages,
}: {
  projects: Project[];
  hoverImages: any;
}) {
  const isHovered = useStore(projectStore).isHovered;
  const [hoveredImage, setHoveredImage] = useState<Project | null>(null);

  let cursor = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to({}, 0.006, {
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 30;
        posY += (mouseY - posY) / 30;
        tl.set(cursor.current, {
          css: {
            left: posX + 10,
            top: posY - 10,
          },
        });
      },
    });
    document.addEventListener('mousemove', (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  });

  useEffect(() => {
    if (isHovered) {
      const hoveredProject = projects.find(
        (project: Project) => project.id === isHovered
      );

      setHoveredImage(hoveredProject || null);
    }
  }, [isHovered, projects]);

  return (
    <div className={styles.Container} ref={cursor}>
      {isHovered && hoveredImage && (
        <PrismicNextImage
          field={
            hoveredImage.data?.hover_image
              ? hoveredImage.data?.hover_image
              : hoveredImage.data?.main_image
          }
        />
      )}
    </div>
  );
}
