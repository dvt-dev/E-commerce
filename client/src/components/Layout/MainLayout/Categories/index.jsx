import styles from "./Categories.module.scss";
import classNames from "classnames/bind";

import cat1 from "../../../../assets/images/category/cat-1.jpg";
import cat2 from "../../../../assets/images/category/cat-2.jpg";
import cat3 from "../../../../assets/images/category/cat-3.jpg";
import cat4 from "../../../../assets/images/category/cat-4.jpg";

const cx = classNames.bind(styles);

const Categories = () => {
    return (
        <section className={cx("categories-wrapper")}>
            <div className={cx("categories-container")}>
                <div className={cx("categories")}>
                    <img
                        className={cx("categories-img")}
                        src={cat1}
                        alt="categories"
                    />
                </div>
                <div className={cx("categories")}>
                    <img
                        className={cx("categories-img")}
                        src={cat2}
                        alt="categories"
                    />
                </div>
                <div className={cx("categories")}>
                    <img
                        className={cx("categories-img")}
                        src={cat3}
                        alt="categories"
                    />
                </div>
                <div className={cx("categories")}>
                    <img
                        className={cx("categories-img")}
                        src={cat4}
                        alt="categories"
                    />
                </div>
            </div>
        </section>
    );
};

export default Categories;
