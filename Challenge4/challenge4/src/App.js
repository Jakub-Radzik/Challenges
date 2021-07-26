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
import styled from "styled-components";
import {connect} from "react-redux";
import {fetchCountries} from "./Redux/Countries/countriesActions";
import {HashRouter, Link, Switch, Route} from "react-router-dom";
import Detail from "./Components/Main/Detail/Detail";

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

    const App = styled.div`
      background: ${theme.set.background};
      //-webkit-touch-callout: none; /* iOS Safari */
      //-webkit-user-select: none; /* Safari */
      //-moz-user-select: none; /* Old versions of Firefox */
      //-ms-user-select: none; /* Internet Explorer/Edge */
      //user-select: none;
    `

	//TODO: mobile
	//TODO: loading gif
	//TODO: bug fixes- warnings
	//TODO: Names and structure fix

    return (
        <App>
            <darkThemeContext.Provider value={{theme: theme, toggleTheme: () => toggleTheme()}}>
                <Header/>

                <Switch>
                  <Route exact path={"/"}>
                      {
                          props.item.loading && <div id="loading">Loading</div>
                      }

                      {
                          props.item.error && <div id="loading">Error</div>
                      }

                      {
                          props.item.countries.length > 0 && <Main countries={props.item.countries}/>
                      }
                  </Route>

                    <Route path={"/country/:code"} component={Detail}/>

                </Switch>

            </darkThemeContext.Provider>
        </App>
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
