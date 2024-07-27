import React, { useState, useEffect, useRef } from 'react';

import * as prismic from '@prismicio/client';
import Lenis from 'lenis';
import { useStore } from 'zustand';
import { projectStore } from '../../../../../stores/projectStore';

import styles from './ImageGrid.module.css';
import { PrismicNextImage } from '@prismicio/next';

export default function ImageGrid({ projects }: { projects: any }) {
  const isHovered = useStore(projectStore).isHovered;
  const isClicked = useStore(projectStore).isClicked;

  const containerRef = useRef<HTMLDivElement>(null);

  const [projectToUse, setProjectToUse] = useState<any>(null);

  useEffect(() => {
    if (isClicked !== '') {
      setProjectToUse(
        projects.find((project: { id: string }) => project.id === isClicked)
      );
    }

    if (projectToUse) {
      console.log(projectToUse.data.images);
    }
  }, [isClicked]);

  useEffect(() => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;

      scrollPosition > 0 ? containerRef.current.scrollTo(0, 0) : null;
    }
  }, [isClicked]);

  return (
    <section className={styles.Container}>
      <div className={styles.GridContainer} ref={containerRef}>
        {projectToUse
          ? projectToUse.data.images.map((image: any, index: number) => {
              return (
                <PrismicNextImage field={image.project_image} key={index} />
              );
            })
          : null}
      </div>
    </section>
  );
}
