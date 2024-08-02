'use client';

import React, { useEffect } from 'react';

import ImageGrid from '../../ProjectsContent/ImageGrid/ImageGrid';
import { usePathname } from 'next/navigation';
import { useStore } from 'zustand';

import { projectStore } from '../../../../../stores/projectStore';

export default function ProjectGrid(project: any, projects: any) {
  return <ImageGrid project={project} projects={undefined} />;
}
