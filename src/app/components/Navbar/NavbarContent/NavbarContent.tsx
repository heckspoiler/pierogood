'use client';

import React, { useEffect } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { projectStore } from '../../../../../stores/projectStore';
import { useStore } from 'zustand';

import { usePathname } from 'next/navigation';

export default function NavbarContent({
  settings,
  styles,
}: {
  settings: any;
  styles: any;
}) {
  const isPlapamco = useStore(projectStore).isPlapamco;
  const pathname = usePathname();

  useEffect(() => {
    console.log('isplsadflsfadlj', isPlapamco);
  }, [pathname, isPlapamco]);
  return (
    <nav className={styles.Navbar}>
      <ul>
        {settings.data.navigation.map((item: any, index: number) => (
          <li
            key={item.label}
            className={`${styles.NavbarItem} ${isPlapamco ? styles.IsPlapamco : ''}`}
          >
            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
