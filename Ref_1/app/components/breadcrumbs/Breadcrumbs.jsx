"use client";
import "./breadcrumbs.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";

const Breadcrumbs = ({ path }) => {
  const pathname = usePathname();
  if (!pathname || !path) return null;

  // SPLIT THE PROVIDED PATH (E.G., "HOME/CATEGORY") INTO SEGMENTS
  const staticSegments = path.split("/");
  // SPLIT THE PROVIDED PATH (E.G., "HOME/CATEGORY") INTO SEGMENTS

  // GET DYNAMIC SEGMENTS FROM THE URL (EVERYTHING AFTER THE DOMAIN)
  const pathSegments = pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  // GET DYNAMIC SEGMENTS FROM THE URL (EVERYTHING AFTER THE DOMAIN)

  // CONSTRUCT BREADCRUMB ITEMS
  let breadcrumbItems = staticSegments.map((segment, index) => ({
    label: segment,
    href: index === 0 ? "/" : null, // Make only the first word clickable
  }));
  // CONSTRUCT BREADCRUMB ITEMS

  // ADD LAST SEGMENT FROM THE URL (NON-CLICKABLE)
  if (lastSegment) {
    breadcrumbItems.push({
      label: decodeURIComponent(lastSegment.replace(/-/g, " ")), // Replace hyphens with spaces
      href: null, // Last segment is non-clickable
    });
  }
  // ADD LAST SEGMENT FROM THE URL (NON-CLICKABLE)

  // CAPITALIZE FIRST LETTER OF PAGE NAME
  const capitalizeWords = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());
  // CAPITALIZE FIRST LETTER OF PAGE NAME

  return (
    <div className="page-breadcrumbs py-2 bgColor-dark color-light small">
      <Container>
        <Breadcrumb>
          {breadcrumbItems.map((item, index) => {
            const isClickable = item.href !== null;
            return (
              <li className="breadcrumb-item fw-bold" key={index}>
                {isClickable ? (
                  <Link href={item.href}>{capitalizeWords(item.label)}</Link>
                ) : (
                  capitalizeWords(item.label)
                )}
              </li>
            );
          })}
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
