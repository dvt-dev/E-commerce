/* eslint-disable react/prop-types */

import Header from "./Header";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <section className={cx("main-layout")}>
            <Header />

            <div className={cx("content-container")}>{children}</div>
        </section>
    );
};

export default MainLayout;
