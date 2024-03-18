import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

import { FaLocationDot, FaMobile, FaEnvelope } from "react-icons/fa6";
import payments from "../../../../assets/images/payments.png";

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx("footer-wrapper")}>
            <div className={cx("footer-container")}>
                <div className={cx("footer-list")}>
                    <div className={cx("footer-item")}>
                        <h2 className={cx("footer-item-title")}>About</h2>
                        <p className={cx("footer-item-des")}>
                            Discover top-quality headphones at our shop! Elevate
                            your audio experience with our curated selection of
                            headphones and earphones. From stylish designs to
                            cutting-edge technology, find your perfect pair
                            today.
                        </p>
                    </div>
                    <div className={cx("footer-item")}>
                        <h2 className={cx("footer-item-title")}>Contact</h2>
                        <ul className={cx("footer-item-list")}>
                            <li className={cx("footer-item-info")}>
                                <FaLocationDot fontSize={22} />
                                <p className={cx("text-info")}>
                                    Duong Quang Ham, Quan Hoa, Cau Giay, Ha Noi
                                </p>
                            </li>
                            <li className={cx("footer-item-info")}>
                                <FaMobile fontSize={22} />
                                <p className={cx("text-info")}>
                                    Phone: +84 888 686 888
                                </p>
                            </li>
                            <li className={cx("footer-item-info")}>
                                <FaEnvelope fontSize={22} />
                                <p className={cx("text-info")}>
                                    Email: dtf.shop@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer-item")}>
                        <h2 className={cx("footer-item-title")}>Categories</h2>
                        <ul className={cx("footer-item-list")}>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Headphones</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Smart Watches</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Bluetooth Speakers</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Wireless Earbods</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Home Theatre</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Projectors</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer-item")}>
                        <h2 className={cx("footer-item-title")}>Pages</h2>
                        <ul className={cx("footer-item-list")}>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Home</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>About</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Privacy Policy</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Returns</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Terms & Conditons</a>
                            </li>
                            <li className={cx("footer-item-link")}>
                                <a className={cx("text")}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx("footer-bar")}>
                    <p className={cx("copy-right")}>
                        DT . F Shop &copy; 2024. Design by _dtuan.174{" "}
                    </p>
                    <div className={cx("payments")}>
                        <img
                            src={payments}
                            className={cx("payment-img")}
                            alt="payment"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
