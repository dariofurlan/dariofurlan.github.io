import HomeIndex from "application/Home/HomeIndex";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function AppRouter() {
    return <Routes>
        <Route index element={<Link to="home">Home</Link>} />
        <Route path="home" element={<HomeIndex/>} />
    </Routes>
}