import styles from "./CartItem.module.scss";
import classNames from "classnames/bind";

import prod1 from "../../../../../assets/images/products/earbuds-prod-1.webp";

import { RiDeleteBin5Line } from "react-icons/ri";

const cx = classNames.bind(styles);

const CartItem = () => {
    return (
        <div className={cx("cart-item-wrapper")}>
            <div className={cx("cart-item-container")}>
                <div className={cx("cart-item-image")}>
                    <img
                        className={cx("cart-item-img")}
                        src={prod1}
                        alt="Product Image"
                    />
                </div>
                <div className={cx("cart-item-info")}>
                    <div className={cx("cart-item-details")}>
                        <h3 className={cx("product-name")}>
                            tai nghe airpod pro gen 2
                        </h3>
                        <p className={cx("product-price")}> $10.99</p>
                    </div>
                    <div className={cx("cart-item-buttons")}>
                        <button className={cx("remove-btn", "btn")}>
                            <RiDeleteBin5Line
                                fontSize={20}
                                className={cx("del-icon")}
                            />
                            Remove
                        </button>
                        <div className={cx("quantity-btn")}>
                            <span className={cx("reduce")}>-</span>
                            <span className={cx("quantity")}>1</span>
                            <span className={cx("increase")}>+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
