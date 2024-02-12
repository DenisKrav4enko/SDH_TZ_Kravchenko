import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: 'Modules',
    levels: [
        { name: 'Inner Critic', completed: true, isLocked: false },
        { name: 'Feedback', completed: true, isLocked: false },
        { name: 'Growth Mindset', completed: false, isLocked: false },
        { name: 'Unassigned', completed: false, isLocked: true },
    ],
    navigationItems: [
        'Coaching Sessions',
        'Diagnostics & Outcomes',
        'Profile & Settings',
        'Help',
        'Sign Out',
    ],
    selectedLevel: 1
};


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSelectedLevel: (state, action) => {
            state.selectedLevel = action.payload;
        },
        markLevelCompleted: (state, action) => {
            const { index } = action.payload;
            state.levels[index].completed = true;
        },
    },
});

export const { setSelectedLevel, markLevelCompleted } = sidebarSlice.actions;
export default sidebarSlice.reducer;