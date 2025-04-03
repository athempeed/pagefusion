import React, { Children } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { sidebarState } from "../../store/slices/sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import './sidebar.scss';

const navItems = [
    { name: "Dashboard", path: "/" },
    {
        name: "Layout", children: [
            { name: "carousel_with_cardlayout", path: "layouts/cwc" }
        ]
    },
    {
        name: "Components", children: [
            { name: "carousels", path: "components/carousels" },
            { name: "cardlayouts", path: "components/cards" },
        ]
    },
];
const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const isCollapsed = useAppSelector(sidebarState.selectSidebar);  // ✅ Correct selector usage
    // const activeItem = useAppSelector(sidebarState.activeItem);  // ✅ Correct selector usage
    const location = useLocation();    

    const setActiveNav = (item: string, path: string) => {
        if (path !== '') {
            navigate(path);
        }

    };
    return (
        <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className="section-title">Pages</div>
            <nav>
                {navItems.map((item) => (
                    <React.Fragment key={item.name}>
                        <span
                            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => item.path && setActiveNav(item.name, item.path)}
                        >
                            <i data-lucide="layers"></i>
                            {item.name}
                        </span>

                        {item.children?.map((child) => (
                            <span
                                key={child.name}
                                className={`child nav-item ${location.pathname === `/${child.path}` ? 'active' : ''}`}
                                onClick={() => setActiveNav(child.name, `/${child.path}`)}
                            >
                                <i data-lucide="chevron-right"></i>
                                {child.name}
                            </span>
                        ))}
                    </React.Fragment>
                ))}
            </nav>

            <div className="section-title">Settings</div>
            <nav>
                <a href="#" className={`nav-item`}>
                    <i data-lucide="settings"></i>
                    Preferences
                </a>
                <a href="#" className={`nav-item`}>
                    <i data-lucide="log-out"></i>
                    Logout
                </a>
            </nav>
        </aside>
    )
}

export default Sidebar;