import styles from "./Category.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Category = () => {
    return (
        <section className={cx("category-wrapper")}>
            <div className={cx("category-container")}>Category</div>
        </section>
    );
};

export default Category;
