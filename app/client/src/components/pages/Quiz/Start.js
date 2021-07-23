import React from 'react'
import styled, { css } from 'styled-components/macro'

const Intro = styled.div`
    text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1 className="mono-font font-weight-bold">Take the quiz.</h1>
            <h4 className="mono-font">Are you ready?</h4>
            {/* <Button onClick={startQuiz} css={btnCSS}>Start</Button> */}
            <button onClick={startQuiz} className="btn mt-4 btn-lg mono-font rounded-0 btn-outline-dark ">Start</button>
        </Intro>
    )
}

export default Start