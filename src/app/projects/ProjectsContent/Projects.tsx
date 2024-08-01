'use client';

import React, { useEffect, useState, useRef } from 'react';
import * as prismic from '@prismicio/client';

// Store Import
import { useStore } from 'zustand';
import { projectStore } from '../../../../stores/projectStore';

// component imports
import MainImage from '../../components/home/MainImage';
import ImageGrid from './ImageGrid/ImageGrid';
import CursorImage from '../../components/cursorImage/CursorImage';

import styles from './Projects.module.css';
import Link from 'next/link';

export default function Projects({
  projects,
  hoverImages,
}: {
  projects: any;
  hoverImages: any;
}) {
  const isHovered = useStore(projectStore).isHovered;
  const isClicked = useStore(projectStore).isClicked;
  const setIsClicked = useStore(projectStore).setIsClicked;
  const setIsHovered = useStore(projectStore).setIsHovered;

  return (
    <>
      <section className={styles.Main}>
        <section className={`${styles.ContentContainer} ${styles.ProjectList}`}>
          <CursorImage projects={projects} hoverImages={hoverImages} />
          <div className={styles.Projects}>
            {projects.map(
              (project: {
                uid: React.Key | null | undefined;
                id: React.Key | null | undefined;
                data: { project_name: any; index: any };
              }) => (
                <div
                  key={project.uid}
                  className={`${styles.Project} ${isClicked === project.uid ? styles.isActive : ''}`}
                  onClick={() => setIsClicked(project.uid as string)}
                  onMouseEnter={() => setIsHovered(project.id as string)}
                  onMouseLeave={() => setIsHovered('')}
                >
                  {/* <p>{project.data.index}</p> */}
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
              <ImageGrid projects={projects} project={undefined} />
            )}
          </div>
        </section>
      </section>
    </>
  );
}
