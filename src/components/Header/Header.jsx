import React, { useState } from "react";
import { FaMagnifyingGlass, FaBell, FaSun, FaMoon, FaChevronDown, FaBars, FaGear, FaUser, FaArrowRightFromBracket } from "react-icons/fa6";
import "./Header.css";
import { motion } from "motion/react";

export default function Header({
    onToggleSidebar,
    darkMode = true,
    onToggleTheme
}) {
    const [search, setSearch] = useState("");
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <header className="header">
            <div className="header-left">
                <button type="button" className="header-icon-button sidebar-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
                    <motion.div whileTap={{ scale: 0.9 }}>
                        <FaBars />
                    </motion.div>
                </button>
            </div>

            <div className="header-center desktop-search">
                <div className="header-search">
                    <FaMagnifyingGlass className="search-icon" />
                    <input type="text" placeholder="Search anything..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <span className="search-shortcut">Ctrl K</span>
                </div>
            </div>

            <div className="header-right">
                <div className="header-dropdown-wrapper">
                    <button type="button" className="header-icon-button notification-button" onClick={() => toggleDropdown("notifications")} aria-label="Notifications" aria-expanded={openDropdown === "notifications"}>
                        <FaBell />
                        <span className="notification-indicator" />
                    </button>

                    {openDropdown === "notifications" && (
                        <div className="header-dropdown notification-dropdown">
                            <div className="dropdown-heading">Notifications</div>
                            <div className="notification-empty">
                                <FaBell />
                                <span>You're all caught up</span>
                            </div>
                        </div>
                    )}
                </div>

                <button type="button" className="header-icon-button theme-button" onClick={onToggleTheme} aria-label="Toggle theme">
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                <div className="header-divider" />

                <div className="header-dropdown-wrapper profile-dropdown-wrapper">
                    <button type="button" className="profile-button" onClick={() => toggleDropdown("profile")} aria-expanded={openDropdown === "profile"}>
                        <div className="profile-avatar">N</div>
                        <div className="profile-info">
                            <span className="profile-name">Nuras</span>
                            <span className="profile-role">Administrator</span>
                        </div>
                        <FaChevronDown className={`profile-arrow ${openDropdown === "profile" ? "rotated" : ""}`} />
                    </button>

                    {openDropdown === "profile" && (
                        <div className="header-dropdown profile-dropdown">
                            <div className="mobile-menu-search">
                                <div className="header-search">
                                    <FaMagnifyingGlass className="search-icon" />
                                    <input type="text" placeholder="Search anything..." value={search} onChange={(e) => setSearch(e.target.value)} />
                                </div>
                            </div>

                            <button type="button" className="dropdown-item">
                                <FaUser />
                                <span>My profile</span>
                            </button>
                            <button type="button" className="dropdown-item">
                                <FaGear />
                                <span>Settings</span>
                            </button>
                            <div className="dropdown-divider" />
                            <button type="button" className="dropdown-item logout-item">
                                <FaArrowRightFromBracket />
                                <span>Log out</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}