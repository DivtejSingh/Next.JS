import { Container, Row, Col } from "react-bootstrap";
import SectionHeadingCenter from "@/app/components/sec-heading-center/SectionHeadingCenter";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import Script from "next/script";

export const metadata = {
  title: "Privacy Policy | Vape to Cart",
  description:
    "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
  alternates: {
    canonical: "https://www.vapetocart.co.uk/pages/privacy",
  },
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Vape to Cart",
    description:
      "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
    url: "https://www.vapetocart.co.uk/pages/privacy",
    type: "website",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Vape to Cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Vape to Cart",
    description:
      "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};

const date = new Date();
export default function PrivacyPage() {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "Privacy Policy | Vape to Cart",
    url: "https://www.vapetocart.co.uk/pages/privacy",
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
        name: "Privacy",
        item: "https://www.vapetocart.co.uk/pages/privacy",
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Breadcrumbs path="Home" />
      <section className="privacy sec-content sec-padding-small">
        <Container>
          <Row>
            <Col>
              <SectionHeadingCenter text="Privacy Policy" />
              <p className="mb-2">
                This Privacy Policy describes how www.vapetocart.com (the “Site”
                or “we”) collects, uses, and discloses your Personal Information
                when you visit or make a purchase from the Site.
              </p>
              <h3 className="fs-4 color-dark my-3">
                Collecting Personal Information
              </h3>
              <p className="mb-2">
                When you visit the Site, we collect certain information about
                your device, your interaction with the Site, and information
                necessary to process your purchases. We may also collect
                additional information if you Privacy Policy for customer
                support. In this Privacy Policy, we refer to any information
                that can uniquely identify an individual (including the
                information below) as “Personal Information”. See the list below
                for more information about what Personal Information we collect
                and why.
              </p>
              <h3 className="fs-4 color-dark my-3">Device information</h3>
              <p className="mb-2">
                Examples of Personal Information collected: version of web
                browser, IP address, time zone, cookie information, what sites
                or products you view, search terms, and how you interact with
                the Site. Purpose of collection: to load the Site accurately for
                you, and to perform analytics on Site usage to optimize our
                Site. Source of collection: Collected automatically when you
                access our Site using cookies, log files, web beacons, tags, or
                pixels Disclosure for a business purpose: shared with our
                processor Shopify
              </p>
              <h3 className="fs-4 color-dark my-3">Order information</h3>
              <p className="mb-2">
                Examples of Personal Information collected: name, billing
                address, shipping address, payment information, email address,
                and phone number.
              </p>
              <p className="mb-2">
                <strong>Purpose of collection:</strong> to provide products or
                services to you to fulfil our contract, to process your payment
                information, arrange for shipping, and provide you with invoices
                and/or order confirmations, communicate with you, screen our
                orders for potential risk or fraud, and when in line with the
                preferences you have shared with us, provide you with
                information or advertising relating to our products or services.
              </p>
              <p className="mb-2">
                <strong>Source of collection:</strong> collected from you.
              </p>
              <p className="mb-2">
                Disclosure for a business purpose: shared with our processor
                Shopify
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Customer support information
              </h3>
              <p className="mb-2">
                Examples of Personal Information collected:
              </p>
              <p className="mb-2">
                Purpose of collection: to provide customer support.
              </p>
              <p className="mb-2">Source of collection: collected from you.</p>
              <p className="mb-2">
                Disclosure for a business purpose: Offline Data, Purchased
                Marketing Data/Lists
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Minors
              </h3>
              <p className="mb-2">
                The Site is not intended for individuals under the age of 18. We
                do not intentionally collect Personal Information from children.
                If you are the parent or guardian and believe your child has
                provided us with Personal Information, please Privacy Policy via
                Email (sales@vapetocart.co.uk) to request deletion.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Sharing Personal Information
              </h3>
              <p className="mb-2">
                We share your Personal Information with service providers to
                help us provide our services and fulfil our contracts with you,
                as described above. For example:
              </p>
              <p className="mb-2">
                We use Shopify to power our online store. You can read more
                about how Shopify uses your Personal Information here:{" "}
                <a href="https://www.shopify.com/legal/privacy" target="_blank">
                  https://www.shopify.com/legal/privacy
                </a>
              </p>
              <p className="mb-2">
                We may share your Personal Information to comply with applicable
                laws and regulations, to respond to any lawful request for
                information we receive, or to otherwise protect our rights.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Behavioural Advertising
              </h3>
              <p className="mb-2">
                WAs described above, we use your Personal Information to provide
                you with targeted advertisements or marketing communications we
                believe may be of interest to you. For example:
              </p>
              <p className="mb-2">
                We use Google Analytics to help us understand how our customers
                use the Site. You can read more about how Google uses your
                Personal Information here:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=en"
                  target="_blank"
                >
                  https://policies.google.com/privacy?hl=en
                </a>
                .
              </p>
              <p className="mb-2">
                You can also opt-out of Google Analytics here:
                https://tools.google.com/dlpage/gaoptout.
              </p>
              <p className="mb-2">
                We share information about your use of the Site, your purchases,
                and your interaction with our ads on other websites with our
                advertising partners. We collect and share some of this
                information directly with our advertising partners, and in some
                cases through the use of cookies or other similar technologies
                (which you may consent to, depending on your location).
              </p>
              <p className="mb-2">
                For more information about how targeted advertising works, you
                can visit the Network Advertising Initiative's (“NAI”)
                educational page at
              </p>
              <p className="mb-2">
                http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
              </p>
              <p className="mb-2">
                You can opt out of targeted advertising by:
              </p>
              <p className="mb-2">
                FACEBOOK - https://www.facebook.com/settings/?tab=ads
              </p>
              <p className="mb-2">
                GOOGLE - https://www.google.com/settings/ads/anonymous
              </p>
              <p className="mb-2">
                BING -{" "}
                <a
                  href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                  target="_blank"
                >
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
              </p>
              <p className="mb-2">
                Additionally, you can opt out of some of these services by
                visiting the Digital Advertising Alliance's opt-out portal at:{" "}
                <a href="http://optout.aboutads.info/" target="_blank">
                  http://optout.aboutads.info/
                </a>
                .
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Using Personal Information
              </h3>
              <p className="mb-2">
                We use your personal Information to provide our services to you,
                which includes: offering products for sale, processing payments,
                shipping and fulfilment of your order, and keeping you up to
                date on new products, services, and offers.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Lawful basis
              </h3>
              <p className="mb-2">
                Pursuant to the General Data Protection Regulation (“GDPR”), if
                you are a resident of the European Economic Area (“EEA”), we
                process your personal information under the following lawful
                bases:
              </p>
              <p className="mb-2">Your consent;</p>
              <p className="mb-2">
                The performance of the contract between you and the Site;
              </p>
              <p className="mb-2">Compliance with our legal obligations;</p>
              <p className="mb-2">To protect your vital interests;</p>
              <p className="mb-2">
                To perform a task carried out in the public interest;
              </p>
              <p className="mb-2">
                For our legitimate interests, which do not override your
                fundamental rights and freedoms.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Retention
              </h3>
              <p className="mb-2">
                When you place an order through the Site, we will retain your
                Personal Information for our records unless and until you ask us
                to erase this information.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Automatic decision-making
              </h3>
              <p className="mb-2">
                If you are a resident of the EEA, you have the right to object
                to processing based solely on automated decision-making (which
                includes profiling), when that decision-making has a legal
                effect on you or otherwise significantly affects you.
              </p>
              <p className="mb-2">
                We engage in fully automated decision-making that has a legal or
                otherwise significant effect using customer data.
              </p>
              <p className="mb-2">
                Our processor Shopify uses limited automated decision-making to
                prevent fraud that does not have a legal or otherwise
                significant effect on you.
              </p>
              <p className="mb-2">
                Services that include elements of automated decision-making
                include:
              </p>
              <p className="mb-2">
                Temporary denylist of IP addresses associated with repeated
                failed transactions. This denylist persists for a small number
                of hours.
              </p>
              <p className="mb-2">
                Temporary denylist of credit cards associated with denylisted IP
                addresses. This denylist persists for a small number of days.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                GDPR
              </h3>
              <p className="mb-2">
                If you are a resident of the EEA, you have the right to access
                the Personal Information we hold about you, to port it to a new
                service, and to ask that your Personal Information be corrected,
                updated, or erased. If you would like to exercise these rights,
                please Privacy Policy through via Email (sales@vapetocart.co.uk)
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Cookies
              </h3>
              <p className="mb-2">
                A cookie is a small amount of information that's downloaded to
                your computer or device when you visit our Site. We use a number
                of different cookies, including functional, performance,
                advertising, and social media or content cookies. Cookies make
                your browsing experience better by allowing the website to
                remember your actions and preferences (such as login and region
                selection). This means you don't have to re-enter this
                information each time you return to the site or browse from one
                page to another. Cookies also provide information on how people
                use the website, for instance whether it's their first time
                visiting or if they are a frequent visitor.
              </p>
              <p className="color-dark fs-6 mb-2">
                We use the following cookies to optimize your experience on our
                Site and to provide our services.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Cookies Necessary for the Functioning of the Store
              </h3>
              <p className="color-dark fs-6 mb-2">NAME FUNCTION</p>
              <p className="mb-2">
                _ab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Used in
                connection with access to admin.
              </p>
              <p className="mb-2">
                _secure_session_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Used
                in connection with navigation through a storefront.
              </p>
              <p className="mb-2">
                cart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Used in connection
                with shopping cart.
              </p>
              <p className="mb-2">cart_sig Used in connection with checkout.</p>
              <p className="mb-2">cart_ts Used in connection with checkout.</p>
              <p className="mb-2">
                checkout_tokenUsed in connection with checkout.
              </p>
              <p className="mb-2">secret Used in connection with checkout.</p>
              <p className="mb-2">secure_customer_sig</p>
              <p className="mb-2">storefront_digest</p>
              <p className="mb-2">Used in connection with customer login.</p>
              <p className="mb-2">Used in connection with customer login.</p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Reporting and Analytics
              </h3>
              <p className="color-dark fs-6 mb-2">NAME FUNCTION</p>
              <p className="mb-2">
                _tracking_consent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Tracking preferences.
              </p>
              <p className="mb-2">_landing_page Track landing pages</p>
              <p className="mb-2">_landing_page Track landing pages</p>
              <p className="mb-2">
                _s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Shopify analytics.
              </p>
              <p className="mb-2">
                _s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Shopify analytics.
              </p>
              <p className="mb-2">_shopify_sa_p</p>
              <p className="mb-2">_shopify_sa_p</p>
              <p className="mb-2">_shopify_y</p>
              <p className="mb-2">Shopify analytics.</p>
              <p className="mb-2">
                Shopify analytics relating to marketing &amp; referrals.
              </p>
              <p className="mb-2">
                Shopify analytics relating to marketing &amp; referrals.
              </p>
              <p className="mb-2">Shopify analytics.</p>
              <p className="mb-2">
                _y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Shopify analytics.
              </p>
              <p className="mb-2">
                The length of time that a cookie remains on your computer or
                mobile device depends on whether it is a “persistent” or
                “session” cookie. Session cookies last until you stop browsing
                and persistent cookies last until they expire or are deleted.
                Most of the cookies we use are persistent and will expire
                between 30 minutes and two years from the date they are
                downloaded to your device.
              </p>
              <p className="mb-2">
                You can control and manage cookies in various ways. Please keep
                in mind that removing or blocking cookies can negatively impact
                your user experience and parts of our website may no longer be
                fully accessible.
              </p>
              <p className="mb-2">
                Most browsers automatically accept cookies, but you can choose
                whether or not to accept cookies through your browser controls,
                often found in your browser's “Tools” or “Preferences” menu. For
                more information on how to modify your browser settings or how
                to block, manage or filter cookies can be found in your
                browser's help file or through such sites as
                www.allaboutcookies.org
              </p>
              <p className="mb-2">
                Additionally, please note that blocking cookies may not
                completely prevent how we share information with third parties
                such as our advertising partners. To exercise your rights or
                opt-out of certain uses of your information by these parties,
                please follow the instructions in the “Behavioural Advertising”
                section above
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Do Not Track
              </h3>
              <p className="mb-2">
                Please note that because there is no consistent industry
                understanding of how to respond to “Do Not Track” signals, we do
                not alter our data collection and usage practices when we detect
                such a signal from your browser.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Changes
              </h3>
              <p className="mb-2">
                We may update this Privacy Policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal, or regulatory reasons.
              </p>
              <h3 className="fs-4 color-dark my-3 text-decoration-underline">
                Contact
              </h3>
              <p className="mb-2">
                For more information about our privacy practices, if you have
                questions, or if you would like to make a complaint, please
                Privacy Policy via Email (sales@vapetocart.co.uk)
              </p>
              <p className="mb-2 fw-bold color-dark">
                Last updated:{" "}
                {`${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`}
              </p>
              <p>
                If you are not satisfied with our response to your complaint,
                you have the right to lodge your complaint with the relevant
                data protection authority. You can contact your local data
                protection authority, or our supervisory authority here:{" "}
                <a href="https://ico.org.uk/make-a-complaint/" target="_blank">
                  https://ico.org.uk/make-a-complaint/
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
