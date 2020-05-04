import React, { useState } from 'react'
import useFetchedData from '../utils/useFetchedData';
import Stats from './Stats';
import StyledStats from '../styles/StyledStats';
import StyledCountrySelector from '../styles/StyledCountrySelector';

const CountrySelector = () => {
    const { data, loading, error } = useFetchedData("https://covid19.mathdro.id/api/countries");
    const [selectedCountry, setSelectedCountry] = useState("");

    if (loading) return <StyledStats><p>Loading...</p></StyledStats>
    if (error) return <StyledStats><p>Sorry, something went wrong!</p></StyledStats>

    return (
        <StyledCountrySelector>
            {selectedCountry ? <h3>Displaying data for: </h3> : <h3>Country data:</h3>}
            <select onChange={e => {
                setSelectedCountry(e.target.value);
                }}>
                <option key={""} value={""}>Select a country...</option>
                {data.countries.map((country) => (
                    <option key={country.name} value={country.iso3}>
                        {country.name}
                    </option>
                ))}
            </select>
            {selectedCountry && (<Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />)}
        </StyledCountrySelector>
    );
}

export default CountrySelector;