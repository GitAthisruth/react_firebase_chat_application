import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login/Login";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/" element={<Login />} />
      <Route path="/profile-update" element={<ProfileUpdate />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
