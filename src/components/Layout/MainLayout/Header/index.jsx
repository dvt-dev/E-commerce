import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import logo from "../../../../assets/icons/shop-logo.png";

import { AiOutlineUser } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";

// import { Context } from "../../../../context/AppContext";
import { useEffect, useState } from "react";
import Cart from "../Cart";

const cx = classNames.bind(styles);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const handleScroll = () => {
        let offset = window.scrollY;
        if (offset > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <>
            <header
                className={cx(
                    "header-wrapper",
                    `${scrolled ? "sticky-header" : ""}`
                )}
            >
                <div className={cx("header-container")}>
                    <div className={cx("logo-wrapper")}>
                        <img className={cx("logo-img")} src={logo} alt="Logo" />
                        <h4 className={cx("shop-name")}>DT . F</h4>
                    </div>
                    <nav className={cx("navbar")}>
                        <ul className={cx("nav-list")}>
                            <li className={cx("nav-item")}>
                                <a className={cx("nav-link")}>home</a>
                            </li>
                            <li className={cx("nav-item")}>
                                <a className={cx("nav-link")}>shop</a>
                            </li>
                            <li className={cx("nav-item")}>
                                <a className={cx("nav-link")}>about</a>
                            </li>
                            <li className={cx("nav-item")}>
                                <a className={cx("nav-link")}>contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={cx("header-tools")}>
                        <button
                            className={cx("user", "btn", "header-tool-item")}
                        >
                            <AiOutlineUser size={28} />
                        </button>

                        <button
                            className={cx("search", "btn", "header-tool-item")}
                        >
                            <TbSearch size={28} />
                        </button>
                        <button
                            className={cx(
                                "wishlist",
                                "btn",
                                "header-tool-item"
                            )}
                        >
                            <TbHeart size={28} />
                        </button>
                        <button
                            className={cx("cart", "btn", "header-tool-item")}
                            onClick={() => {
                                setShowCart(true);
                            }}
                        >
                            <IoCartOutline size={28} />
                            <span className={cx("cart-quantity")}>5</span>
                        </button>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
        </>
    );
};

export default Header;
