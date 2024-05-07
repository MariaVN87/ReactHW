import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./actions";

const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div style={{
            color: theme === 'light' ? 'black' : 'white',
            background: theme === 'light' ? 'white' : 'black'
        }}>
            Текущая тема: {theme}
            <button
                className="theme-switcher-btn"
                onClick={() => dispatch(toggleTheme())}

            >
                Переключить тему
            </button>
        </div>
    );
};
export default ThemeSwitcher;

