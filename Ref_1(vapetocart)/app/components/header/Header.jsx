"use client";
import "./header.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Badge,
  Button,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logoa200x37.png";
import iconMenu from "@/public/assets/images/menu.svg";
import ScrollToTopButton from "../scroll-to-top-button/ScrollToTopButton";
import { useCart } from "@/app/context/cartContext";
import MiniCart from "../mini-cart/MiniCart";
import NavMobile from "../nav-mobile/NavMobile";
import SearchBar from "../search-bar/SearchBar";
import axiosInstance from "@/app/utils/axiosInstance";
import Topbar from "../topbar/Topbar";

const Header = ({ showTopbar }) => {
  const { totalQuantity, setShowMiniCart } = useCart();
  const [clientTotalQuantity, setClientTotalQuantity] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleCloseMobileNav = () => setShowMobileNav(false);
  const handleShowMobileNav = () => setShowMobileNav(true);
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  // ENSURE `TOTALQUANTITY` IS ONLY RENDERED ON THE CLIENT
  useEffect(() => {
    setClientTotalQuantity(totalQuantity);
  }, [totalQuantity]);
  // ENSURE `TOTALQUANTITY` IS ONLY RENDERED ON THE CLIENT

  // FETCH PRODUCTS
  const fetchProducts = async (query) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/products/getproducts`);
      const filteredProducts = response?.data?.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      return filteredProducts; // Return the results
    } catch (error) {
      console.error(`Error fetching products: ${error.message}`);
      return []; // Return an empty array on error
    } finally {
      setLoading(false);
    }
  };
  // FETCH PRODUCTS

  // SHOW/HIDE HEADER
  useEffect(() => {
    let totalScroll = 0;
    let direction;
    const handleScroll = () => {
      if (totalScroll > window.scrollY) {
        direction = "upwards";
      } else {
        direction = "downwards";
      }

      if (window.scrollY > 300 && direction == "downwards") {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      totalScroll = window.scrollY;
    };

    // ADD SCROLL EVENT LISTENER
    window.addEventListener("scroll", handleScroll);
    // ADD SCROLL EVENT LISTENER

    // CLEAN UP EVENT LISTENER ON COMPONENT UNMOUNT
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // CLEAN UP EVENT LISTENER ON COMPONENT UNMOUNT
  }, []);
  // SHOW/HIDE HEADER

  return (
    <>
      <ScrollToTopButton />
      <NavMobile
        showMobileNav={showMobileNav}
        handleCloseMobileNav={handleCloseMobileNav}
      />
      <MiniCart />
      {showTopbar && <Topbar className="sec-tertiary" />}
      <header
        className="b-shadow position-sticky top-0 z-2 transition"
        data-header-shown={showHeader}
      >
        <div className="hdr-center position-relative py-2 py-lg-3 bgColor-light">
          <div
            className="nav-opener d-lg-none position-absolute left-0 top-50 translate-middle-y ms-2 ms-md-4"
            onClick={handleShowMobileNav}
          >
            <Image
              src={iconMenu}
              alt="Navigation"
              priority={true}
              quality="80"
              width={24}
              height={24}
            />
          </div>
          <Container className="d-flex flex-wrap align-items-center justify-content-between pe-4">
            <Link href="/" className="navbar-brand p-0 mx-0">
              <Image
                src={logo}
                alt="Logo"
                priority={true}
                quality="80"
                width={200}
                height={37}
                className="object-fit-contain"
              />
            </Link>
            <SearchBar
              className="d-flex flex-fill"
              placeholder="Search for products"
              fetchProducts={fetchProducts}
            />
            <div className="hdr-right d-flex flex-wrap align-items-center gap-2 gap-sm-3 color-dark">
              <Link href="/auth/login" aria-label="Login" title="Login">
                <FontAwesomeIcon
                  icon={faUser}
                  aria-hidden={true}
                  style={{ width: "16px", height: "16px" }}
                />
              </Link>
              <span onClick={() => setShowMiniCart(true)}>
                <FontAwesomeIcon icon={faCartPlus} />
                {clientTotalQuantity > 0 && (
                  <Badge bg="warning">
                    {clientTotalQuantity <= 50 ? clientTotalQuantity : "50+"}
                  </Badge>
                )}
              </span>
            </div>
          </Container>
        </div>
        <div className="hdr-bottom py-2 bgColor-light">
          <Navbar expand="lg" className="navbar p-0">
            <Container className="justify-content-center align-items-stretch">
              <Nav className="d-none d-lg-flex gap-1 gap-md-2 gap-xl-3 flex-row">
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/new-in"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    New In
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/disposable-vape"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    Disposable Vape
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/vape-kits"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    Vape Kits
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/nic-salts"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    Nic Salts
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/e-liquids"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    E-Liquids
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/pods"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    Pods
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/accessories"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    Accessories
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link
                    href="/nicotine-pouches"
                    className="nav-link p-0 text-uppercase fw-bold"
                  >
                    Nicotine Pouches
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link href="/clearance">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="text-uppercase fw-bold"
                    >
                      Clearance
                    </Button>
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link href="/vape-deals">
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="text-uppercase fw-bold"
                    >
                      Vape Deals
                    </Button>
                  </Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-wrap align-items-center">
                  <Link href="/coming-soon">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="text-uppercase fw-bold"
                    >
                      Coming Soon
                    </Button>
                  </Link>
                </Nav.Item>
              </Nav>
            </Container>
          </Navbar>
          <Container>
            <SearchBar
              className="d-flex d-lg-none"
              placeholder="Search for products"
              fetchProducts={fetchProducts}
            />
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
