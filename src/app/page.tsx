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

  return (
    <>
      <section className={styles.Main}>
        <Home styles={styles} mainImage={mainImage} />
      </section>
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
