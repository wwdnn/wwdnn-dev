// Data statis project. Edit di sini saja.
import dashboardLms from "../assets/portfolio/dashboard-lms.mp4";
import hydraulicCalc from "../assets/portfolio/hydraulic-calc.mp4";
import organizationChart from "../assets/portfolio/organization-chart.mp4";
import dashboardHr from "../assets/portfolio/dashboard-hr.mp4";

export const PROJECTS = [
    {
        id: 1,
        title: "Dashboard LMS",
        tags: ["Odoo 18", "Python", "PostgreSQL", "OWL", "JavaScript", "QWeb (XML)"],
        accent: "#3b2ff5",
        video: dashboardLms,
    },
    {
        id: 2,
        title: "Siphonic Calc",
        tags: ["Odoo 18", "Python", "PostgreSQL", "OWL", "JavaScript", "QWeb (XML)", "SciPy", "PyMuPDF" ],
        accent: "#3b2ff5",
        video: hydraulicCalc,
    },
    {
        id: 3,
        title: "Organization Chart",
        tags: ["JavaScript (ES6+)", "Babel", "Webpack 5"],
        accent: "#3b2ff5",
        video: organizationChart,
    },
    {
        id: 4,
        title: "Dashboard HR",
        tags: ["Odoo 18", "Python", "PostgreSQL", "OWL", "JavaScript", "ECharts", "QWeb (XML)"],
        accent: "#3b2ff5",
        video: dashboardHr,
    },
];
