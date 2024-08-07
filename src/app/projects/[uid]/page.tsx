import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import styles from './Project.module.css';
import ProjectGrid from './ProjectContent/ProjectGrid';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('project', params.uid)
    .catch(() => notFound());

  return (
    <>
      <section className={styles.Main}>
        <section className={styles.ContentContainer}>
          <div className={styles.LeftContent}>
            <div className={styles.TitleContainer}>
              <PrismicRichText field={page.data.project_title} />
              <PrismicRichText field={page.data.project_date} />
              <PrismicRichText field={page.data.project_addon} />
            </div>

            <div className={styles.TypeContainer}>
              <PrismicRichText field={page.data.project_type} />
            </div>
            <SliceZone slices={page.data.slices} components={components} />
            <div className={styles.Exhibitions}>
              {page.data.exhibition.map((item, index) => {
                return (
                  <div className={styles.ExhibitionContainer} key={index}>
                    <div className={styles.ExhibitionPlace}>
                      <PrismicRichText field={item.place} />
                    </div>
                    <div className={styles.ExhibitionDate}>
                      <PrismicRichText field={item.date} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className={styles.ContentContainer}>
          <ProjectGrid project={page} />
        </section>
      </section>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID('project', params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('project');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
