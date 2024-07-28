'use client';

import React from 'react';

import ImageGrid from '../../ProjectsContent/ImageGrid/ImageGrid';

export default function ProjectContent(styles: any, page: any) {
  const projects = page.data.project;
  return (
    <section className={styles.Main}>
      <ImageGrid projects={projects} />
    </section>
  );
}
