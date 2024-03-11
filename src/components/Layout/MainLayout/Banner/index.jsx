import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

import banner from "../../../../assets/images/banner-img.png";

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <section className={cx("banner-wrapper")}>
            <div className={cx("banner-container")}>
                <div className={cx("banner-content")}>
                    <h1 className={cx("banner-title")}>sales</h1>
                    <p className={cx("banner-desc")}>
                        Convallis interdum purus adipiscing dis parturient
                        pisusere ac a quam a eleifend montes paruriment posuere
                        curaw tempor.
                    </p>
                    <div className={cx("banner-button")}>
                        <button className={cx("read-more", "btn")}>
                            read more
                        </button>
                        <button className={cx("shop-now", "btn")}>
                            shop now
                        </button>
                    </div>
                </div>

                <div className={cx("banner-image")}>
                    <img
                        className={cx("banner-img")}
                        src={banner}
                        alt="Banner"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
