// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import "../../styles/layout/layout.scss";
import { Toaster } from "react-hot-toast";

const Layout: React.FC = () => {
  return (
    <div className="layout__container">
      <div style={{ zIndex: "999999" }}>
        <Toaster />
      </div>
      <header className="layout__header">
        <Navbar />
      </header>
      <main className="layout__main-cont">
        <Outlet />
      </main>
      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
