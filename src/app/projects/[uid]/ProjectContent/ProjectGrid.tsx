'use client';

import React from 'react';

import styles from './ProjectGrid.module.css';
import ImageGrid from '../../ProjectsContent/ImageGrid/ImageGrid';

export default function ProjectGrid(project: any) {
  return <ImageGrid project={project} projects={undefined} />;
}
