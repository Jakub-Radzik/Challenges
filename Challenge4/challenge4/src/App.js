import './App.css';
import React, {useState} from "react";
import Header from "./Components/Nav/Header";
import sun from "./Icons/sun.svg";
import moon from "./Icons/moon.svg";
import Main from "./Components/Main/Main";
import styled from "styled-components";

export const darkThemeContext = React.createContext({name: 'dark', set: undefined})

function App() {

    const themes = {
        light: {
            changeFor: 'Dark Theme',
            toggler: moon,

            elements: 'hsl(0, 0%, 100%)',
            text: 'hsl(200, 15%, 8%)',
            background: 'hsl(0, 0%, 98%)',
            navShadow: '0px 0px 7px 3px hsl(0, 0%, 80%)',

            input: 'hsl(0, 0%, 52%)'
        },
        dark: {
            changeFor: 'Light Theme',
            toggler: sun,

            elements: 'hsl(209, 23%, 22%)',
            text: 'hsl(0, 0%, 100%)',
            background: 'hsl(207, 26%, 17%)',
            navShadow: '0px 0px 7px 3px hsl(207, 26%, 9%)',
        }
    }
    const [theme, setTheme] = useState({name: 'light', set: themes.light});

    const toggleTheme = () => {
        if (theme.name === 'light') {
            setTheme({name: 'dark', set: themes.dark});
        } else {
            setTheme({name: 'light', set: themes.light});
        }
    }

    const App = styled.div`
        background: ${theme.set.background};
        // background:red;
    `
    return (
        <App>
            <darkThemeContext.Provider value={{theme: theme, toggleTheme: () => toggleTheme()}}>
                <Header/>
                <Main/>
            </darkThemeContext.Provider>
        </App>
    );
}

export default App;
