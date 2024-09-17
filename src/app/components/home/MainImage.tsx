import React from 'react';

export default async function MainImage({
  styles,
  mainImage,
}: {
  styles: any;
  mainImage: any;
}) {
  console.log(mainImage.results[0].data.main_image?.url);
  return (
    <div className={styles.MainImageContainer}>
      <img
        src={mainImage.results[0].data.main_image?.url}
        alt="Fischhaut reingezoomt"
        className={styles.MainImage}
      />
    </div>
  );
}
