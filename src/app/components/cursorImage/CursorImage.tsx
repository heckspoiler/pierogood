'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { projectStore } from '../../../../stores/projectStore';

import styles from './CursorImage.module.css';

import { useStore } from 'zustand';

gsap.registerPlugin(useGSAP);

export default function CursorImage({ projects }: { projects: any }) {
  const isHovered = useStore(projectStore).isHovered;

  let cursor = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        tl.set(cursor.current, {
          css: {
            left: posX + 20,
            top: posY - 140,
          },
        });
      },
    });
    document.addEventListener('mousemove', (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  });

  useEffect(() => {
    if (isHovered) {
      const hoveredProject = projects.find(
        (project: { id: any }) => project.id === isHovered
      );

      gsap.to(cursor.current, {
        backgroundImage: `url(${hoveredProject.data.main_image.url})`,
      });
    } else {
      gsap.to(cursor.current, {
        backgroundImage: 'none',
      });
    }
  }, [isHovered]);

  return <div className={styles.Container} ref={cursor}></div>;
}
