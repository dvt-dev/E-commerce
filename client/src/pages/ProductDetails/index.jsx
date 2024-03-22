import styles from "./ProductDetails.module.scss";
import classNames from "classnames/bind";

import prod from "../../assets/images/products/earbuds-prod-1.webp";

import RelatedProducts from "../../components/Layout/MainLayout/RelatedProducts";

import { FaCartPlus } from "react-icons/fa6";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaLinkedin,
} from "react-icons/fa";

const cx = classNames.bind(styles);

const ProductDetails = () => {
    return (
        <section className={cx("product-details-wrapper")}>
            <div className={cx("product-details-container")}>
                <div className={cx("product-details-content")}>
                    <div className={cx("product-image")}>
                        <img
                            className={cx("prod-img")}
                            src={prod}
                            alt="product-img"
                        />
                    </div>
                    <div className={cx("product-details")}>
                        <h2 className={cx("product-name")}>
                            Amazon Basics High-Speed HDMI Cable (18 Gbps,
                            4K/6...
                        </h2>
                        <span className={cx("product-price")}>&#x24; 100</span>
                        <p className={cx("product-des")}>
                            Hello sassy and fierce ladies! We see you soaring
                            high for your dreams, and we want to support them.
                            Let TRebel Airdopes 141 be your biggest cheerleader
                            while you win the world with your go-getter
                            attitude! Shun their opinions by indulging in your
                            rhythm with the 8mm Dynamic Drivers. Ace those
                            business calls with its ENx™ Technology that makes
                            you heard every time. ASAP™ Charge empowers you with
                            75 minutes of playback with just 5 minutes of
                            charging. IPX4 makes it easier to roll in the good
                            times as you rock that sweat, changing your
                            lifestyle. Connect instantly with its IWP™
                            Technology & keep everything under control with its
                            Quick Response Touch.
                        </p>
                        <div className={cx("cart-buttons")}>
                            <div className={cx("quantity-buttons")}>
                                <span className={cx("reduce")}>-</span>
                                <span className={cx("quantity")}>1</span>
                                <span className={cx("increase")}>+</span>
                            </div>
                            <button className={cx("add-to-card", "btn")}>
                                <FaCartPlus />
                                Add to Cart
                            </button>
                        </div>
                        <span className={cx("divider")} />
                        <div className={cx("info-expand")}>
                            <div className={cx("info-item", "category")}>
                                <span className={cx("title")}>Category: </span>
                                <span className={cx("category-name")}>
                                    Headphones
                                </span>
                            </div>
                            <div className={cx("info-item", "share")}>
                                <span className={cx("title")}>Share:</span>
                                <div className={cx("social-icons")}>
                                    <FaFacebook
                                        size={20}
                                        className={cx("social-icon")}
                                    />
                                    <FaTwitter
                                        size={20}
                                        className={cx("social-icon")}
                                    />
                                    <FaInstagram
                                        size={20}
                                        className={cx("social-icon")}
                                    />
                                    <FaLinkedin
                                        size={20}
                                        className={cx("social-icon")}
                                    />
                                    <FaPinterest
                                        size={20}
                                        className={cx("social-icon")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </section>
    );
};

export default ProductDetails;
