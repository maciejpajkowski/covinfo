import React from 'react';
import useFetchedData from '../utils/useFetchedData';
import moment from 'moment';
import StyledHeader from '../styles/StyledHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { data, error } = useFetchedData("https://covid19.mathdro.id/api");
    
    if (error) return <p>Error!</p>;
    
    const lastUpdateDate = data ? data.lastUpdate : "Loading...";

    return (
    <StyledHeader>
        <div>
            <FontAwesomeIcon icon={faVirus} />
            <h1>COVInfo</h1>
        </div>
        <span><strong>Last update date:</strong><br /> {moment.utc(Date.parse(lastUpdateDate)).format("MMMM Do YYYY, HH:mm:ss")}</span>
    </StyledHeader>
)};

export default Header;