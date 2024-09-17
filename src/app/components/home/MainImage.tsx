import React from 'react';

import { createClient } from '@/prismicio';

export default async function MainImage({ styles }: { styles: any }) {
  const client = createClient();

  const mainImage = await client.getByType('main_image');

  const imageUrl = mainImage.results[0]?.data?.main_image?.url || '';
  const imageAlt = mainImage.results[0]?.data?.main_image?.alt || '';

  return (
    <div className={styles.MainImageContainer}>
      <img src={imageUrl} alt={imageAlt} className={styles.MainImage} />
    </div>
  );
}
