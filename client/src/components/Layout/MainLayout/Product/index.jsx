/* eslint-disable react/prop-types */
import styles from "./Product.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Product = ({ id, data }) => {
    return (
        <section className={cx("product-wrapper")}>
            <div className={cx("product-container")}>
                <div className={cx("product-thumbnail")}>
                    <img
                        src={
                            import.meta.env.VITE_API_BASE_URL +
                            data?.image.data.attributes.url
                        }
                        alt="product"
                        className={cx("product-img")}
                    />
                </div>
                <div className={cx("product-details")}>
                    <p className={cx("product-name")}>{data.name}</p>
                    <span className={cx("product-price")}>
                        &#x24; {data.price}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Product;
