import { createSlice } from '@reduxjs/toolkit';
import { CloudIcon, AppleIcon, PracticeIcon } from '../../assets/img/index'

const initialState = {
    selectedItemId: 1,
    phases: [
        {
            id: 1,
            title: 'Phase 1: Observing Yourself',
            dueDate: 'Due Date: Jul 8',
            steps: {
                reflection: {
                    icon: CloudIcon,
                    actionText: 'Reflection',
                    status: 'Start',
                    isUnlocked: true
                },
                lesson: {
                    icon: AppleIcon,
                    actionText: 'Lesson',
                    status: 'Locked',
                    isUnlocked: false
                },
                practice: {
                    icon: PracticeIcon,
                    actionText: 'Practice',
                    status: 'Locked',
                    isUnlocked: false
                }
            },
        },
        {
            id: 2,
            title: 'Phase 2: Small Steps',
            dueDate: 'Due Date: Jul 8',
            steps: {
                reflection: {
                    icon: CloudIcon,
                    actionText: 'Reflection',
                    status: 'Start',
                    isUnlocked: true
                },
                lesson: {
                    icon: AppleIcon,
                    actionText: 'Lesson',
                    status: 'Locked',
                    isUnlocked: false
                },
                practice: {
                    icon: PracticeIcon,
                    actionText: 'Practice',
                    status: 'Locked',
                    isUnlocked: false
                }
            },
        },
        {
            id: 3,
            title: 'Phase 3: Big Leaps',
            dueDate: 'Due Date: Jul 8',
            steps: {
                reflection: {
                    icon: CloudIcon,
                    actionText: 'Reflection',
                    status: 'Start',
                    isUnlocked: true
                },
                lesson: {
                    icon: AppleIcon,
                    actionText: 'Lesson',
                    status: 'Locked',
                    isUnlocked: false
                },
                practice: {
                    icon: PracticeIcon,
                    actionText: 'Practice',
                    status: 'Locked',
                    isUnlocked: false
                }
            },
        },
        {
            id: 4,
            title: 'Phase 4: Coaching Session',
            dueDate: 'Due Date: Jul 8',
            steps: {
                reflection: {
                    icon: CloudIcon,
                    actionText: 'Reflection',
                    status: 'Start',
                    isUnlocked: true
                },
                lesson: {
                    icon: AppleIcon,
                    actionText: 'Lesson',
                    status: 'Locked',
                    isUnlocked: false
                },
                practice: {
                    icon: PracticeIcon,
                    actionText: 'Practice',
                    status: 'Locked',
                    isUnlocked: false
                }
            },
        },
    ],
}

const phasesSlice = createSlice({
    name: 'phases',
    initialState,
    reducers: {
        setSelectedItemId: (state, action) => {
            state.selectedItemId = action.payload;
        },
    },
})

export const { setSelectedItemId } = phasesSlice.actions;
export default phasesSlice.reducer;
