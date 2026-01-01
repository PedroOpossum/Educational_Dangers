import { useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {auth} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Components/Login";
import Signup from "./Components/Sign_Up";
import Dashboard from "./Components/Dashboard";

function App() {

  const [user, setUser] =  useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    }); return () => unsubscribe();
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
    </Routes>
  );
}


export default App;
