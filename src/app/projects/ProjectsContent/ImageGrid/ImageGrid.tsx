import React, { useState, useEffect } from 'react';

import * as prismic from '@prismicio/client';

import { useStore } from 'zustand';
import { projectStore } from '../../../../../stores/projectStore';

import styles from './ImageGrid.module.css';
import { PrismicNextImage } from '@prismicio/next';

export default function ImageGrid({ projects }: { projects: any }) {
  const isHovered = useStore(projectStore).isHovered;
  const isClicked = useStore(projectStore).isClicked;

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

  return (
    <section className={styles.Container}>
      <div className={styles.GridContainer}>
        {projectToUse
          ? projectToUse.data.images.map((image: any) => {
              return <PrismicNextImage field={image.project_image} />;
            })
          : null}
      </div>
    </section>
  );
}
