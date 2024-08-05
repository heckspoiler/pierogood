'use client';

import React, { useEffect, useState } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import { usePathname } from 'next/navigation';
import { projectStore } from '../../../../../stores/projectStore';
import { useStore } from 'zustand';

export default function NavbarContent({
  settings,
  styles,
}: {
  settings: any;
  styles: any;
}) {
  const pathname = usePathname();
  const { isPlapamco, setIsPlapamco } = useStore(projectStore);
  const [animatedItem, setAnimatedItem] = useState('');

  useEffect(() => {
    if (isPlapamco) {
      setAnimatedItem('Plapamco');
    } else {
      setAnimatedItem('');
    }
  }, [isPlapamco]);

  useEffect(() => {
    if (!pathname.startsWith('/projects/')) {
      setIsPlapamco(false);
    }
  }, [pathname, setIsPlapamco]);

  return (
    <nav className={styles.Navbar}>
      <ul>
        {settings.data.navigation.map((item: any) => (
          <li
            key={item.label}
            className={`${styles.NavbarItem} ${animatedItem === item.label ? styles.Animated : ''}`}
          >
            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
