import PageProductDetail from "../pages/page-product-detail/PageProductDetail";
import PageCategoryDetail from "../pages/page-category-detail/PageCategoryDetail";
import axios from "axios";
import Script from "next/script";

// CENTRALIZED DATA-FETCHING FUNCTION
async function fetchData(slug) {
  let data = null;
  let isProduct = false;
  let status;

  try {
    const productResponse = await axios.get(
      `https://www.vapetocart.co.uk/api/catpro/${slug}`
    );
    status = productResponse?.data?.status;
    if (productResponse.data?.type === "Product") {
      data = productResponse.data.sproduct;
      isProduct = true;
    } else {
      data = productResponse.data.catpros;
      isProduct = false;
    }
  } catch (error) {
    console.log(`Product fetching failed for ${slug}: ${error.message}`);
  }

  if (!data && !isProduct && !status) {
    try {
      const response = await axios.get(
        "https://www.vapetocart.co.uk/api/topseller"
      );
      data = response.data.topsellers;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }
  return { data, isProduct, status };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data, isProduct, status } = await fetchData(slug);

  // DYNAMIC METADATA
  if (isProduct) {
    return {
      title: `${data?.single_product?.meta_title || data?.single_product?.title} | Vape to Cart`,
      description: `${data?.single_product?.meta_description || data?.single_product?.title} | Vape to Cart`,
      alternates: {
        canonical: `https://www.vapetocart.co.uk/${slug}`,
      },
      robots: "index, follow",
      openGraph: {
        title: `${data?.single_product?.meta_title || data?.single_product?.title} | Vape to Cart`,
        description: `${data?.single_product?.meta_description || data?.single_product?.title} | Vape to Cart`,
        url: `https://www.vapetocart.co.uk/${slug}`,
        type: "website",
        siteName: "Vape to Cart",
        images: [
          {
            url:
              `https://truewebcart.s3-accelerate.amazonaws.com/${data?.single_product?.image}` ||
              `https://dummyimage.com/500x500/caedff/000000&text=${data?.single_product?.title}`,
            secureUrl:
              `https://truewebcart.s3-accelerate.amazonaws.com/${data?.single_product?.image}` ||
              `https://dummyimage.com/500x500/caedff/000000&text=${data?.single_product?.title}`,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${data?.single_product?.meta_title || data?.single_product?.title} | Vape to Cart`,
        description: `${data?.single_product?.meta_description || data?.single_product?.title} | Vape to Cart`,
        images: [
          `https://truewebcart.s3-accelerate.amazonaws.com/${data?.single_product?.image}` ||
            `https://dummyimage.com/500x500/caedff/000000&text=${data?.single_product?.title}`,
        ],
      },
      other: {
        "og:type": "product",
      },
    };
  } else {
    return {
      title: `${data?.cat_title || data?.title} | Vape to Cart`,
      description: `${data?.cat_title || data?.title} | Vape to Cart`,
      alternates: {
        canonical: `https://www.vapetocart.co.uk/${slug}`,
      },
      robots: "index, follow",
      openGraph: {
        title: `${data?.cat_title || data?.title} | Vape to Cart`,
        description: `${data?.cat_title || data?.title} | Vape to Cart`,
        url: `https://www.vapetocart.co.uk/${slug}`,
        type: "website",
        siteName: "Vape to Cart",
        images: [
          {
            url: `https://dummyimage.com/500x500/caedff/000000&text=${
              data?.cat_title || data?.title
            }`,
            secureUrl: `https://dummyimage.com/500x500/caedff/000000&text=${
              data?.cat_title || data?.title
            }`,
            width: 1200,
            height: 630,
            alt: `${data?.cat_title || data?.title}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${data?.cat_title || data?.title} | Vape to Cart`,
        description: `${data?.cat_title || data?.title} | Vape to Cart`,
        images: [
          `https://dummyimage.com/500x500/caedff/000000&text=${
            data?.cat_title || data?.title
          }`,
        ],
      },
    };
  }
}
// DYNAMIC METADATA

const DynamicPage = async ({ params }) => {
  const { slug } = await params;
  const { data, isProduct, status } = await fetchData(slug);

  // LD JSON FOR PRODUCT DETAIL PAGE
  const jsonLdProductDetail = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${data?.single_product?.title}`,
    url: `https://www.vapetocart.co.uk/${slug}`,
    image:
      data?.single_product?.image?.src ||
      `https://dummyimage.com/500x500/caedff/000000&text=${data?.single_product?.title}`,
    sku: data?.single_product?.product_id || "N/A",
    brand: {
      "@type": "Brand",
      name: data?.single_product?.vendor || "Unknown Brand",
    },
  };

  const jsonLdBreadcrumbProductDetail = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vapetocart.co.uk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Product",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data?.single_product?.title}`,
        item: `https://www.vapetocart.co.uk/${slug}`,
      },
    ],
  };
  // LD JSON FOR PRODUCT DETAIL PAGE

  // LD JSON FOR CATEGORY PAGE
  const jsonLdCategory = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${data?.cat_title || data?.title}`,
    url: `https://www.vapetocart.co.uk/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Vape to Cart",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vapetocart.co.uk/assets/images/logoa200x37.png",
      },
    },
  };

  const jsonLdBreadcrumbCategory = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vapetocart.co.uk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Category",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data?.cat_title || data?.title}`,
        item: `https://www.vapetocart.co.uk/${slug}`,
      },
    ],
  };
  // LD JSON FOR CATEGORY PAGE

  if (isProduct) {
    return (
      <>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdProductDetail),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumbProductDetail),
          }}
        />
        <PageProductDetail productData={data} />
      </>
    );
  } else {
    return (
      <>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdCategory),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumbCategory),
          }}
        />
        <PageCategoryDetail slug={slug} categoriesData={data} status={status} />
      </>
    );
  }
};

export default DynamicPage;
