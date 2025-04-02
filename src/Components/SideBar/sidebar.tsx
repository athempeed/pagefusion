import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { sidebarState, activeNavItem, setPagePath } from "../../store/slices/sidebar";

import './sidebar.scss';


const Sidebar: React.FC = () => {
    const isCollapsed = useAppSelector(sidebarState.selectSidebar);  // ✅ Correct selector usage
    const activeItem = useAppSelector(sidebarState.activeItem);  // ✅ Correct selector usage

    //let activeItem = state.payload.sidebar.activeNavItem;
    console.log(activeItem);
    const dispatch = useAppDispatch();

    const setActiveNav = (item: string, path: string) => {
        dispatch(activeNavItem(item));
        dispatch(setPagePath(path));
    };
    return (
        <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className="section-title">Pages</div>
            <nav>
                <a href="#" key="page1" className={`nav-item ${activeItem === 'page1' ? 'active' : ''}`} onClick={() => setActiveNav("page1", "carousel_with_cardlayout")}>
                    <i data-lucide="layers"></i>
                    Carousel
                </a>
                <a href="#" key="page2" className={`nav-item ${activeItem === 'page2' ? 'active' : ''}`} onClick={() => setActiveNav("page2", "")}>
                    <i data-lucide="paintbrush"></i>
                    Customize
                </a>
            </nav>

            <div className="section-title">Settings</div>
            <nav>
                <a href="#" className={`nav-item ${activeItem === 'page3' ? 'active' : ''}`} onClick={() => setActiveNav("page3", "")}>
                    <i data-lucide="settings"></i>
                    Preferences
                </a>
                <a href="#" className={`nav-item ${activeItem === 'page4' ? 'active' : ''}`} onClick={() => setActiveNav("page4", "")}>
                    <i data-lucide="log-out"></i>
                    Logout
                </a>
            </nav>
        </aside>
    )
}

export default Sidebar;