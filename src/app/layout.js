import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Production Domain URL (Agar domain alag ho toh bas yahan change karna)
const siteUrl = "https://aadharinstitutehmr.com";

export const metadata = {
  title: {
    default: "Aadhar Institute Hamirpur | Best Coaching for NEET, IIT-JEE & Boards",
    template: "%s | Aadhar Institute Hamirpur",
  },
  description:
    "Aadhar Institute Hamirpur (Gandhi Chowk) is Himachal Pradesh's premier coaching institute for NEET, IIT-JEE (Main & Advanced), Sankalp-30 Super Batch, Foundation & Board exams. 15+ years of excellence with dedicated hostel facilities.",
  keywords: [
    "Aadhar Institute Hamirpur",
    "Best NEET Coaching in Hamirpur",
    "IIT JEE Coaching Hamirpur Himachal Pradesh",
    "Coaching Institute in Gandhi Chowk Hamirpur",
    "Sankalp 30 Super Batch Hamirpur",
    "Medical Non Medical Coaching Himachal",
    "Best Coaching with Hostel in Hamirpur",
    "HPBOSE CBSE Coaching Hamirpur",
  ],
  authors: [{ name: "Aadhar Institute", url: siteUrl }],
  creator: "Aadhar Institute",
  publisher: "Aadhar Institute",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aadhar Institute Hamirpur | Top NEET & IIT-JEE Coaching in HP",
    description:
      "Join Himachal's most trusted coaching institute for NEET, JEE & Boards. Proven rankers, expert faculty, and comprehensive hostel support.",
    url: siteUrl,
    siteName: "Aadhar Institute Hamirpur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-banner.jpg", // public folder mein koi bhi achiever/campus banner image
        width: 1200,
        height: 630,
        alt: "Aadhar Institute Hamirpur Campus and Achievers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhar Institute Hamirpur | NEET & IIT-JEE Coaching",
    description:
      "Himachal's leading institute for competitive exam prep since 2010. Admissions open for Sankalp-30 & Target batches.",
    images: ["/og-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Local Business / Educational Organization Schema for Google Maps & Local Pack
const schemaData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Aadhar Institute Hamirpur",
  "alternateName": "Aadhar Coaching Institute",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.jpg`,
  "telephone": "+919418162827",
  "email": "info@aadharinstitutehmr.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gandhi Chowk",
    "addressLocality": "Hamirpur",
    "addressRegion": "Himachal Pradesh",
    "postalCode": "177001",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.6862,
    "longitude": 76.5213,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "09:00",
      "closes": "22:00",
    },
  ],
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com",
    "https://www.youtube.com/watch?v=iQK94z9Qtnw",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}