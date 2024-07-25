'use client';

import React, { useEffect, useState, useRef } from 'react';
import * as prismic from '@prismicio/client';

import { useStore } from 'zustand';

// Store Import

import { projectStore } from '../../../../stores/projectStore';
import MainImage from './MainImage';
import ImageGrid from '../../projects/ImageGrid';
import CursorImage from '../cursorImage/CursorImage';

export default function Home({
  styles,
  projects,
  hoverImages,
}: {
  styles: any;
  projects: any;
  home: any;
  hoverImages: any;
}) {
  const isHovered = useStore(projectStore).isHovered;
  const isClicked = useStore(projectStore).isClicked;
  const setIsClicked = useStore(projectStore).setIsClicked;
  const setIsHovered = useStore(projectStore).setIsHovered;

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
