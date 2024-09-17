import React from 'react';

// Store Import

import MainImage from './MainImage';

export default function Home({
  styles,
}: {
  styles: any;
  projects: any;
  home: any;
  hoverImages: any;
}) {
  return (
    <>
      <section
        className={`${styles.ContentContainer} ${styles.ProjectList}`}
      ></section>
      <section className={styles.ContentContainer}>
        <div className={styles.Images}>
          <MainImage styles={styles} />
        </div>
      </section>
    </>
  );
}
