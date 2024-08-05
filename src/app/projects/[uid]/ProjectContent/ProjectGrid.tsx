'use client';

import React, { useEffect } from 'react';

import ImageGrid from '../../ProjectsContent/ImageGrid/ImageGrid';
import { usePathname } from 'next/navigation';

import { projectStore } from '../../../../../stores/projectStore';
import { useStore } from 'zustand';

export default function ProjectGrid(project: any, projects: any) {
  const tags = project.project.tags;
  const pathname = usePathname();
  const setIsPlapamco = useStore(projectStore).setIsPlapamco;

  useEffect(() => {
    if (tags.includes('plapamco')) {
      setIsPlapamco(true);
    } else {
      setIsPlapamco(false);
    }
  }, [pathname]);

  return <ImageGrid project={project} projects={undefined} />;
}
