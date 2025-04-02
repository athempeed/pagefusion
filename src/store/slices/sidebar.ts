import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface SidebarState {
    isCollapsed: boolean,
    activeNavItem: string,
    pagePath: string
}

const initialState: SidebarState = {
    isCollapsed: false,
    activeNavItem: "",
    pagePath: ""
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed
        },
        activeNavItem: (state, action) => {
            state.activeNavItem = action.payload
        },
        setPagePath: (state, action) => {
            state.pagePath = action.payload
        }
    }
});

export const { toggleSidebar, activeNavItem, setPagePath } = sidebarSlice.actions;
export const sidebarState = {
    selectSidebar: (state: RootState) => state.sidebar.isCollapsed,
    activeItem: (state: RootState) => state.sidebar.activeNavItem,
    pagePath: (state: RootState) => state.sidebar.pagePath,
}
export default sidebarSlice.reducer