'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import styles from './CursorImage.module.css';

gsap.registerPlugin(useGSAP);
export default function CursorImage({ projects }: { projects: any }) {
  let cursor = useRef(null);

  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useGSAP(() => {});

  return <div className={styles.Container} ref={cursor}></div>;
}
