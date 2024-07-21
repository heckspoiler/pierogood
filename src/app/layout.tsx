import { Metadata, ResolvingMetadata } from 'next';
import { PrismicNextLink, PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import './globals.css';
import './reset.css';
import { createClient } from '@/prismicio';
import Navbar from './components/Navbar/Navbar';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle('settings');

  return {
    title: settings.data.site_title || 'Piero Good',
    description:
      settings.data.meta_description ||
      'Piero Good | Portfolio | Institut Plapamco',

    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="title">
          <PrismicNextLink field={settings.data.logo}>
            <h1>{settings.data.site_title}</h1>
          </PrismicNextLink>
        </div>
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
