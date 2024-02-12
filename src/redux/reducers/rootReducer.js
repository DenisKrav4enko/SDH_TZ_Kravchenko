import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from '../slices/sidebarSlice';
import phasesReducer from '../slices/phasesSlice';
import resourcesReducer from '../slices/moreResourcesSlice';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    phases: phasesReducer,
    resources: resourcesReducer
});

export default rootReducer;
