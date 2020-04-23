import { useState, useEffect } from 'react';

const useFetchedData = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError();

            const fetchedData = await fetch(url)
                .then(res => res.json())
                .catch(err => setError(err));

            setData(fetchedData);
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetchedData;