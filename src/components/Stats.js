import React from 'react';
import useFetchedData from '../utils/useFetchedData';

const Stats = ({ url, global }) => {
    const { data, loading, error } = useFetchedData(url);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Sorry, something went wrong!</div>

    return (
        <>
            {global && <h2>Global data:</h2>}
            <div>Confirmed: {data.confirmed.value}</div>
            <div>Recovered: {data.recovered.value}</div>
            <div>Died: {data.deaths.value}</div>
        </>
    )
};

export default Stats;