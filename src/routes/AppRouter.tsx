import { Route, Routes } from "react-router-dom";
import Home from "../application/Home";


export default function AppRouter() {
    return <Routes>
        <Route path="" element={<Home/>} />
    </Routes>
}