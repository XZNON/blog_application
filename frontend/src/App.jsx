import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserLayout from "./Layouts/User.layout";
import AdminLayout from "./Layouts/Admin.layout";
import Dashboard from "./pages/Admin/Dashboard";
import AddPost from "./pages/Admin/AddPost";
import User from "./pages/Admin/User";
import AllPost from "./pages/Admin/AllPost";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          {/* create routes for the user pages  */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="post/:id" element={<Post />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
          </Route>
          {/* create routes for the admin pages  */}
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="users" element={<User />} />
            <Route path="allposts" element={<AllPost />} />
          </Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
