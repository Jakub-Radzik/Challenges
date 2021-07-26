import * as React from 'react';
import DetailContainer from "./DetailContainer";
import ReturnBar from "./ReturnBar";
import {StyledDetail} from "../../StyledComponents/Main/DetailStyledComponents";

function Detail(props) {


    return (
        <StyledDetail>
            <ReturnBar/>
            <DetailContainer code={props.match.params.code}/>
        </StyledDetail>
    );
}

export default React.memo(Detail);
