import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #484a4f;
    box-shadow: 0px 2px 2px 1px #333; 
    padding: 0.4rem;

    h1 {
        font-size: 1.3rem;
        display: inline-block;
        margin: 0;
    }

    span {
        text-align: right;
        font-size: 0.8rem;
    }
`

export default StyledHeader;