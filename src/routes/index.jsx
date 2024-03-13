import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Forms/Login";
import SignUp from "../components/Forms/SignUp";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";

const publicRoutes = [
    {
        path: "/",
        component: Login,
        layout: Login,
    },
    {
        path: "/signup",
        component: SignUp,
        layout: SignUp,
    },
    {
        path: "/home",
        component: Home,
        layout: MainLayout,
    },
    {
        path: "/product/:id",
        component: ProductDetails,
        layout: MainLayout,
    },
    {
        path: "/category/:id",
        component: Category,
        layout: MainLayout,
    },
];

export { publicRoutes };
