import "./single-blog.css";
import React from "react";
import { Container } from "react-bootstrap";
import imageBlogDetail from "@/public/assets/images/blog-detail.jpg";
import BannerSmall from "@/app/components/banner-small/BannerSmall";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const blogTitle = params.singleBlog.replaceAll("-", " ");
  return {
    title: `${blogTitle} | Vape to Cart`,
    description: `Read our latest blog post: ${blogTitle}, on Vape to Cart.`,
    alternates: {
      canonical: `https://www.vapetocart.co.uk/blog/${params.singleBlog}`,
    },
    robots: "index, follow",
    openGraph: {
      title: `${blogTitle} | Vape to Cart`,
      description: `Read our latest blog post: ${blogTitle}, on Vape to Cart.`,
      url: `https://www.vapetocart.co.uk/blog/${params.singleBlog}`,
      type: "article",
      siteName: "Vape to Cart",
      images: [
        {
          url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
          secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${blogTitle} | Vape to Cart`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blogTitle} | Vape to Cart`,
      description: `Read our latest blog post: ${blogTitle}, on Vape to Cart.`,
      images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
    },
  };
}

const BlogDetailPage = ({ params }) => {
  const blogTitle = params.singleBlog.replaceAll("-", " ");
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: `${blogTitle} | Vape to Cart`,
    url: `https://www.vapetocart.co.uk/blog/${params.singleBlog}`,
    publisher: {
      "@type": "Organization",
      name: "Vape to Cart",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vapetocart.co.uk/assets/images/logoa200x37.png",
      },
    },
  };

  const jsonLdBreadcrumb = {
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
        name: "Blog",
        item: "https://www.vapetocart.co.uk/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blogTitle,
        item: `https://www.vapetocart.co.uk/blog/${params.singleBlog}`,
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <section className="blog-detail sec-light">
        <BannerSmall
          image={imageBlogDetail}
          heading="Curabitur sem purus, vehicula sit amet risus eget, malesuada
            accumsan turpis."
        />
        <Container className="py-5">
          <div className="blog-content position-relative">
            <p className="date position-absolute start-0 top-0 fw-bold fs-5 color-dark">
              Jan 16, 2025
            </p>
            <p>
              Praesent tempor est eget urna sollicitudin placerat. Fusce a
              accumsan velit, eu vulputate arcu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed aliquet, leo ut volutpat tempor,
              nisi mi tempor magna, ac interdum tellus turpis ac orci. Nam et
              ligula in massa congue pretium vitae ac lorem. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Phasellus mollis vulputate interdum. Nam vel nulla
              at arcu tristique feugiat at vel justo. Nunc pharetra, sapien non
              accumsan finibus, libero eros sollicitudin dolor, eu varius massa
              arcu eu lectus. Mauris ornare quam et orci pellentesque, a
              elementum augue elementum. Vestibulum sapien risus, congue at
              aliquam vel, auctor quis felis. Nam ac ex id ante molestie
              vulputate at quis diam. Maecenas consectetur, ex a finibus
              laoreet, risus tellus pellentesque justo, vel convallis lectus
              sapien sed ligula. Donec sed justo auctor, feugiat justo ut,
              ornare lacus.
            </p>
            <p>
              Aenean nec arcu ac enim eleifend lacinia. Nullam vehicula at nibh
              sed hendrerit. In nec justo et nisl blandit tempus ac nec nulla.
              Integer porttitor nisi pharetra nunc euismod vulputate sed vel
              neque. Aliquam aliquam non tellus ac iaculis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Etiam eu dui velit. Nam et lectus ut neque hendrerit
              pulvinar. Etiam tincidunt magna elit, a luctus ante maximus at.
              Etiam accumsan hendrerit nisl id posuere. Pellentesque ultrices
              malesuada accumsan. Nam commodo, diam sit amet accumsan posuere,
              mauris metus fringilla ex, sit amet venenatis mi arcu quis felis.
              Cras feugiat sagittis auctor.
            </p>
            <p>
              Morbi dictum, sapien et faucibus finibus, felis orci sagittis leo,
              ut feugiat ex est vitae libero. Phasellus eros metus, bibendum sit
              amet quam eu, sodales maximus quam. Vestibulum molestie metus et
              erat aliquet volutpat. Integer eu tincidunt elit. Cras auctor
              sodales urna volutpat facilisis. Sed tellus metus, malesuada nec
              felis non, fermentum accumsan tellus. Fusce semper aliquet diam,
              quis porttitor dolor tristique eget. Morbi viverra efficitur
              pharetra. Praesent faucibus fermentum nisi eget porta. Praesent
              condimentum aliquam dui, eget ultricies enim rhoncus in. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec et suscipit lorem. In facilisis diam et
              laoreet tristique. Nullam sodales odio sed libero finibus aliquam.
              Donec sed facilisis nulla. Pellentesque varius leo et felis
              gravida sodales.
            </p>
            <p>
              Maecenas aliquam tortor eget commodo viverra. Aenean interdum at
              nulla ut aliquam. Integer sed orci laoreet, porttitor tellus et,
              molestie mauris. Donec congue leo id eros semper interdum. Donec
              faucibus facilisis urna, vitae dictum odio fringilla vitae. Duis
              ornare, turpis non euismod volutpat, sem felis semper leo, sed
              rutrum turpis mauris a lectus. Nulla eleifend iaculis nisl, at
              ultricies dui suscipit in. Vestibulum laoreet in odio vel
              ultricies. Vivamus nec dui ac risus vulputate feugiat.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogDetailPage;
