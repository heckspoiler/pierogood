'use client';

import React from 'react';

interface MainImageContentProps {
  styles: any;
  imageUrl: string;
  imageAlt: string;
}

export default function MainImageContent({
  styles,
  imageUrl,
  imageAlt,
}: MainImageContentProps) {
  return (
    <div className={styles.MainImageContainer}>
      <img src={imageUrl} alt={imageAlt} className={styles.MainImage} />
    </div>
  );
}
