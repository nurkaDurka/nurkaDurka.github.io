import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./MainLayout.css";

export default function MainLayout({ children }) {
    const [activePage, setActivePage] = useState("Dashboard");
    const [reduce, setReduce] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const handleToggleSidebar = () => {
        setReduce((prev) => !prev);
    };

    const handleToggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <div className={`main-layout ${darkMode ? "dark" : "light"}`}>
            <Sidebar activePage={activePage} onChangePage={setActivePage} reduce={reduce} onToggleSidebar={handleToggleSidebar} />

            <div className="main-layout__content">
                <Header activePage={activePage} onToggleSidebar={handleToggleSidebar} darkMode={darkMode} onToggleTheme={handleToggleTheme} />

                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}