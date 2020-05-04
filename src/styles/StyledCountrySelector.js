import styled from 'styled-components';

const StyledCountrySelector = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin: 1rem 0 0.6rem 0;
        line-height: 1.6rem;
        text-align: center;
        opacity: 0;
        animation: mountIn 1.5s forwards;
        animation-delay: 0.6s;
    }

    select {
        width: 75%;
        margin: 0.25rem auto;
        font-size: 22px;
        background:  #333;
        border: 0;
        box-shadow: 0px 2px 5px 0px #222;
        border-radius: 0.5rem;
        color: inherit;
        padding: 0.2rem;
        text-align: center;
        text-align-last: center;
        font-family: inherit;
        opacity: 0;
        animation: mountIn 1.5s forwards;
        animation-delay: 0.9s;

        option {
            background: #333;
            color: #eee;
            text-align: center;
        }

        &:focus {
            outline: 0;
        }
    }

    @media (min-width: 768px) {
        select {
            width: 50%;
            font-size: 24px;
        }
    }

    @media (min-width: 1200px) {
        select {
            width: 35%;
        }
    }

    @media (min-width: 1367px) {
        select {
            font-size: 28px;
        }
    }

    @media (max-width: 320px) {
        select {
            width: 95%;
            font-size: 18px;
        }
    }

    @keyframes mountIn {
        from {
            transform: translateY(10px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
`;

export default StyledCountrySelector;