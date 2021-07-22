import './App.css';
import React, {useState} from "react";
import Header from "./Redux/Components/Nav/Header";

export const darkThemeContext = React.createContext({
    theme: 'light', toggleTheme: () => {}
})

function App() {

    const themes = {
        light: {
            elements: 'hsl(0, 0%, 100%)',
            text: 'hsl(200, 15%, 8%)',
            background: 'hsl(0, 0%, 98%)',
            input: 'hsl(0, 0%, 52%)'
        },
        dark: {
            elements: 'hsl(209, 23%, 22%)',
            text: 'hsl(0, 0%, 100%)',
            background: 'hsl(207, 26%, 17%)'
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

    return (
        <div className="App">
            <darkThemeContext.Provider value={{theme: theme, toggleTheme: () => toggleTheme()}}>
                <Header/>
            </darkThemeContext.Provider>
        </div>
    );
}

export default App;
