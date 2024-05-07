import { createStore } from 'redux';
import rootReducer from './components/reducer'; // Подставьте ваш редюсер

const store = createStore(rootReducer);

export default store;