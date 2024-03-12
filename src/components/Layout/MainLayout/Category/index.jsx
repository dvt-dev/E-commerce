import styles from "./Category.module.scss";
import classNames from "classnames/bind";

import cat1 from "../../../../assets/images/category/cat-1.jpg";
import cat2 from "../../../../assets/images/category/cat-2.jpg";
import cat3 from "../../../../assets/images/category/cat-3.jpg";
import cat4 from "../../../../assets/images/category/cat-4.jpg";

const cx = classNames.bind(styles);

const Category = () => {
    return (
        <section className={cx("category-wrapper")}>
            <div className={cx("category-container")}>
                <div className={cx("category")}>
                    <img
                        className={cx("category-img")}
                        src={cat1}
                        alt="category"
                    />
                </div>
                <div className={cx("category")}>
                    <img
                        className={cx("category-img")}
                        src={cat2}
                        alt="category"
                    />
                </div>
                <div className={cx("category")}>
                    <img
                        className={cx("category-img")}
                        src={cat3}
                        alt="category"
                    />
                </div>
                <div className={cx("category")}>
                    <img
                        className={cx("category-img")}
                        src={cat4}
                        alt="category"
                    />
                </div>
            </div>
        </section>
    );
};

export default Category;
