'use client';

import React, { useEffect, useState, useRef } from 'react';
import * as prismic from '@prismicio/client';

import { useStore } from 'zustand';

// Store Import

import { projectStore } from '../../../../stores/projectStore';
import MainImage from './MainImage';
import ImageGrid from './ImageGrid';
import CursorImage from '../cursorImage/CursorImage';

export default function Home({
  styles,
  projects,
}: {
  styles: any;
  projects: any;
  home: any;
}) {
  const isHovered = useStore(projectStore).isHovered;
  const isClicked = useStore(projectStore).isClicked;
  const setIsClicked = useStore(projectStore).setIsClicked;
  const setIsHovered = useStore(projectStore).setIsHovered;

  // useEffect(() => {
  //   console.log(isClicked);
  //   console.log(isHovered);
  // }, [isHovered]);

  return (
    <>
      <section className={`${styles.ContentContainer} ${styles.ProjectList}`}>
        <CursorImage projects={projects} />
        <div className={styles.Projects}>
          {projects.map(
            (project: {
              id: React.Key | null | undefined;
              data: { project_name: any; index: any };
            }) => (
              <div
                key={project.id}
                className={styles.Project}
                onClick={() => setIsClicked(project.id as string)}
                onMouseEnter={() => setIsHovered(project.id as string)}
                onMouseLeave={() => setIsHovered('')}
              >
                <p>{project.data.index}</p>
                <h2>{prismic.asText(project.data.project_name)}</h2>
              </div>
            )
          )}
        </div>
      </section>
      <section className={styles.ContentContainer}>
        <div className={styles.Images}>
          {isClicked === '' ? (
            <MainImage styles={styles} />
          ) : (
            <ImageGrid styles={styles} projects={projects} />
          )}
        </div>
      </section>
    </>
  );
}
