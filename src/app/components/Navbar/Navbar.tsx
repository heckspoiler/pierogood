import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { createClient } from '@/prismicio';
import { PrismicImage } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

export default async function Navbar() {
  const client = createClient();

  const settings = await client.getSingle('settings');
  return (
    <nav className={styles.Navbar}>
      <ul>
        {settings.data.navigation.map((item, index) => (
          <li>
            <PrismicNextLink field={item.link} key={`${item.label} ${index}`}>
              {item.label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
