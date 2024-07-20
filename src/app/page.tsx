import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import styles from './Home.module.css';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Navbar from './components/Navbar/Navbar';

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
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID('page', 'home');
  const projects = await client.getByType('project');

  return (
    <>
      <section className={styles.Main}>
        <section className={`${styles.ContentContainer} ${styles.ProjectList}`}>
          <div className={styles.Projects}>
            {projects.results.map((project) => (
              <div key={project.id} className={styles.Project}>
                <h2>{prismic.asText(project.data.project_name)}</h2>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.ContentContainer}>
          <div className={styles.Images}></div>
        </section>
      </section>
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
