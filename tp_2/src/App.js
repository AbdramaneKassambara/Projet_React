import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegistreUser from "./pages/Registre";
import Users from "./pages/Users";
import Me from "./pages/Me";
import AjouterFriend from "./pages/AddFreind";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/auth/register" element={<RegistreUser />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="/friends/:userId" element={<AjouterFriend />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
