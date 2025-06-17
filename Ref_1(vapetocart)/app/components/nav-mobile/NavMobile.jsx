import "./nav-mobile.css";
import { Offcanvas, Accordion } from "react-bootstrap";
import Link from "next/link";

const NavMobile = ({ showMobileNav, handleCloseMobileNav }) => {
  return (
    <Offcanvas
      className="nav-mobile bgColor-light text-uppercase fw-bold"
      show={showMobileNav}
      onHide={handleCloseMobileNav}
      placement="start"
    >
      <Offcanvas.Header closeButton className="align-items-center px-2 px-md-3" />
      <Offcanvas.Body className="mt-0 px-2 px-md-3 pt-0">
        <ul className="d-flex flex-wrap flex-column gap-3">
          <li>
            <Link href="/new-in" className="nav-link" onClick={() => handleCloseMobileNav()}>
              New In
            </Link>
          </li>
          {/* <li>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Quick Shop</Accordion.Header>
                <Accordion.Body className="ps-2">
                  <ul>
                    <li>
                      <Link href="/hayati-pro-ultra-15000" className="nav-link">
                        Hayati Pro Ultra 15000
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tick-tock-magic-8000-vape"
                        className="nav-link"
                      >
                        Tick Tock Magic 8000 Vape
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hyola-pro-max-6000-vape"
                        className="nav-link"
                      >
                        Hyola Pro Max 6000 Vape
                      </Link>
                    </li>
                    <li>
                      <Link href="/big-bar-6000" className="nav-link">
                        Big Bar 6000
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li> */}
          <li>
            <Link href="/disposable-vape" className="nav-link" onClick={() => handleCloseMobileNav()}>
              Disposable Vape
            </Link>
          </li>
          <li>
            <Link href="/vape-kits" className="nav-link" onClick={() => handleCloseMobileNav()}>
              Vape Kits
            </Link>
          </li>
          <li>
            <Link href="/nic-salts" className="nav-link" onClick={() => handleCloseMobileNav()}>
              Nic Salts
            </Link>
          </li>
          <li>
            <Link href="/e-liquids" className="nav-link" onClick={() => handleCloseMobileNav()}>
              E-Liquids
            </Link>
          </li>
          <li>
            <Link href="/pods" className="nav-link" onClick={() => handleCloseMobileNav()}>
              Pods
            </Link>
          </li>
          <li>
            <Link href="/accessories" className="nav-link" onClick={() => handleCloseMobileNav()}>
              Accessories
            </Link>
          </li>
          <li>
            <Link href="/nicotine-pouches" className="nav-link" onClick={() => handleCloseMobileNav()}>
              Nicotine Pouches
            </Link>
          </li>
          <li>
            <Link href="/clearance" className="nav-link text-danger" onClick={() => handleCloseMobileNav()}>
              Clearance
            </Link>
          </li>
          <li>
            <Link href="/vape-deals" className="nav-link text-success" onClick={() => handleCloseMobileNav()}>
              Vape Deals
            </Link>
          </li>
          <li>
            <Link href="/coming-soon" className="nav-link text-primary" onClick={() => handleCloseMobileNav()}>
              Coming Soon
            </Link>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavMobile;
