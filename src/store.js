
//import themeReducer from "./components/reducer";

import { configureStore } from '@reduxjs/toolkit';

import reducer from './components/reducer';

const store = configureStore({
    reducer: reducer,
});

export default store;