import * as React from 'react';
import {useEffect} from "react";

function DetailContainer(props) {

    useEffect(()=>{
        console.log(props.country)
    },[])

    return (
        <div>
        </div>
    );
}


export default React.memo(DetailContainer);