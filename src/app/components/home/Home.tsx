import React from 'react';

// Store Import

import MainImage from './MainImage';
import MainImageContent from './MainImageContent';

export default function Home({
  styles,
  mainImage,
}: {
  styles: any;
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
