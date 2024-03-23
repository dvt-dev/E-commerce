/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import styles from "./Categories.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Categories = ({ categories }) => {
    return (
        <section className={cx("categories-wrapper")}>
            <div className={cx("categories-container")}>
                {categories?.data.map((category) => (
                    <div className={cx("category")} key={category.id}>
                        <img
                            className={cx("category-img")}
                            src={
                                import.meta.env.VITE_API_BASE_URL +
                                category.attributes.image.data.attributes.url
                            }
                            alt="category"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
