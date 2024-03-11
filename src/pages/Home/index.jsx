import Banner from "../../components/Layout/MainLayout/Banner";
import Newsletter from "../../components/Layout/MainLayout/Newsletter";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <section className={cx("home-wrapper")}>
            <div className={cx("home-container")}>
                <Banner />
                <Newsletter />
            </div>
        </section>
    );
};

export default Home;
