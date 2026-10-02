import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ItzFuzz — Scroll-Driven Hero',
  description: 'A premium scroll-driven hero experience created for the ItzFuzz frontend assignment.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
