/* eslint-disable react/prop-types */
import Product from "../Product";
import styles from "./Products.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Products = ({ innerPage }) => {
    return (
        <section className={cx("products-wrapper")}>
            <div className={cx("products-container")}>
                {!innerPage && (
                    <div className={cx("products-heading")}>
                        <h2 className={cx("products-heading-text")}>
                            Products popular
                        </h2>
                    </div>
                )}

                <div className={cx("products-list")}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </section>
    );
};

export default Products;
