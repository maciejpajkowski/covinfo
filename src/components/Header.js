import React from 'react';
import useFetchedData from '../utils/useFetchedData';
import moment from 'moment';
import StyledHeader from '../styles/StyledHeader';

const Header = () => {
    const { data, error } = useFetchedData("https://covid19.mathdro.id/api");
    
    if (error) return <p>Error!</p>;
    
    const lastUpdateDate = data ? data.lastUpdate : "Loading...";

    return (
    <StyledHeader>
        <h1>CoV Info</h1>
        <span><strong>Last update date:</strong><br /> {moment.utc(Date.parse(lastUpdateDate)).format("MMMM Do YYYY, hh:mm:ss")}</span>
    </StyledHeader>
)};

export default Header;