import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import MainFooter from "./components/Footer/MainFooter";
import TopHeader from "./components/Header/TopHeader";
import AfterLoginHeader from "./components/Header/AfterLoginHeader";

const Home =lazy(() => import("./components/Pages/home/Home"));
const ComingSoon =lazy(() => import("./components/Pages/movies/ComingSoon"));
const NowPlaying= lazy(() => import("./components/Pages/movies/NowPlaying"));
const FullWidthBanner = lazy(() => import("./components/Pages/single-movies/FullWidthBanner"));
const FullWidthNoBanner =lazy(() => import("./components/Pages/single-movies/FullWidthNoBanner"));
const SidebarBanner = lazy(() => import("./components/Pages/single-movies/SidebarBanner"));
const SidebarNoBanner = lazy(() => import("./components/Pages/single-movies/SidebarNoBanner"));
const DShowLayList =lazy(() => import("./components/Pages/show-time/DShowLayList"));
const DShowAzax = lazy(() => import("./components/Pages/show-time/DShowAzax"));
const WShowAzax = lazy(() => import("./components/Pages/show-time/WShowAzax"));
const WShowTable = lazy(() => import("./components/Pages/show-time/WShowTable"));
const TopRated = lazy(() => import("./components/Pages/top-rated/TopRated"));
const LoginPage = lazy(() => import("./components/Header/LoginPage"));

const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/loginportal";

    return (
        <>
            {!isLoginPage && (
                <>
                    {isLoggedIn ? <AfterLoginHeader setIsLoggedIn={setIsLoggedIn} /> : <TopHeader />}
                    <MainHeader />
                </>
            )}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/comingsoon" element={<ComingSoon />} />
                    <Route path="/nowplaying" element={<NowPlaying />} />
                    <Route path="/fullbanner" element={<FullWidthBanner />} />
                    <Route path="/fullnobanner" element={<FullWidthNoBanner />} />
                    <Route path="/sidebanner" element={<SidebarBanner />} />
                    <Route path="/sidenobanner" element={<SidebarNoBanner />} />
                    <Route path="/dailylayout" element={<DShowLayList />} />
                    <Route path="/dailyazax" element={<DShowAzax />} />
                    <Route path="/weeklyazax" element={<WShowAzax />} />
                    <Route path="/weeklytable" element={<WShowTable />} />
                    <Route path="/toprated" element={<TopRated />} />
                    <Route path="/loginportal" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>
            </Suspense>
            {!isLoginPage && <MainFooter />}
        </>
    );
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Router>
    );
};

export default App;

//we can not use useState instead of useLocation here for the freash login page(for details chatGPT it)