'use client';

import React, { useEffect, useState, useRef } from 'react';
import * as prismic from '@prismicio/client';

import { useStore } from 'zustand';

// Store Import

import { projectStore } from '../../../../stores/projectStore';

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
  return (
    <>
      <section className={`${styles.ContentContainer} ${styles.ProjectList}`}>
        <div className={styles.Projects}>
          {projects.map(
            (project: {
              id: React.Key | null | undefined;
              data: { project_name: any; index: any };
            }) => (
              <div key={project.id} className={styles.Project}>
                <p>{project.data.index}</p>
                <h2>{prismic.asText(project.data.project_name)}</h2>
              </div>
            )
          )}
        </div>
      </section>
      <section className={styles.ContentContainer}>
        <div className={styles.Images}>
          {!isHovered && !isClicked ? (
            <div className={styles.MainImageContainer}>
              <img
                src="https://images.prismic.io/pierogood/Zpz8BR5LeNNTxU88_Bildschirmfoto2022-09-02um14.11.30.png?auto=format,compress"
                alt="Fischhaut reingezoomt"
                className={styles.MainImage}
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
