import React from 'react';
import StyledStats from '../styles/StyledStats';
import { StyledConfirmed, StyledRecovered, StyledDied } from '../styles/styled-spans';
import useFetchedData from '../utils/useFetchedData';
import CountTo from 'react-count-to';

const Stats = ({ url, global }) => {
    const { data, loading, error } = useFetchedData(url);

    if (loading) return <StyledStats><p>Loading...</p></StyledStats>
    if (error) return <StyledStats><p>Sorry, something went wrong!</p></StyledStats>

    const easeOutExpo = (x) => 1 - (1 - x) * (1 - x); //x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

    return (
        <StyledStats>
            {global && <h2>Global data</h2>}
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