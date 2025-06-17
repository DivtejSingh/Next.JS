import "./mini-cart.css";
import { Offcanvas, Badge, Button } from "react-bootstrap";
import { useCart } from "@/app/context/cartContext";
import MiniCartProduct from "../mini-cart-product/MiniCartProduct";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

const MiniCart = () => {
  const { cart, totalQuantity, totalPrice, showMiniCart, setShowMiniCart } =
    useCart();
  return (
    <Offcanvas
      className="mini-cart"
      show={showMiniCart}
      onHide={() => setShowMiniCart(false)}
      placement="end"
    >
      <Offcanvas.Header closeButton className="px-2 px-md-3">
        <Offcanvas.Title className="d-flex flex-wrap align-items-center gap-2">
          <Link href="/cart" onClick={() => setShowMiniCart(false)}>
            Cart
          </Link>
          {totalQuantity > 0 && (
            <Badge className="badge-primary p-1 px-2 small fs-md-6">
              {totalQuantity}
            </Badge>
          )}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-wrap flex-column justify-content-between pt-0 px-2 px-md-3">
        {cart.length > 0 ? (
          <>
            <div className="m-c-products-wrap w-100 overflow-auto">
              {cart.map((product, index) => (
                <MiniCartProduct key={index + 1} product={product} />
              ))}
            </div>
            <div className="m-c-foot mt-4 fw-bold fs-6 color-text">
              <p className="d-flex justify-content-between">
                <strong>Subtotal:</strong>
                <span>£{totalPrice}</span>
              </p>
              <p className="d-flex justify-content-between">
                <strong>Shipping:</strong>
                <span>{totalPrice > 40 ? "Free" : "£3.60"}</span>
              </p>
              <p className="d-flex justify-content-between color-dark">
                <strong>Total:</strong>
                <span>
                  £
                  {(+totalPrice > 40 ? +totalPrice : +totalPrice + 3.6).toFixed(
                    2
                  )}
                </span>
              </p>
              <Button className="btn-main w-100 mt-3 mb-2">Checkout</Button>
            </div>
          </>
        ) : (
          <div className="empty-mini-cart d-flex flex-column align-items-center justify-content-center h-100">
            <FontAwesomeIcon
              icon={faFaceSadTear}
              className="fs-1 mb-3 color-text"
            />
            <p className="text-danger text-uppercase fw-bold fs-5">
              Your cart is currently empty.
            </p>
            {/* <Link href="/products">
              <Button className="btn-main mt-4" onClick={() => setShowMiniCart(false)}>Continue Shopping</Button>
            </Link> */}
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MiniCart;
