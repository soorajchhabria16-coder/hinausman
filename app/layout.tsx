import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Hina Usman | Psychologist & Lecturer',
  description: 'Portfolio of Hina Usman',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#fcfcfc] text-[#1a1a1a] antialiased selection:bg-[#135c58] selection:text-white" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
