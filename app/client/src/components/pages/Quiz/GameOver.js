import styled from 'styled-components'

const Title = styled.h1`
    font-size: 32px;
    font-family: 'Share Tech Mono', monospace;
    font-weight: bold;

`;

const Points = styled.p`
    font-size: 24px;
    font-family: 'Share Tech Mono', monospace;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>End of quiz
            </Title>
            <Points>You got {pts} out of 10!</Points>
            <button className="btn rounded-0 mono-font btn-lg btn-outline-dark " onClick={refreshPage}>Retry</button>
        </>
    )
}

export default GameOver