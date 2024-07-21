import React from 'react';

export default function MainImage({ styles }: { styles: any }) {
  return (
    <div className={styles.MainImageContainer}>
      <img
        src="https://images.prismic.io/pierogood/Zpz8BR5LeNNTxU88_Bildschirmfoto2022-09-02um14.11.30.png?auto=format,compress"
        alt="Fischhaut reingezoomt"
        className={styles.MainImage}
      />
    </div>
  );
}
