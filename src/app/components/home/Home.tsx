import React, { useEffect, useState, useRef } from 'react';
import * as prismic from '@prismicio/client';

export default function Home({
  styles,
  projects,
}: {
  styles: any;
  projects: any;
  home: any;
}) {
  return (
    <>
      <section className={`${styles.ContentContainer} ${styles.ProjectList}`}>
        <div className={styles.Projects}>
          {projects.results.map(
            (project: {
              id: React.Key | null | undefined;
              data: { project_name: any };
            }) => (
              <div key={project.id} className={styles.Project}>
                <h2>{prismic.asText(project.data.project_name)}</h2>
              </div>
            )
          )}
        </div>
      </section>
      <section className={styles.ContentContainer}>
        <div className={styles.Images}></div>
      </section>
    </>
  );
}
