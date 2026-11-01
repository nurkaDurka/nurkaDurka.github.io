import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaAngleLeft, FaAngleRight, FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";
import { menuItems, dashboardSections } from "../../assets/data/Sidebar";

export default function Dashboard() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [reduce, setReduce] = useState(false);
    const [openItems, setOpenItems] = useState(new Set());

    const sections = dashboardSections[activeMenu] || [];
    const handleReduce = () => { setReduce((prev) => !prev); };

    const toggleItem = (itemKey) => {
        setOpenItems((prev) => {
            const updated = new Set(prev);

            if (updated.has(itemKey)) {
                updated.delete(itemKey);
            } else {
                updated.add(itemKey);
            }

            return updated;
        });
    };

    const panelVariants = {
        visible: {
            width: 312,
            minWidth: 312,
            padding: "24px 16px",
            x: 0,
            opacity: 1,
            transition: {
                width: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                minWidth: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                padding: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.25, delay: 0.12 }
            }
        },

        hidden: {
            width: 0,
            minWidth: 0,
            padding: "24px 0px",
            x: -24,
            opacity: 0,
            transition: {
                width: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                minWidth: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                padding: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.16 }
            }
        }
    };

    return (
        <div className="dashboard">
            <div className="dashboard__menu">

                {/* TOP MENU */}
                <div className="dashboard__menu__icons">
                    {menuItems
                        .filter((item) => !["Settings", "Admin"].includes(item.label))
                        .map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className={`dashboard__menu__items ${activeMenu === item.label ? "active" : ""
                                        }`}
                                    title={item.label}
                                    onClick={() => {
                                        setActiveMenu(item.label);
                                        setOpenItems(new Set());
                                    }}
                                >
                                    <Icon />
                                </div>
                            );
                        })}
                </div>

                <div className="dashboard__menu__bottom">

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
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            {reduce ? <FaAngleRight /> : <FaAngleLeft />}
                        </motion.span>
                    </button>

                    {menuItems
                        .filter((item) => ["Settings", "Admin"].includes(item.label))
                        .map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className={`dashboard__menu__items ${activeMenu === item.label ? "active" : ""}`}
                                    title={item.label}
                                    onClick={() => {
                                        setActiveMenu(item.label);
                                        setOpenItems(new Set());
                                    }}
                                >
                                    <Icon />
                                </div>
                            );
                        })}

                </div>
            </div>

            <motion.div
                className="dashboard__info"
                variants={panelVariants}
                initial="visible"
                animate={reduce ? "hidden" : "visible"}
            >
                <div className="dashboard__info__header">
                    <p className="dashboard__info__title">{activeMenu}</p>

                    <div className="dashboard__search">
                        <FaMagnifyingGlass />
                        <input type="text" placeholder="Search tasks, projects" />
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
                                const hasContent = item.content?.length > 0;

                                const itemKey = `${activeMenu}-${section.title}-${item.label}`;
                                const isOpen = openItems.has(itemKey);

                                return (
                                    <div className="dashboard__info__item-wrapper" key={itemKey}>
                                        <button type="button" className={`dashboard__info__block__item ${isOpen ? "expanded" : ""}`} onClick={() => { if (hasContent) { toggleItem(itemKey); } }} aria-expanded={hasContent ? isOpen : undefined}>
                                            <Icon />
                                            <span>{item.label}</span>
                                            {hasContent && (
                                                <motion.div
                                                    className="dashboard__info__item-arrow"
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                                >
                                                    <FaAngleDown />
                                                </motion.div>
                                            )}
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {hasContent && isOpen && (
                                                <motion.div
                                                    className="dashboard__info__nested"
                                                    initial={{ height: 0, opacity: 0, y: -5 }}
                                                    animate={{ height: "auto", opacity: 1, y: 0 }}
                                                    exit={{ height: 0, opacity: 0, y: -5 }}
                                                    transition={{ height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.2 }, y: { duration: 0.25 } }}
                                                >
                                                    <div className="dashboard__info__nested-inner">
                                                        {item.content.map((contentItem, index) => (
                                                            <button type="button" className="dashboard__info__nested-item" key={index}>
                                                                <span className="dashboard__info__nested-dot" />
                                                                <span>{contentItem}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
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
