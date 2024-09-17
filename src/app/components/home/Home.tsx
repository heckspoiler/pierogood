import React from 'react';

// Store Import

import MainImage from './MainImage';

export default function Home({
  styles,
  projects,
  hoverImages,
  mainImage,
}: {
  styles: any;
  projects: any;
  home: any;
  hoverImages: any;
  mainImage: any;
}) {
  return (
    <>
      <section
        className={`${styles.ContentContainer} ${styles.ProjectList}`}
      ></section>
      <section className={styles.ContentContainer}>
        <div className={styles.Images}>
          <MainImage styles={styles} mainImage={mainImage} />
        </div>
      </section>
    </>
  );
}
