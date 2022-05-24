import React from 'react'
import { LandingPage } from "Pages/LandingPage/LandingPage";
import Mockman from "mockman-js";

import { HomePage } from "Pages/HomePage/HomePage";
import { ProfilePage } from "Pages/ProfilePage/ProfilePage";
import { Page404 } from "Pages/Page-404/Page404";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";

import PrivateRoute from "Components/CustomRoute/PrivateRoute";
import RestrictedRoute from "Components/CustomRoute/RestrictedRoute";


import BookMarkPage from "Pages/BookMarkPage/BookMarkPage";
import SettingsPage from "Pages/SettingsPage/SettingsPage";
import PostPage from "Pages/PostsPage/PostPage";

import { ExplorePage } from "Pages/ExplorePage/ExplorePage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<RestrictedRoute />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/homePage" element={<HomePage />} />
        <Route path={`/profilePage/:profileId`} element={<ProfilePage />} />
        <Route path={`/settings`} element={<SettingsPage />} />
        <Route path={`/bookMarkPage`} element={<BookMarkPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Route>

      <Route path="*" element={<Page404 />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
}

export default AllRoutes
