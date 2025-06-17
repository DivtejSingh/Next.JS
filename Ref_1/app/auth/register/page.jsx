import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

export const metadata = {
  title: "Register | Vape to Cart",
  description:
    "Discover the ultimate vaping experience with Vape to Cart 6000 and 12000 puffs, Featuring sleek designs and top-tier performance, Shop now for exclusive deals and elevate your style with our premium, fashionable vapes.",
  alternates: {
    canonical: `https://www.vapetocart.co.uk/auth/register`,
  },
  robots: "noindex, nofollow",
  openGraph: {
    title: "Register | Vape to Cart",
    description:
      "Discover the ultimate vaping experience with Vape to Cart 6000 and 12000 puffs, Featuring sleek designs and top-tier performance, Shop now for exclusive deals and elevate your style with our premium, fashionable vapes.",
    url: "https://www.vapetocart.co.uk/auth/register",
    type: "website",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vape to Cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Register | Vape to Cart",
    description:
      "Discover the ultimate vaping experience with Vape to Cart 6000 and 12000 puffs, Featuring sleek designs and top-tier performance, Shop now for exclusive deals and elevate your style with our premium, fashionable vapes.",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};
export default function RegisterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "Register | Vape to Cart",
    url: "https://www.vapetocart.co.uk/auth/register",
    publisher: {
      "@type": "Organization",
      name: "Vape to Cart",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vapetocart.co.uk/assets/images/logoa200x37.png",
      },
    },
  };
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="register-page py-4">
        <div className="container">
          <h1 className="h2 fw-bold mb-3 text-black text-center">My Account</h1>
          <div className="row gy-4 align-items-center pb-4">
            <div className="col-12 col-md-6 h-100">
              <div
                className="card bgColor-tertiary"
                style={{ minHeight: "300px" }}
              >
                <div className="card-body">
                  <h2 className="h3">Create an Account</h2>
                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label d-none">
                      Full Name
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id="fname"
                        placeholder="Enter Full Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label d-none">
                      Email
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label d-none">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="mb3 d-flex justify-content-between align-items-center">
                    <button className="btn btn-main btn-dark">Sign Up</button>
                    <span>
                      <input type="checkbox" className="mx-1" />
                      Subscribe to stay updated with Offers!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 h-100">
              <div
                className="card h-100 bgColor-tertiary"
                style={{ minHeight: "300px" }}
              >
                <div className="card-body h-100">
                  <h2 className="h3">Already Have an Account?</h2>
                  <p className="mb-3 fs-6">
                    Registering for this site allows you to access your order
                    status and history. We'll get a new account set up for you
                    in no time. For this will only ask you for information
                    necessary to make the purchase process faster and easier
                  </p>
                  <div className="mb3">
                    <Link
                      href="/auth/login"
                      className="btn btn-outline-dark text-uppercase"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
