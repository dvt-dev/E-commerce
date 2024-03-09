/* eslint-disable react/prop-types */
import styles from "./Form.module.scss";
import classNames from "classnames/bind";

import banner from "../../../assets/images/login-illlustration.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const cx = classNames.bind(styles);

const Form = ({ children }) => {
    return (
        <div className={cx("form-wrapper")}>
            <div className={cx("form")}>
                <div className={cx("form-banner")}>
                    <img className={cx("banner-img")} src={banner} />
                </div>
                <div className={cx("form-container")}>
                    <div className={cx("form-title")}>
                        Welcome to
                        <h3 className={cx("name")}>DT . F</h3>
                    </div>
                    <div className={cx("form-provider")}>
                        <button className={cx("google", "btn")}>
                            <FcGoogle size={28} />
                            Login with Google
                        </button>
                        <button className={cx("facebook", "btn")}>
                            <FaFacebookF
                                size={28}
                                style={{ color: "#3B5999" }}
                            />
                            Login with Facebook
                        </button>
                    </div>
                    <div className={cx("separator")}>
                        <div className={cx("line")} />
                        OR
                        <div className={cx("line")} />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Form;
