'use client';

import React, { useEffect } from 'react';

import ImageGrid from '../../ProjectsContent/ImageGrid/ImageGrid';
import { usePathname } from 'next/navigation';
import { useStore } from 'zustand';

import { projectStore } from '../../../../../stores/projectStore';

export default function ProjectGrid(project: any, projects: any) {
  const pathname = usePathname();
  const isPlapamco = useStore(projectStore).isPlapamco;
  const setIsPlapamco = useStore(projectStore).setIsPlapamco;

  useEffect(() => {
    if (pathname.includes('plant-breeding-club')) {
      setIsPlapamco(true);
    }
  }, [pathname]);
  return <ImageGrid project={project} projects={undefined} />;
}
