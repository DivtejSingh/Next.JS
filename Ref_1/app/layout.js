import BootstrapClient from "@/app/components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { CartProvider } from "./context/cartContext";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import FooterSimple from "./components/footer-simple/FooterSimple";
import GoogleAnalytics from "./components/google-analytics/GoogleAnalytics";

const fontDmSans = DM_Sans({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Buy Vapes Online | Elf Bar, Crystal Vape & More - Vape to Cart",
  description:
    "Shop premium vapes, Elf Bar flavours, Crystal Vape, nicotine pouches & more. Bulk buy vapes with fast UK shipping & great prices. Order now!",
  keywords: [
    "Vape shops near me",
    "Bulk Buy Vapes uk",
    "bulk disposable vapes uk",
    "vape wholesale uk",
    "Crystal vape",
    "Elf bar flavours",
    "nicotine pouches UK",
  ],
  openGraph: {
    title: "Buy Vapes Online | Elf Bar, Crystal Vape & More - Vape to Cart",
    description:
      "Shop premium vapes, Elf Bar flavours, Crystal Vape, nicotine pouches & more. Bulk buy vapes with fast UK shipping & great prices. Order now!",
    url: "https://www.vapetocart.co.uk/",
    type: "website",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Vapes Online | Elf Bar, Crystal Vape & More - Vape to Cart",
    description:
      "Shop premium vapes, Elf Bar flavours, Crystal Vape, nicotine pouches & more. Bulk buy vapes with fast UK shipping & great prices. Order now!",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontDmSans.className}>
        <GoogleAnalytics />
        <CartProvider>
          <Toaster position="top-right" toastOptions={{ duration: 8000 }} />
          <Header showTopbar={true} />
          <Features className="sec-light" />
          {children}
          <FooterSimple />
        </CartProvider>
        <BootstrapClient />
      </body>
    </html>
  );
}
