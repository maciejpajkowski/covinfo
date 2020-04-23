import React from 'react';
import useFetchedData from '../utils/useFetchedData';
import moment from 'moment';

const Header = () => {
    const { data, error } = useFetchedData("https://covid19.mathdro.id/api");
    
    if (error) return <p>Error!</p>;
    
    const lastUpdateDate = data ? data.lastUpdate : "Loading...";

    return (
    <>
        <h1>CoV-Info</h1>
        <span>Last update date: {moment.utc(Date.parse(lastUpdateDate)).format("MMMM Do YYYY, hh:mm:ss")}</span>
    </>
)};

export default Header;