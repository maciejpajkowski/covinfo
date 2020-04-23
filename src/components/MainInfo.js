import React from 'react';
import useFetchedData from '../utils/useFetchedData';

const MainInfo = () => {
    const { data, loading, error } = useFetchedData("https://covid19.mathdro.id/api");

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <p>Confirmed: {data.confirmed.value}</p>
            <p>Recovered: {data.recovered.value}</p>
            <p>Died: {data.deaths.value}</p>
        </>
    )
};

export default MainInfo;