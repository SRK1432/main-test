import React from "react";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import MainFooter from "./components/Footer/MainFooter";

import Home from "./components/Pages/Home";
import ComingSoon from "./components/Pages/movies/ComingSoon";
import NowPlaying from "./components/Pages/movies/NowPlaying";
import FullWidthBanner from "./components/Pages/single-movies/FullWidthBanner";
import FullWidthNoBanner from "./components/Pages/single-movies/FullWidthNoBanner";
import SidebarBanner from "./components/Pages/single-movies/SidebarBanner";
import SidebarNoBanner from "./components/Pages/single-movies/SidebarNoBanner";
import DShowLayList from "./components/Pages/show-time/DShowLayList";
import DShowAzax from "./components/Pages/show-time/DShowAzax";
import WShowAzax from "./components/Pages/show-time/WShowAzax";
import WShowTable from "./components/Pages/show-time/WShowTable";
import TopRated from "./components/Pages/top-rated/TopRated";

const App = () => {
  return (
    <Router>
      <MainHeader />
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

      </Routes>
        <MainFooter />
    </Router>
  );
};
export default App;
