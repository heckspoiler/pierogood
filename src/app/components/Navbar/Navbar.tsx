import React from 'react';
import styles from './Navbar.module.css';
import { createClient } from '@/prismicio';
import NavbarContent from './NavbarContent/NavbarContent';

export default async function Navbar() {
  const client = createClient();

  const settings = await client.getSingle('settings');
  return <NavbarContent settings={settings} styles={styles} />;
}
