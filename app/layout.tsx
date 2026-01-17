import type { Metadata } from 'next';
import { Newsreader, Noto_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luthier Studio - Violin Restoration NYC & NJ | Master Luthier Services',
  description: 'Premier violin restoration studio serving New York City, New Jersey, and the Tri-State area. Expert structural repair, varnish restoration, sound adjustment, and bow rehairing by master luthiers with 35+ years experience.',
  keywords: ['violin restoration NYC', 'violin repair New York', 'luthier NJ', 'violin repair New Jersey', 'instrument repair Manhattan', 'bow rehairing NYC', 'soundpost adjustment', 'varnish restoration', 'Cremonese craftsmanship', 'violin repair Brooklyn', 'luthier Newark', 'string instrument repair tri-state'],
  authors: [{ name: 'Luthier Studio' }],
  openGraph: {
    title: 'Luthier Studio - Master Violin Restoration | NYC & NJ',
    description: 'Premier violin restoration serving NYC, NJ and the Tri-State area. Centuries-old Cremonese tradition meets modern precision.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Luthier Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luthier Studio - Violin Restoration NYC & NJ',
    description: 'Premier violin restoration serving the Tri-State area by master luthiers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Luthier Studio',
  description: 'Premier violin restoration studio serving New York City, New Jersey, and the Tri-State area. Expert structural repair, varnish restoration, sound adjustment, and bow rehairing.',
  url: 'https://luthierstudio.com',
  telephone: '+1-201-555-0123',
  email: 'info@luthierstudio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '247 Craftsman Avenue',
    addressLocality: 'Jersey City',
    addressRegion: 'NJ',
    postalCode: '07302',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7178,
    longitude: -74.0431,
  },
  areaServed: [
    { '@type': 'City', name: 'New York City' },
    { '@type': 'City', name: 'Jersey City' },
    { '@type': 'City', name: 'Newark' },
    { '@type': 'City', name: 'Hoboken' },
    { '@type': 'State', name: 'New Jersey' },
    { '@type': 'State', name: 'New York' },
  ],
  priceRange: '$$$',
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-16:00'],
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Violin Restoration Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Varnish Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sound Adjustment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bow Rehairing' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${notoSans.variable} dark`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
