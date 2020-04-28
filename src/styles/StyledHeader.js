import styled from 'styled-components';

const StyledHeader = styled.header`
    line-height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #484a4f;
    box-shadow: 0px 2px 2px 1px #333; 
    padding: 0.6rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1.6rem;
        /* font-style: italic; */
        color: #894bd1;
    }

    h1 {
        font-size: 1.6rem;
        display: inline-block;
        margin: 0;
        margin-left: 4px;
        color: #9c52f2;
    }

    span {
        text-align: right;
        font-size: 0.8rem;
    }
`

export default StyledHeader;