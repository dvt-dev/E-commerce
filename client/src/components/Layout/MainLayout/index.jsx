/* eslint-disable react/prop-types */

import Footer from "./Footer";
import Header from "./Header";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import Newsletter from "./Newsletter";

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <section className={cx("main-layout")}>
            <Header />
            <div className={cx("content-container")}>{children}</div>
            <Newsletter />
            <Footer />
        </section>
    );
};

export default MainLayout;
