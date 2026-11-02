import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Sidebar.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { sidebarMenuItems, sidebarSections } from "@/assets/data/Sidebar";

export default function Sidebar({ activePage, onChangePage, reduce }) {
    const [openItems, setOpenItems] = useState({});
    const sections = sidebarSections[activePage] || [];

    const toggleItem = (label) => {
        setOpenItems((prev) => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const sidebarVariants = {
        expanded: {
            width: 312,
            minWidth: 312,
            opacity: 1,
            transition: {
                width: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.2, delay: 0.05 }
            }
        },
        collapsed: {
            width: 0,
            minWidth: 0,
            opacity: 0,
            transition: {
                width: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.1 }
            }
        }
    };

    return (
        <aside className={`sidebar ${reduce ? "sidebar--collapsed" : ""}`}>
            <div className="sidebar__menu">
                <div className="sidebar__menu-items">
                    {sidebarMenuItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                className={`sidebar__menu-item ${activePage === item.label ? "active" : ""}`}
                                onClick={() => onChangePage(item.label)}
                                title={item.label}
                            >
                                {IconComponent && <IconComponent />}
                            </button>
                        );
                    })}
                </div>
            </div>

            <motion.aside
                className="sidebar__info"
                variants={sidebarVariants}
                animate={reduce ? "collapsed" : "expanded"}
                initial="collapsed"
            >
                <div className="sidebar__inner">
                    <div className="sidebar__header">
                        <div className="sidebar__title">{activePage}</div>
                        <button className="sidebar__search" aria-label="Search sidebar">
                            <FaSearch />
                        </button>
                    </div>

                    <div className="sidebar__sections">
                        {sections.map((section, index) => (
                            <div className="sidebar__section" key={section.title || index}>
                                <div className="sidebar__section-title">{section.title}</div>
                                <div className="sidebar__section-items">
                                    {section.items?.map((item) => {
                                        const ItemIcon = item.icon;
                                        const hasChildren = item.content && item.content.length > 0;

                                        return (
                                            <div className="sidebar__item-wrapper" key={item.label}>
                                                <button
                                                    className={`sidebar__item ${openItems[item.label] ? "opened" : ""}`}
                                                    onClick={() => hasChildren ? toggleItem(item.label) : null}
                                                >
                                                    <span className="sidebar__item-content-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        {ItemIcon && <ItemIcon />}
                                                        <span className="sidebar__item-name">{item.label}</span>
                                                    </span>

                                                    {hasChildren && (<FaAngleDown className={`sidebar__item-arrow ${openItems[item.label] ? "rotated" : ""}`} />)}
                                                </button>

                                                <AnimatePresence initial={false}>
                                                    {hasChildren && openItems[item.label] && (
                                                        <motion.div
                                                            className="sidebar__subitems"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                                        >
                                                            {item.content.map((childText, childIdx) => (
                                                                <button key={childIdx} className="sidebar__subitem">
                                                                    {childText}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.aside>
        </aside>
    );
}