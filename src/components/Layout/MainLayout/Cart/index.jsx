/* eslint-disable react/prop-types */
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";

import { MdOutlineClose } from "react-icons/md";
import CartItem from "./CartItem";

const cx = classNames.bind(styles);

const Cart = ({ setShowCart }) => {
    return (
        <section className={cx("cart-wrapper")}>
            <div className={cx("cart-container")}>
                <div
                    className={cx("opac-layer")}
                    onClick={() => setShowCart(false)}
                />
                <div className={cx("cart-content")}>
                    <div className={cx("cart-header")}>
                        <span className={cx("cart-heading")}>
                            shopping cart
                        </span>
                        <button
                            className={cx("close-btn", "btn")}
                            onClick={() => setShowCart(false)}
                        >
                            <MdOutlineClose fontSize={30} />
                        </button>
                    </div>

                    <div className={cx("list-items")}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>

                    <div className={cx("cart-footer")}>
                        <div className={cx("subtotal")}>
                            <p className={cx("subtotal-text")}>Subtotal</p>
                            <span className={cx("subtotal-price")}>$10000</span>
                        </div>
                    </div>

                    {/* <div className={cx("empty-cart")}>
                        <BsCartX fontSize={130} />
                        <h2 className={cx("empty-cart-title")}>
                            Your Cart is{" "}
                            <span style={{ color: "red" }}>Empty !</span>
                        </h2>
                        <p className={cx("empty-cart-des")}>
                            Must add items on the cart before you proceed to
                            checkout.
                        </p>
                        <button className={cx("back-to-home", "btn")}>
                            Back to home
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Cart;
