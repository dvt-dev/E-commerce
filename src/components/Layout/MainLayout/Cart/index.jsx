import styles from "./Cart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cart = () => {
    return (
        <secction className={cx("cart-wrapper")}>
            <div className={cx("cart-container")}>Cart</div>
        </secction>
    );
};

export default Cart;
