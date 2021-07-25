import React, {useEffect, useState} from 'react';
import Card from "./Card/Card";
import {Responsive} from "../StyledComponents/Responsive";
import FunctionalBar from "./FunctionalBar/FunctionalBar";
import {Content, MainStyled} from "../StyledComponents/Main/MainStyledComponents";

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


    return (
        <MainStyled>
            <searchPhraseContext.Provider value={{setValue: setSearchPhrase}}>
                <Responsive>
                    <Content>
                        <FunctionalBar handle={handleRegion} value={region}/>
                        {
                            //NO SELECTING - ALL
                            props.countries && region === initialRegionState && props.countries
                                .map(
                                    country => <Card
                                        flag={country.flag}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                    />
                                )
                        }

                        {
                            //SELECT REGION
                            props.countries && region !== initialRegionState && props.countries.filter(country => country.region === region)
                                .map(
                                    country => <Card
                                        flag={country.flag}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                    />
                                )
                        }
                    </Content>
                </Responsive>
            </searchPhraseContext.Provider>
        </MainStyled>
    );
}

export default React.memo(Main);
