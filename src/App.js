import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Calendario } from "./components/Calendario/Calendario";
import { setDefaultLocale } from "react-datepicker";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-grey-300 flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Calendario />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
