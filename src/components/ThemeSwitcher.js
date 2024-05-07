import React from 'react';
import { useDispatch } from 'react-redux';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <div>
            <label htmlFor="themeToggle">Toggle Theme:</label>
            <input
                type="checkbox"
                id="themeToggle"
                onChange={handleThemeToggle}
            />
        </div>
    );
};

export default ThemeSwitcher;
