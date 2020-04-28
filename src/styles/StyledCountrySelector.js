import styled from 'styled-components';

const StyledCountrySelector = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin: 1rem 0 0.6rem 0;
        line-height: 1.6rem;
        text-align: center;
    }

    select {
        width: 75%;
        margin: 0.25rem auto;
        font-size: 22px;
        background:  #333;
        border: 0;
        box-shadow: 0px 2px 5px 0px #222;
        color: inherit;
        padding: 0.2rem;
        text-align: center;
        text-align-last: center;
        font-family: inherit;
        line-height: 1rem;

        option {
            background: #333;
            color: #eee;
            text-align: center;
        }
    }
`;

export default StyledCountrySelector;