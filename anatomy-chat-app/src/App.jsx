import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login/Login";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile-update" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
}

export default App;
