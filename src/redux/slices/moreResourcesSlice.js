import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moreResources: [
        {
            name: 'Brené Brown on Empathy',
            source: 'RSA on YouTube',
            time: '(2:53)'
        },
        {
            name: 'Leaders Practice Empathy',
            source: 'Simon Sinek on YouTube',
            time: '(1:14)'
        },
        {
            name: '9 Reasons Why Teams Love Empathetic Managers',
            source: 'Entrepreneur',
            time: ''
        },
        {
            name: 'What\'s Empathy Got to Do With It?',
            source: 'MindTools',
            time: ''
        },
        {
            name: 'If You Can\'t Empathize with Your Employees, You Better Learn To',
            source: 'HBR',
            time: ''
        },
        {
            name: 'Empathy Anecdote',
            source: 'Wiser',
            time: ''
        },

    ],
}

const phasesSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {},
})

export default phasesSlice.reducer;
