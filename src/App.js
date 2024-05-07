import React from "react";
//import "./App.css";
import store from './store';
import { Provider } from 'react-redux';
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme); // Получаем текущую тему из Redux

  return (
    <div className={`App ${theme}-theme`}>

      <header className="App-header">
        <ThemeSwitcher />
      </header>
    </div>
  );
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;

