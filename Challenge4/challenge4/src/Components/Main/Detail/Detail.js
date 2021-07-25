import * as React from 'react';
import DetailContainer from "./DetailContainer";
import styled from "styled-components";
import ReturnBar from "./ReturnBar";

function Detail(props) {

    const StyledDetail = styled.div`
      height: calc(100vh - 100px);
    `

    return (
        <StyledDetail>
            <ReturnBar/>
            <DetailContainer code={props.match.params.code}/>
        </StyledDetail>
    );
}

export default React.memo(Detail);
