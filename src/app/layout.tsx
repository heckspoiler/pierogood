import { Metadata, ResolvingMetadata } from 'next';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import './globals.css';
import './reset.css';
import { createClient } from '@/prismicio';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle('settings');

  return {
    title: page.data.site_title || 'Piero Good',
    description:
      page.data.meta_description ||
      'Piero Good | Portfolio | Institut Plapamco',

    openGraph: {
      images: [page.data.og_image.url || ''],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
