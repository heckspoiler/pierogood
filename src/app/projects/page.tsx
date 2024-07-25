import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import Projects from './ProjectsContent/Projects';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('projects');

  const fetchedProjects = await client.getAllByType('project');
  console.log(fetchedProjects[0].data.index);

  const projects = fetchedProjects.sort((a, b) => {
    let aIndex = a.data.index as any;
    let bIndex = b.data.index as any;
    return bIndex - aIndex;
  });

  const hoverImages = projects.map((project) => project.data.hover_image.url);

  return <Projects projects={projects} hoverImages={hoverImages} />;

  // return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('projects');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
