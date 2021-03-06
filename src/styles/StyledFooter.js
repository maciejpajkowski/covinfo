import styled from 'styled-components';

const StyledFooter = styled.div`
    font-size: 1rem;
    line-height: 1.2rem;
    color: #666;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.4rem;

    span:last-child {
        text-align: right;
    }
`;

export default StyledFooter;