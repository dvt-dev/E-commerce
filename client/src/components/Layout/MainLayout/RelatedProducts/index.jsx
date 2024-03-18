import styles from "./RelatedProducts.module.scss";
import classNames from "classnames/bind";

import Products from "../Products";

const cx = classNames.bind(styles);

const RelatedProducts = () => {
    return (
        <section className={cx("related-products-wrapper")}>
            <div className={cx("related-products-container")}>
                <h2 className={cx("related-products-title")}>Related title</h2>
                <div className={cx("related-products-content")}>
                    <Products innerPage={true} />
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
