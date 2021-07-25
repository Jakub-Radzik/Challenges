import * as React from 'react';
import {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchCountry} from "../../Redux/Country/countryActions";
import DetailContainer from "./DetailContainer";

function Detail(props) {

    useEffect(() => {
        props.fetchData();
    }, [])

    return (
        <div>

            {props.item &&
            props.item.country &&
            <DetailContainer country={props.item.country} />
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        item: state.country
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchData: () => dispatch(fetchCountry(props.match.params.code))
    };
}

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
    )(Detail)
);