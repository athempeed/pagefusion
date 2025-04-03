import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface SidebarState {
    isCollapsed: boolean,
    activeNavItem: string,
    pagePath: string
}

const initialState: SidebarState = {
    isCollapsed: false,
    activeNavItem: "Dashboard",
    pagePath: ""
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed
        }
    }
});

export const { toggleSidebar } = sidebarSlice.actions;
export const sidebarState = {
    selectSidebar: (state: RootState) => state.sidebar.isCollapsed,
}
export default sidebarSlice.reducer