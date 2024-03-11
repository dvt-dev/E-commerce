import styles from "./Newsletter.module.scss";
import classNames from "classnames/bind";

import {
    FaLinkedinIn,
    FaFacebook,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

const cx = classNames.bind(styles);

const Newsletter = () => {
    return (
        <section className={cx("newsletter-wrapper")}>
            <div className={cx("newsletter-container")}>
                <h2 className={cx("newsletter-title")}>newsletter</h2>
                <h1 className={cx("newsletter-des")}>
                    sign up for latest updates and offers
                </h1>
                <div className={cx("newsletter-form")}>
                    <input
                        className={cx("newsletter-input")}
                        type="text"
                        placeholder="Email Address"
                    />
                    <button className={cx("subcribe-btn", "btn")}>
                        subscribe
                    </button>
                </div>
                <p className={cx("newsletter-text")}>
                    Will be used in accordance with our Privacy Policy.
                </p>
                <div className={cx("social")}>
                    <ul className={cx("social-list")}>
                        <li className={cx("social-item")}>
                            <FaLinkedinIn size={30} />
                        </li>
                        <li className={cx("social-item")}>
                            <FaFacebook size={30} />
                        </li>
                        <li className={cx("social-item")}>
                            <FaTwitter size={30} />
                        </li>
                        <li className={cx("social-item")}>
                            <FaInstagram size={30} />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
