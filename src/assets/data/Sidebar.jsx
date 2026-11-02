import { MdDashboard } from "react-icons/md";
import { FaThLarge, FaUser, FaShieldAlt, FaFolder, FaTasks, FaCalendarAlt, FaChartLine, FaEye, FaTable, FaStar, FaPlus, FaFilter, FaClock, FaFlag, FaArchive, FaRegFolderOpen, FaShareAlt, FaUsers } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaFolderPlus, FaBarsProgress, FaFileLines, FaHourglassHalf, FaCircleCheck, FaUpload, FaFileCirclePlus } from "react-icons/fa6";
import { IoSettingsOutline, IoNotifications } from "react-icons/io5";

export const sidebarMenuItems = [
    { id: 1, icon: MdDashboard, label: "Dashboard" },
    { id: 2, icon: FaTasks, label: "Tasks" },
    { id: 3, icon: FaFolder, label: "Projects" },
    { id: 4, icon: FaCalendarAlt, label: "Calendar" },
    { id: 5, icon: BsFillPeopleFill, label: "Users" },
    { id: 6, icon: FaChartLine, label: "Analytics" },
    { id: 7, icon: FaFolderPlus, label: "Files" },
    { id: 8, icon: IoSettingsOutline, label: "Settings" }
];

export const sidebarSections = {
    Dashboard: [
        {
            title: "Dashboard Types",
            items: [
                { icon: FaEye, label: "Overview" },
                {
                    icon: FaTable, label: "Executive Summary", content: [
                        "Revenue Overview",
                        "Key Performance Indicators",
                        "Strategic Goals Progress",
                        "Department Highlights"
                    ]
                },
                {
                    icon: FaBarsProgress, label: "Operations Dashboard", content: [
                        "Project Timeline",
                        "Resource Allocation",
                        "Team Performance",
                        "Capacity Planning"
                    ]
                },
                {
                    icon: FaChartLine, label: "Financial Dashboard", content: [
                        "Budget vs Actual",
                        "Cash Flow Analysis",
                        "Expense Breakdown",
                        "Profit & Loss Summary"
                    ]
                },
            ],
        },
        {
            title: "Report Summaries",
            items: [
                {
                    icon: FaFileLines, label: "Weekly Reports", content: [
                        "Team Productivity",
                        "Project Completion",
                        "Budget Utilization",
                        "Client Satisfaction"
                    ]
                },
                {
                    icon: FaStar, label: "Monthly Insights", content: [
                        "Revenue Growth",
                        "New Clients",
                        "Team Expansion",
                        "Cost Reduction"
                    ]
                },
                {
                    icon: FaEye, label: "Quarterly Analysis", content: [
                        "Market Position",
                        "ROI",
                        "Customer Retention",
                        "Innovation Index"
                    ]
                },
            ],
        },
        {
            title: "Business Intelligence",
            items: [
                {
                    icon: FaBarsProgress, label: "Performance Metrics", content: [
                        "Sales Conversion",
                        "Lead Response Time",
                        "Customer Lifetime Value",
                        "Churn Rate"
                    ]
                },
                {
                    icon: FaChartLine, label: "Predictive Analytics", content: [
                        "Q4 Revenue Forecast",
                        "Resource Demand",
                        "Market Trends",
                        "Risk Assessment"
                    ]
                },
            ],
        },
    ],

    Tasks: [
        {
            title: "Quick Actions",
            items: [
                { icon: FaPlus, label: "New Task" },
                { icon: FaFilter, label: "Filter tasks" },
            ],
        },
        {
            title: "My Tasks",
            items: [
                {
                    icon: FaClock, label: "Due Today", content: [
                        "Review design mockups",
                        "Update documentation",
                        "Test new feature"
                    ]
                },
                {
                    icon: FaHourglassHalf, label: "In progress", content: [
                        "Implement user auth",
                        "Database migration"
                    ]
                },
                {
                    icon: FaCircleCheck, label: "Completed", content: [
                        "Fixed login bug",
                        "Updated dependencies",
                        "Code review completed"
                    ]
                },
            ],
        },
        {
            title: "Other",
            items: [
                {
                    icon: FaFlag, label: "Priority tasks", content: [
                        "Security update",
                        "Client presentation"
                    ]
                },
                { icon: FaArchive, label: "Archived" },
            ],
        },
    ],

    Projects: [
        {
            title: "Quick Actions",
            items: [
                { icon: FaPlus, label: "New project" },
                { icon: FaFilter, label: "Filter projects" },
            ],
        },
        {
            title: "Active Projects",
            items: [
                {
                    icon: FaRegFolderOpen, label: "Web Application", content: [
                        "Frontend development",
                        "API integration",
                        "Testing & QA"
                    ]
                },
                {
                    icon: FaRegFolderOpen, label: "Mobile App", content: [
                        "UI/UX design",
                        "Native development"
                    ]
                },
            ],
        },
        {
            title: "Other",
            items: [
                { icon: FaCircleCheck, label: "Completed" },
                { icon: FaArchive, label: "Archived" },
            ],
        },
    ],

    Calendar: [
        {
            title: "Views",
            items: [
                { icon: FaEye, label: "Month View" },
                { icon: FaCalendarAlt, label: "Week view" },
                { icon: FaClock, label: "Day view" },
            ],
        },
        {
            title: "Events",
            items: [
                {
                    icon: FaClock, label: "Today's events", content: [
                        "Team standup",
                        "Client call",
                        "Project review"
                    ]
                },
                { icon: FaCalendarAlt, label: "Upcoming events" },
            ],
        },
        {
            title: "Other",
            items: [
                { icon: FaPlus, label: "New event" },
                { icon: FaShareAlt, label: "Share calendar" },
            ],
        },
    ],

    Users: [
        {
            title: "My teams",
            items: [
                { icon: FaUsers, label: "Development Team" },
                { icon: FaUsers, label: "Design team" },
            ],
        },
        {
            title: "Quick Actions",
            items: [
                { icon: FaPlus, label: "Invite member" },
                { icon: BsFillPeopleFill, label: "Manage teams" },
            ],
        },
    ],

    Analytics: [
        {
            title: "Reports",
            items: [
                { icon: FaFileLines, label: "Performance report" },
                { icon: FaBarsProgress, label: "Task completion" },
                { icon: FaChartLine, label: "Team productivity" },
            ],
        },
        {
            title: "Quick Actions",
            items: [
                {
                    icon: FaStar, label: "Key metrics", content: [
                        "Task completion metrics",
                        "Time tracking analysis",
                        "Team efficiency report",
                        "Performance benchmarks"
                    ]
                },
            ],
        },
    ],

    Files: [
        {
            title: "Quick Actions",
            items: [
                { icon: FaUpload, label: "Upload file" },
                { icon: FaPlus, label: "New folder" },
            ],
        },
        {
            title: "Recent Files",
            items: [
                {
                    icon: FaFileCirclePlus, label: "Recent documents", content: [
                        "Project proposal.pdf",
                        "Meeting notes.docx",
                        "Design specs.figma"
                    ]
                },
                { icon: FaShareAlt, label: "Shared with me" },
            ],
        },
        {
            title: "Folders",
            items: [
                { icon: FaFolder, label: "All folders" },
                { icon: FaArchive, label: "Archived files" },
            ],
        },
    ],

    Settings: [
        {
            title: "Account",
            items: [
                { icon: FaUser, label: "Profile settings" },
                { icon: FaShieldAlt, label: "Security" },
                { icon: IoNotifications, label: "Notifications" }
            ],
        },
        {
            title: "Workspace",
            items: [
                {
                    icon: IoSettingsOutline, label: "Preferences", content: [
                        "Theme settings",
                        "Time zone",
                        "Default notifications"
                    ]
                },
                { icon: FaThLarge, label: "Integrations" },
            ],
        }
    ]
};