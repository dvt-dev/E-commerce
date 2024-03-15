/* eslint-disable react/prop-types */
import styles from "./Search.module.scss";
import classNames from "classnames/bind";

import prod1 from "../../../../assets/images/products/earbuds-prod-1.webp";

import { MdClose } from "react-icons/md";

const cx = classNames.bind(styles);

const Search = ({ setShowSearch }) => {
    return (
        <div className={cx("search-wrapper")}>
            <div className={cx("search-container")}>
                <div className={cx("search-input-wrap")}>
                    <input
                        type="text"
                        placeholder="Search for products ..."
                        autoFocus
                        className={cx("search-input")}
                    />
                </div>
                <div className={cx("search-result-content")}>
                    <div className={cx("search-results")}>
                        <div className={cx("search-result-item")}>
                            <div className={cx("product-image")}>
                                <img
                                    className={cx("prod-img")}
                                    src={prod1}
                                    alt="Product Image"
                                />
                            </div>
                            <div className={cx("product-details")}>
                                <h3 className={cx("product-name")}>
                                    product name
                                </h3>
                                <p className={cx("product-des")}>
                                    product description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MdClose
                size={50}
                className={cx("close-btn")}
                onClick={() => setShowSearch(false)}
            />
        </div>
    );
};

export default Search;
