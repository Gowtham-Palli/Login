"use client"

import Login from "@/components/Login";
import Register from "@/components/Register";
import { useState, useTransition } from "react";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowRegister(!showRegister);
    useTransition
  };


  return (
    <>
      <div>
        {!showRegister && (
          <div className="login">
            <Login onLoginClick={handleLoginClick} />
          </div>
        )}
        {showRegister && (
          <div className="register">
            <Register onLoginClick={handleLoginClick} />
          </div>
        )}
      </div>
    </>
  );
}