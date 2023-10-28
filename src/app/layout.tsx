import { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
