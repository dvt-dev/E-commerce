import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Login from "./components/Forms/Login";
// import SignUp from "./components/Forms/SignUp";

// import MainLayout from "./components/Layout/MainLayout";

import { publicRoutes } from "./routes";
import { Fragment } from "react";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<MainLayout />} /> */}

                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = Fragment;
                    if (route.layout) {
                        Layout = route.layout;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
