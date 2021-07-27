import React, {useEffect, useState} from 'react';
import Card from "./Card/Card";
import {Responsive} from "../StyledComponents/Responsive";
import FunctionalBar from "./FunctionalBar/FunctionalBar";
import {Content, MainStyled} from "../StyledComponents/Main/MainStyledComponents";
import {Link} from "react-router-dom";

export const searchPhraseContext = React.createContext({setValue: undefined});

function Main(props) {

    const [searchPhrase, setSearchPhrase] = useState("");

    useEffect(() => {
        console.log(searchPhrase);
    }, [searchPhrase])


    /*SELECT REGION HANDLERS*/
    const initialRegionState = "World";
    const [region, setRegion] = useState(initialRegionState);

    const handleRegion = (event) => {
        setRegion(event.target.value);
    }
    /************************/


    /*SEARCH FOR COUNTRY HANDLERS*/
    const [phrase, setPhrase] = useState("");

    const handleSearch = (event) => {
        setPhrase(event.target.value);
    }
    /******************************/


    const filterHandler = country => {
        let condition1 = country.name.toLowerCase().startsWith(phrase.toLowerCase());
        let condition2 = country.region === region;

        if (region === initialRegionState) {
            if (phrase === "") {    //all countries
                return true;
            } else {    //starts with (whole world)
                return condition1;
                // return country.name.toLowerCase().includes(phrase.toLowerCase());
            }
        } else {
            if (phrase === "") {    //whole region
                return condition2;
            } else {    //whole region and start with
                return condition2 && condition1;
            }
        }
    }

    let key = 0;

    return (
        <MainStyled>
            <searchPhraseContext.Provider value={{setValue: setSearchPhrase}}>
                <Responsive>
                    <Content>
                        <FunctionalBar handleSearch={handleSearch} handleRegion={handleRegion} valueRegion={region}
                                       valueSearch={phrase}/>
                        {
                            //ALL CONDITIONS
                            props.countries && props.countries.filter(country => filterHandler(country))
                                .map(
                                    country =>
                                        <Link to={`/country/${country.alpha2Code}`} key={key++}>
                                            <Card
                                                flag={country.flag}
                                                name={country.name}
                                                population={country.population}
                                                region={country.region}
                                                capital={country.capital}
                                            />
                                        </Link>
                                )
                        }
                    </Content>
                </Responsive>
            </searchPhraseContext.Provider>
        </MainStyled>
    );
}

export default React.memo(Main);
