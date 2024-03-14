import styles from "./CartItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const CartItem = () => {
    return (
        <div className={cx("cart-item-wrapper")}>
            <div className={cx("cart-item-container")}>CartItem</div>
        </div>
    );
};

export default CartItem;
