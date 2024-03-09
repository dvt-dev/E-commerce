import Form from "../Form";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

import styles from "./Login.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Login = () => {
    return (
        <Form>
            {/* Login */}
            <div className={cx("login-wrapper")}>
                <div className={cx("login-container")}>
                    <div className={cx("form-input-wrap")}>
                        <MdEmail size={22} />
                        <div className={cx("form-input-container")}>
                            <p className={cx("input-title")}>Email</p>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your email ..."
                                className={cx("form-input")}
                            />
                        </div>
                    </div>
                    <div className={cx("form-input-wrap")}>
                        <FaKey size={20} />
                        <div className={cx("form-input-container")}>
                            <div>
                                <p className={cx("input-title")}>Password</p>
                                <input
                                    type="password"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your password ..."
                                    className={cx("form-input")}
                                />
                            </div>
                            <span className={cx("show-password", "btn")}>
                                <FaEye />
                            </span>
                        </div>
                    </div>
                    <div className={cx("password-inf")}>
                        <div className={cx("remmerber-login")}>
                            <input
                                type="checkbox"
                                name="remember_me"
                                id="remember_me"
                            />
                            <label className={cx("remmmber-text")}>
                                Remember me
                            </label>
                        </div>
                        <div className={cx("forgot-password")}>
                            <button
                                className={cx("forgot-password-btn", "btn")}
                            >
                                Forgot Password?
                            </button>
                        </div>
                    </div>
                    <button className={cx("button-login", "btn")}>Login</button>
                    <div className={cx("form-controls")}>
                        <p className={cx("description")}>
                            Don’t have an account?
                        </p>
                        <button className={cx("register-btn", "btn")}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default Login;
