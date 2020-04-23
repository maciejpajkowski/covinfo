import React from 'react';
import useFetchedData from '../utils/useFetchedData';

const Stats = ({ url, global }) => {
    const { data, loading, error } = useFetchedData(url);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Sorry, something went wrong...</p>

    return (
        <>
            {global && <h2>Global data:</h2>}
            <p>Confirmed: {data.confirmed.value}</p>
            <p>Recovered: {data.recovered.value}</p>
            <p>Died: {data.deaths.value}</p>
        </>
    )
};

export default Stats;