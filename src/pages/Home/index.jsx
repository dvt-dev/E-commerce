import Banner from "../../components/Layout/MainLayout/Banner";
import Categories from "../../components/Layout/MainLayout/Categories";
import Products from "../../components/Layout/MainLayout/Products";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <section className={cx("home-wrapper")}>
            <div className={cx("home-container")}>
                <Banner />
                <div className={cx("main-content")}>
                    <Categories />
                    <div className={cx("products")}>
                        <Products />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
