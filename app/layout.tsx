import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-display' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = { title: 'SM Electrical WA', description: 'Perth residential electrician' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${barlow.variable} ${manrope.variable} grain relative`}>{children}</body></html>;
}
