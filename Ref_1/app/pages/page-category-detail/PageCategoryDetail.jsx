"use client";
import { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "@/app/components/product-card/ProductCard";
import SoldOut from "@/app/components/sold-out/SoldOut";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import HeadingWithImage from "@/app/components/heading-with-image/HeadingWithImage";
import ProductFilter from "@/app/components/product-filter/ProductFilter";
import { ClipLoader } from "react-spinners";
const PageCategoryDetail = ({ slug, categoriesData, status }) => {
  const [sortOption, setSortOption] = useState("az");
  const [currentPage, setCurrentPage] = useState(categoriesData?.currentPage);

  const [totalPages, setTotalPages] = useState(categoriesData?.totalPages);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(
    status ? categoriesData.cat_products : categoriesData.catpros
  );

  if (
    !categoriesData ||
    (!categoriesData?.cat_products?.length && !categoriesData?.catpros?.length)
  ) {
    return <SoldOut />;
  }

  // FETCH MORE PRODUCTS
  const fetchMoreProducts = async () => {
    if (isLoading || currentPage >= totalPages) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/catpro/${slug}?page=${currentPage + 1}`);
      const data = await res.json();

      // Optionally update totalPages if your API sends updated pagination info
      if (data.totalPages) {
        setTotalPages(data.totalPages);
      }

      // Ensure newProducts is an array even if the fetched data is undefined or not an array
      let newProducts = status ? data.catpros?.cat_products : data.catpros;

      if (!Array.isArray(newProducts)) {
        newProducts = [];
      }

      if (newProducts.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setCurrentPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to load more products:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // FETCH MORE PRODUCTS

  // SORTED PRODUCTS
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortOption) {
        case "az":
          return a.title.localeCompare(b.title);
        case "za":
          return b.title.localeCompare(a.title);
        case "price-low-high":
          return (
            parseFloat(a.variants[0].price) - parseFloat(b.variants[0].price)
          );
        case "price-high-low":
          return (
            parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price)
          );
        case "date-old-new":
          return (
            new Date(a.variants[0].created_at) -
            new Date(b.variants[0].created_at)
          );
        case "date-new-old":
          return (
            new Date(b.variants[0].created_at) -
            new Date(a.variants[0].created_at)
          );
        default:
          return 0;
      }
    });
  }, [sortOption, products]);
  // SORTED PRODUCTS

  return (
    <>
      <Breadcrumbs path="Home/Category" />
      <section className="all-products sec-padding-small bgColor-tertiary">
        <Container>
          <HeadingWithImage
            heading={categoriesData?.cat_title || categoriesData?.title}
          />
          <ProductFilter onSortChange={setSortOption} />
          <InfiniteScroll
            dataLength={products?.length}
            next={fetchMoreProducts}
            hasMore={currentPage < totalPages}
            style={{
              overflow: "visible",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }} //
            loader={
              <div className="loader-container text-center mt-4">
                <ClipLoader color="#000" size={30} />
              </div>
            }
          >
            <Row className="g-2 g-md-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 row-cols-xxl-6">
              {sortedProducts.map((product, index) => (
                <Col key={index}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </Container>
      </section>
    </>
  );
};

export default PageCategoryDetail;
