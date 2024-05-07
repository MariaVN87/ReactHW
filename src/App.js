import React from 'react';
import { Provider } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitcher';
import rootReducer from './components/reducer';
import { createStore } from 'redux';


const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeSwitcher />

    </Provider>
  );
};

export default App;
