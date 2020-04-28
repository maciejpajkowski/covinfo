import React from 'react';
import StyledStats from '../styles/StyledStats';
import { StyledConfirmed, StyledRecovered, StyledDied } from '../styles/styled-spans';
import useFetchedData from '../utils/useFetchedData';
import CountTo from 'react-count-to';

const Stats = ({ url, global }) => {
    const { data, loading, error } = useFetchedData(url);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Sorry, something went wrong!</div>

    const easeOutExpo = (x) => 1 - (1 - x) * (1 - x); //x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

    return (
        <StyledStats>
            {global && <h2>Global data:</h2>}
            <div>
                <span>Confirmed: </span>
                <StyledConfirmed>
                    <CountTo to={data.confirmed.value} speed={3000} delay={30} easing={easeOutExpo} />
                </StyledConfirmed>
            </div>
            <div>
                <span>Recovered:</span>
                <StyledRecovered>
                    <CountTo to={data.recovered.value} speed={3000} delay={30} easing={easeOutExpo} />
                </StyledRecovered>
            </div>
            <div>
                <span>Died:</span>
                <StyledDied>
                    <CountTo to={data.deaths.value} speed={3000} delay={30} easing={easeOutExpo} />
                </StyledDied>
            </div>
        </StyledStats>
    )
};

export default Stats;