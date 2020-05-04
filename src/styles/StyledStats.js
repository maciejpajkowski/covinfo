import styled from 'styled-components';

const StyledStats = styled.div`
    h2 {
        line-height: 1.6rem;
        text-align: center;
        margin: 0.8rem 0 0.6rem 0;
    }

    div {
        div {
            font-size: 24px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0 1rem;
        }
    }
    
    p {
        padding: 0.4rem;
    }

    @media (min-width: 768px) {
        width: 90%;
        margin: 0 auto;

        h2 {
            font-size: 2rem;
            margin: 1.2rem 0 1rem 0;
        }

        div {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin: 2rem auto;

            div {
                font-size: 32px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 2px 5px 0px #222; 
                background: #47494d;
                border-radius: 1rem;
                padding: 1.4rem 1rem;
            }
        }
    }

    @media (min-width: 992px) {
        width: 70%;
    }

    @media (min-width: 1200px) {
        width: 60%;
    }
`;

export default StyledStats;