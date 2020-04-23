import React, { useState } from 'react'
import useFetchedData from '../utils/useFetchedData';
import Stats from './Stats';

const CountrySelector = () => {
    const { data, loading, error } = useFetchedData("https://covid19.mathdro.id/api/countries");
    const [selectedCountry, setSelectedCountry] = useState("");

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            {selectedCountry ? <h2>Displaying data for: </h2> : <h2>Please select a country.</h2>}
            <select onChange={e => {
                setSelectedCountry(e.target.value);
                }}>
                <option key={""} value={""}>Select a country here...</option>
                {data.countries.map((country) => (
                    <option key={country.name} value={country.iso3}>
                        {country.name}
                    </option>
                ))}
            </select>
            {selectedCountry && (<Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />)}
        </>
    );
}

export default CountrySelector;