import React, { useState } from "react";
import { motion } from "motion/react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { menuItems, dashboardSections } from "../../source/data/Dashboard";
import { FaSearch } from "react-icons/fa";

export default function Dashboard() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [reduce, setReduce] = useState(false);

    const sections = dashboardSections[activeMenu] || [];

    const handleReduce = () => {
        setReduce((prev) => !prev);
    };

    const panelVariants = {
        visible: {
            width: 312,
            minWidth: 312,
            padding: "24px 16px",
            x: 0,
            opacity: 1,
            transition: {
                width: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1]
                },
                minWidth: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1]
                },
                padding: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                },
                x: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1]
                },
                opacity: {
                    duration: 0.25,
                    delay: 0.12
                }
            }
        },

        hidden: {
            width: 0,
            minWidth: 0,
            padding: "24px 0px",
            x: -24,
            opacity: 0,
            transition: {
                width: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1]
                },
                minWidth: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1]
                },
                padding: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                },
                x: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1]
                },
                opacity: {
                    duration: 0.16
                }
            }
        }
    };

    return (
        <div className="dashboard">
            <div className="dashboard__menu">
                <div className="dashboard__menu__icons">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.id} className={`dashboard__menu__items ${activeMenu === item.label ? "active" : ""}`} title={item.label} onClick={() => setActiveMenu(item.label)}>
                                <Icon />
                            </div>
                        );
                    })}
                </div>

                <button
                    className="dashboard__toggle"
                    onClick={handleReduce}
                    aria-label={reduce ? "Expand sidebar" : "Collapse sidebar"}
                    title={reduce ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <motion.span
                        key={reduce ? "right" : "left"}
                        initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {reduce ? <FaAngleRight /> : <FaAngleLeft />}
                    </motion.span>
                </button>

            </div>

            <motion.div
                className="dashboard__info"
                variants={panelVariants}
                initial="visible"
                animate={reduce ? "hidden" : "visible"}
            >
                <div className="dashboard__info__header">
                    <p className="dashboard__info__title">
                        {activeMenu}
                    </p>

                    <div className="dashboard__search">
                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Search tasks, projects"
                        />
                    </div>
                </div>

                <div className="dashboard__info__content">
                    {sections.map((section) => (
                        <div className="dashboard__info__block" key={section.title}>
                            <h2 className="dashboard__info__block__title">
                                {section.title}
                            </h2>

                            {section.items.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div className="dashboard__info__block__item" key={item.label}>
                                        <Icon />
                                        <p>{item.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}