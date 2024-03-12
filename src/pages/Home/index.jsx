import Banner from "../../components/Layout/MainLayout/Banner";
import Category from "../../components/Layout/MainLayout/Category";
import Newsletter from "../../components/Layout/MainLayout/Newsletter";
import Products from "../Products";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <section className={cx("home-wrapper")}>
            <div className={cx("home-container")}>
                <Banner />
                <div className={cx("main-content")}>
                    <Category />
                    <Products />
                </div>
                <Newsletter />
            </div>
        </section>
    );
};

export default Home;
