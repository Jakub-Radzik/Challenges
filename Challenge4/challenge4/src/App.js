import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./Components/Nav/Header";
import sun from "./Icons/sun.svg";
import moon from "./Icons/moon.svg";
import Main from "./Components/Main/Main";
import lightMagnifier from "./Icons/magnifying-glass-light.svg";
import darkMagnifier from "./Icons/magnifying-glass-dark.svg";
import lightArrow from "./Icons/arrow-light.svg";
import darkArrow from "./Icons/arrow-dark.svg";
import {connect} from "react-redux";
import {fetchCountries} from "./Redux/Countries/countriesActions";
import {Route, Switch} from "react-router-dom";
import Detail from "./Components/Main/Detail/Detail";
import {LoaderContainer, Loading} from "./Components/StyledComponents/Loading";
import {StyledApp} from "./Components/StyledComponents/StyledApp";

export const darkThemeContext = React.createContext({name: 'dark', set: undefined})

function App(props) {

    useEffect(() => {
        props.fetchData();
    }, [])

    const themes = {
        light: {
            changeFor: 'Dark Theme',
            toggler: moon,
            elements: 'hsl(0, 0%, 100%)',
            text: 'hsl(200, 15%, 8%)',
            background: 'hsl(0, 0%, 98%)',
            navShadow: '0px 0px 7px 3px hsl(0, 0%, 80%)',
            input: 'hsl(0, 0%, 52%)',
            magnifier: lightMagnifier,
            arrow: lightArrow
        },
        dark: {
            changeFor: 'Light Theme',
            toggler: sun,
            elements: 'hsl(209, 23%, 22%)',
            text: 'hsl(0, 0%, 100%)',
            background: 'hsl(207, 26%, 17%)',
            navShadow: '0px 0px 7px 3px hsl(207, 26%, 9%)',
            input: 'hsl(0, 0%, 100%)',
            magnifier: darkMagnifier,
            arrow: darkArrow
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


    //remember theme after refresh
    useEffect(() => {
        let selectedTheme = localStorage.getItem('theme');

        if (selectedTheme === "dark") {
            setTheme({name: 'dark', set: themes.dark}) //take theme from storage and use
        } else {
            localStorage.setItem('theme', `light`) //light as default
        }

    }, [])

    //change theme in localStorage
    useEffect(() => {
        localStorage.setItem('theme', `${theme.name}`)
    }, [theme])


    //TODO: bug fixes- warnings
    //TODO: Names and structure fix

    return (
        <StyledApp background={theme.set.background}>
            <darkThemeContext.Provider value={{theme: theme, toggleTheme: () => toggleTheme()}}>
                <Header/>
                <Switch>
                    <Route exact path={"/"}>
                        {
                            props.item.loading &&
                            <LoaderContainer background={theme.set.background}>
                                <Loading/>
                            </LoaderContainer>
                        }

                        {
                            props.item.error && <div id="error">Error</div>
                        }

                        {
                            props.item.countries.length > 0 && <Main countries={props.item.countries}/>
                        }
                    </Route>

                    <Route path={"/country/:code"} component={Detail}/>

                </Switch>

            </darkThemeContext.Provider>
        </StyledApp>
    );
}

function mapStateToProps(state) {
    return {
        item: state.countries
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchCountries())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
