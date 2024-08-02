'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { projectStore } from '../../../../../stores/projectStore';
import { useStore } from 'zustand';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function NavbarContent({
  settings,
  styles,
}: {
  settings: any;
  styles: any;
}) {
  const [isPlapamco, setIsPlapamco] = useState(false);
  const projectsRef = useRef(null);
  const pathname = usePathname();
  const [first, second, third] = pathname.split('/');

  useEffect(() => {
    if (
      third === 'wasteland-plant-magnificent' ||
      third === 'plant-breeding-club' ||
      third === '700-wunschbohnen'
    ) {
      setIsPlapamco(true);
    } else {
      setIsPlapamco(false);
    }
  });

  useEffect(() => {
    let animation: gsap.core.Timeline;

    if (isPlapamco && projectsRef.current) {
      animation = gsap
        .timeline({ repeat: -1, yoyo: true })
        .to(projectsRef.current, {
          duration: 1,
          rotationZ: 8,
          ease: 'sine.inOut',
          yoyo: true,
        });
    } else if (projectsRef.current) {
      gsap.to(projectsRef.current, {
        duration: 0.3,
        rotationZ: 0,
        ease: 'power2.out',
      });
    }

    return () => {
      if (animation) animation.kill();
    };
  }, [isPlapamco, pathname]);

  return (
    <nav className={styles.Navbar}>
      <ul>
        {settings.data.navigation.map((item: any) => (
          <li
            key={item.label}
            className={`${styles.NavbarItem}`}
            ref={item.label === 'Plapamco' ? projectsRef : null}
          >
            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
