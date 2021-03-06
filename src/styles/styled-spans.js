import styled from 'styled-components';

export const StyledConfirmed = styled.span`
    font-family: "Inconsolata";
    font-weight: 600;
    font-size: 26px;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

export const StyledRecovered = styled.span`
    font-family: "Inconsolata";
    font-weight: 600;
    color: #409940;
    font-size: 26px;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

export const StyledDied = styled.span`
    font-family: "Inconsolata";
    font-weight: 600;
    color: #dd4040;
    font-size: 26px;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;