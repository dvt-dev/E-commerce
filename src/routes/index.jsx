import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Forms/Login";
import SignUp from "../components/Forms/SignUp";
import Product from "../components/Layout/MainLayout/Product";

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
        component: Product,
        layout: MainLayout,
    },
];

export { publicRoutes };
