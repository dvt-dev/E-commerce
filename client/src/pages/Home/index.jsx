import { useEffect, useContext } from "react";
import Banner from "../../components/Layout/MainLayout/Banner";
import Categories from "../../components/Layout/MainLayout/Categories";
import Products from "../../components/Layout/MainLayout/Products";

import { fetchDataFromApi } from "../../api/api";
import { Context } from "../../context/AppContext";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Home = () => {
    const { categories, setCategories, products, setProducts } =
        useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    return (
        <section className={cx("home-wrapper")}>
            <div className={cx("home-container")}>
                <Banner />
                <div className={cx("main-content")}>
                    <Categories categories={categories} />
                    <div className={cx("products")}>
                        <Products products={products} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
