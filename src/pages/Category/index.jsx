import Products from "../../components/Layout/MainLayout/Products";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Category = () => {
    return (
        <section className={cx("category-wrapper")}>
            <div className={cx("category-container")}>
                <h2 className={cx("category-title")}>Category title</h2>
                <div className={cx("category-content")}>
                    <Products innerPage={true} />
                </div>
            </div>
        </section>
    );
};

export default Category;
