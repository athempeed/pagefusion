import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface TemplateItem {
    id: string;
    title: string;
    iframeUrl?: string;
}
interface TemplatesState {
    selected: TemplateItem[];
}
const initialState: TemplatesState = {
    selected: []
}
const selectedTemplatesSlice = createSlice({
    name: 'templates',
    initialState,
    reducers: {
        addTemplate: (state, action: PayloadAction<TemplateItem>) => {
            const exists = state.selected.find(t => t.id === action.payload.id);
            if (!exists) {
                state.selected.push(action.payload);
            }
        },
        removeTemplate: (state, action: PayloadAction<string>) => {
            state.selected = state.selected.filter(t => t.id !== action.payload);
        },
        reorderTemplates: (state, action: PayloadAction<TemplateItem[]>) => {
            state.selected = action.payload;
        },
        clearTemplates: (state) => {
            state.selected = [];
        },
    },
});

export const {
    addTemplate,
    removeTemplate,
    reorderTemplates,
    clearTemplates,
} = selectedTemplatesSlice.actions;
export const selectedTemplatesState = {
    selected: (state: RootState) => state.templates.selected,
}
export default selectedTemplatesSlice.reducer;