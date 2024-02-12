import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
    reducer: rootReducer,
    // Другие опции configureStore
});

export default store;
