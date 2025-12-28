import React, { useContext, useState, useEffect } from "react"
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth"
import {auth, googleProvider} from "./firebase"
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Sign_Up";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}


export default App;
