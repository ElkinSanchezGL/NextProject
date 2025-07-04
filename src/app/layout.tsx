
import React from 'react';
import './globals.css'; 

export const metadata = {
  title: 'One Piece Roadmap',
  description: 'Explore the world of One Piece',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
