import styles from "./Product.module.scss";
import classNames from "classnames/bind";

import prod1 from "../../../../assets/images/products/earbuds-prod-1.webp";

const cx = classNames.bind(styles);

const Product = () => {
    return (
        <section className={cx("product-wrapper")}>
            <div className={cx("product-container")}>
                <div className={cx("product-thumbnail")}>
                    <img
                        src={prod1}
                        alt="product"
                        className={cx("product-img")}
                    />
                </div>
                <div className={cx("product-details")}>
                    <p className={cx("product-name")}>
                        Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod
                        Ca...
                    </p>
                    <span className={cx("product-price")}>&#x24; 100</span>
                </div>
            </div>
        </section>
    );
};

export default Product;
