import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import styles from './Home.module.css';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Home from './components/home/Home';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID('page', 'home');

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? '' }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID('page', 'home');
  const fetchedProjects = await client.getAllByType('project');
  const mainImage = await client.getByType('main_image');

  const projects = fetchedProjects.sort((a, b) => {
    let aIndex = a.data.index as any;
    let bIndex = b.data.index as any;
    return bIndex - aIndex;
  });

  const hoverImages = projects.map((project) => project.data.hover_image.url);

  return (
    <>
      <section className={styles.Main}>
        <Home
          projects={projects}
          styles={styles}
          home={home}
          hoverImages={hoverImages}
          mainImage={mainImage}
        />
      </section>
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
