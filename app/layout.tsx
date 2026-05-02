import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-display' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });

const siteUrl = 'https://smelectrical.builtforperth.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SM Electrical WA',
  description: 'Perth residential electrician',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: 'SM Electrical WA',
    description: 'Perth Electrician That Actually Shows Up.',
    url: siteUrl,
    siteName: 'SM Electrical WA',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/switchboardafter.jpg',
        width: 1200,
        height: 630,
        alt: 'SM Electrical WA switchboard work'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Electrical WA',
    description: 'Perth Electrician That Actually Shows Up.',
    images: ['/images/switchboardafter.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${barlow.variable} ${manrope.variable} grain relative`}>{children}</body></html>;
}
