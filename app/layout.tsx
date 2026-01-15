import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solarenergysystems.in'),
  title: {
    default: 'Solar Energy Systems - Solar Power Plants & Services in Patna',
    template: '%s | Solar Energy Systems'
  },
  description: 'Solar Energy Systems in Patna specializes in Solar Power Plants, Solar Panels, and Renewable Energy Solutions. Providing Residential, Commercial & Industrial Solar installation in Bihar.',
  keywords: ['solar installation patna', 'solar energy systems', 'solar panels patna', 'renewable energy bihar', 'solar power plants', 'residential solar patna', 'commercial solar patna', 'industrial solar patna'],
  authors: [{ name: 'Solar Energy Systems' }],
  creator: 'Solar Energy Systems',
  publisher: 'Solar Energy Systems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/logo.jpg',
    shortcut: '/assets/logo.jpg',
    apple: '/assets/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://solarenergysystems.in',
    siteName: 'Solar Energy Systems',
    title: 'Solar Energy Systems - Solar Experts in Patna',
    description: 'We design, install, and commission Solar Power Plants. Expertise in Solar Panels and comprehensive Renewable Energy Solutions.',
    images: [
      {
        url: '/assets/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Solar Energy Systems Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Energy Systems - Solar Excellence in Patna',
    description: 'Expert solar power solutions in Patna, Bihar. Residential, Commercial & Industrial Solar Systems.',
    images: ['/assets/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://solarenergysystems.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solar Energy Systems",
    "description": "Leading Solar Power Solutions company in Patna, Bihar. Designing, installing, and commissioning Solar Power Plants.",
    "url": "https://solarenergysystems.in",
    "telephone": "+91-9430559435",
    "email": "contact@solarenergysystems.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No G-15, Umang Palace, Hotel Windsor Complex, Exhibition Rd",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5941",
      "longitude": "85.1376"
    },
    // "sameAs": [
    //   "https://facebook.com/solarenergysystems",
    //   "https://instagram.com/solarenergysystems"
    // ],
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[#0f172a] text-[#F8FAFC] font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
