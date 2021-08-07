//A custom Hook made for reusablity of Fetching data

//abortCont is for aborting the fetch url if user immediately switches the nav and the data could not be fetched

import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal : abortCont.signal})
            .then((res) => {
                if(!res.ok){
                    throw Error("Cannot fetch data");
                }
                return res.json();

            }).then((data) => {
                
                setError(null);
                setData(data);
                setIsPending(false);

            }).catch((e) => {

                if(e.name === 'AbortError'){
                    console.log('Fetch Aborted');
                }
                else{
                    setIsPending(false);
                    setError(e.message);
                }

            })
        }, 1000);

        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error};

}

export default useFetch;