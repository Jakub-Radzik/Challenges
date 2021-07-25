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


    return (
        <MainStyled>
            <searchPhraseContext.Provider value={{setValue: setSearchPhrase}}>
                <Responsive>
                    <Content>
                        <FunctionalBar/>
                        {
                            props.countries && props.countries
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
