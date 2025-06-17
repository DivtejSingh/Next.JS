import ProductGrid from "./components/product-grid/ProductGrid";
import Brands from "./components/brands/Brands";
import ToastNotification from "./components/toast-notification/ToastNotification";
import axios from "axios";
import HomeFeaturedCategories from "./components/home-featured-categories/HomeFeaturedCategories";
import HomeCategories from "./components/home-categories/HomeCategories";
import Categories from "./components/categories/Categories";
import Welcome from "./components/welcome/Welcome";
import Hero from "./components/hero/Hero";
import Script from "next/script";

export const metadata = {
  title: "Buy Vapes Online | Elf Bar, Crystal Vape & More - Vape to Cart",
  description:
    "Shop premium vapes, Elf Bar flavours, Crystal Vape, nicotine pouches & more. Bulk buy vapes with fast UK shipping & great prices. Order now!",
  alternates: {
    canonical: "https://www.vapetocart.co.uk/",
  },
  robots: "index, follow",
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
    keywords: [
      "Vape shops near me",
      "Bulk Buy Vapes uk",
      "bulk disposable vapes uk",
      "vape wholesale uk",
      "Crystal vape",
      "Elf bar flavours",
      "nicotine pouches UK",
    ],
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

async function fetchHomeBanner() {
  try {
    const response = await axios.get(
      "https://apis.truewebpro.com/api/homebanner"
    );
    return response.data.banner;
  } catch (error) {
    throw new Error(`Failed to fetch banner: ${error.message}`);
  }
}

async function fetchFeaturedGrid() {
  try {
    const response = await axios.get(
      "https://apis.truewebpro.com/api/featuredgrids"
    );
    return response.data.featuredgrids;
  } catch (error) {
    throw new Error(`Failed to fetch featured grid: ${error.message}`);
  }
}

async function fetchFeaturedCategories() {
  try {
    const response = await axios.get(
      "https://apis.truewebpro.com/api/featuredcats"
    );
    return response.data.featuredcats;
  } catch (error) {
    throw new Error(`Failed to fetch featured categories: ${error.message}`);
  }
}

async function fetchFeaturedBrands() {
  try {
    const response = await axios.get(
      "https://apis.truewebpro.com/api/featuredbrands"
    );
    return response.data.featuredbrands;
  } catch (error) {
    throw new Error(`Failed to fetch featured brands: ${error.message}`);
  }
}

async function fetchCategories() {
  try {
    const response = await axios.get(
      "https://apis.truewebpro.com/api/shopbycats"
    );
    return response.data.shopbycats;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
}

async function fetchTopSellers() {
  try {
    const response = await axios.get(
      "https://www.vapetocart.co.uk/api/topseller"
    );

    return response.data.topsellers.catpros;
  } catch (error) {
    throw new Error(`Failed to fetch top sellers: ${error.message}`);
  }
}

const PageHome = async () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "Vape to Cart",
    url: "https://www.vapetocart.co.uk/",
    publisher: {
      "@type": "Organization",
      name: "Vape to Cart",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vapetocart.co.uk/assets/images/logoa200x37.png",
      },
    },
  };
  const [
    homeBannerResult,
    featuredGridResult,
    featuredCategoriesResult,
    featuredBrandsResult,
    categoriesResult,
    topSellersResult,
    latestProductsResult,
  ] = await Promise.allSettled([
    fetchHomeBanner(),
    fetchFeaturedGrid(),
    fetchFeaturedCategories(),
    fetchFeaturedBrands(),
    fetchCategories(),
    fetchTopSellers(),
  ]);

  // Extract successful values or set them to empty values if failed
  const homeBanner =
    homeBannerResult.status === "fulfilled" ? homeBannerResult.value : null;
  const featuredGrid =
    featuredGridResult.status === "fulfilled" ? featuredGridResult.value : [];
  const featuredCategories =
    featuredCategoriesResult.status === "fulfilled"
      ? featuredCategoriesResult.value
      : [];
  const featuredBrands =
    featuredBrandsResult.status === "fulfilled"
      ? featuredBrandsResult.value
      : [];
  const categories =
    categoriesResult.status === "fulfilled" ? categoriesResult.value : [];
  const topSellers =
    topSellersResult.status === "fulfilled" ? topSellersResult.value : [];

  return (
    <div>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {homeBannerResult.status === "rejected" && (
        <ToastNotification
          type="error"
          id="home-banner-toast"
          message={`Failed to load banner: ${
            homeBannerResult?.reason?.message || "Unknown Error."
          }`}
        />
      )}
      {featuredGridResult.status === "rejected" && (
        <ToastNotification
          type="error"
          id="home-featured-grid-toast"
          message={`Failed to load featured grid: ${featuredGridResult.reason.message}`}
        />
      )}
      {featuredCategoriesResult.status === "rejected" && (
        <ToastNotification
          type="error"
          id="home-featured-categories-toast"
          message={`Failed to load featured categories: ${featuredCategoriesResult.reason.message}`}
        />
      )}
      {featuredBrandsResult.status === "rejected" && (
        <ToastNotification
          type="error"
          id="home-brands-toast"
          message={`Failed to load featured brands: ${featuredBrandsResult.reason.message}`}
        />
      )}
      {categoriesResult.status === "rejected" && (
        <ToastNotification
          type="error"
          id="home-categories-toast"
          message={`Failed to load categories: ${categoriesResult.reason.message}`}
        />
      )}
      {topSellersResult.status === "rejected" && (
        <ToastNotification
          type="error"
          id="home-top-sellers-toast"
          message={`Failed to load top sellers: ${topSellersResult.reason.message}`}
        />
      )}

      {/* Render Home Components */}
      {homeBanner && <Hero source={homeBanner} />}
      {featuredGrid.length > 0 && (
        <HomeFeaturedCategories
          featuredGrid={featuredGrid}
          className="sec-tertiary"
        />
      )}
      {featuredCategories.length > 0 && (
        <HomeCategories
          featuredCategories={featuredCategories}
          className="sec-light"
        />
      )}
      {featuredBrands.length > 0 && (
        <Brands brands={featuredBrands} className="sec-light pt-0" />
      )}
      {categories.length > 0 && (
        <Categories
          title="Shop by category"
          categories={categories}
          className="sec-tertiary"
        />
      )}
      {topSellers.length > 0 && (
        <ProductGrid
          title="Top Sellers"
          products={topSellers}
          sectionClass="sec-light"
        />
      )}
      <Welcome />
    </div>
  );
};

export default PageHome;
