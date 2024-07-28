import React from 'react';

import { PrismicRichText, SliceZone } from '@prismicio/react';

import ImageGrid from '../../ProjectsContent/ImageGrid/ImageGrid';

export default function ProjectContent(styles: any, page: any) {
  return (
    <section className={styles.Main}>
      <div className={styles.TitleContainer}>
        <PrismicRichText field={page.data.project_title} />
        <PrismicRichText field={page.data.project_date} />
        <PrismicRichText field={page.data.project_addon} />
      </div>

      <div className={styles.TypeContainer}>
        <PrismicRichText field={page.data.project_type} />
      </div>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <>
        {page.data.exhibition.map((item: any) => {
          <div className={styles.ExhibitionContainer}>
            <PrismicRichText field={item.place} />
            <PrismicRichText field={item.date} />
          </div>;
        })}
      </>
    </section>
  );
}
