import React from 'react';

import MainImageContent from './MainImageContent';
export default function MainImage({
  styles,
  mainImage,
}: {
  styles: any;
  mainImage: any;
}) {
  const imageUrl = mainImage?.results[0]?.data?.main_image?.url || '';
  const imageAlt = mainImage?.results[0]?.data?.main_image?.alt || '';

  return (
    <>
      <MainImageContent
        styles={styles}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
    </>
  );
}
