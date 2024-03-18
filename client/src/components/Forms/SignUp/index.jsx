import Form from "../Form";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import styles from "./SignUp.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <Form>
            {/* Login */}
            <div className={cx("signup-wrapper")}>
                <div className={cx("signup-container")}>
                    <div className={cx("form-input-wrap")}>
                        <FaUser size={22} />
                        <div className={cx("form-input-container")}>
                            <p className={cx("input-title")}>Username</p>
                            <input
                                type="text"
                                name="user"
                                id="user"
                                placeholder="Enter your username ..."
                                className={cx("form-input")}
                            />
                        </div>
                    </div>
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
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password ..."
                                    className={cx("form-input")}
                                />
                            </div>
                            <span className={cx("show-password", "btn")}>
                                <FaEye />
                            </span>
                        </div>
                    </div>

                    <button className={cx("button-signup", "btn")}>
                        SignUp
                    </button>
                    <div className={cx("form-controls")}>
                        <p className={cx("description")}>
                            Already have an account?
                        </p>
                        <button
                            className={cx("login-btn", "btn")}
                            onClick={() => navigate("/")}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default SignUp;
