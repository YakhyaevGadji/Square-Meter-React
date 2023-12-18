import { useEffect, useState } from "react";

function useFetch(url) {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);


    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url).then((res) => {
                if(res.ok !== true) {
                    throw Error('Error chego to tam');
                }
                return res.json();
            }).then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            }).catch((err) => {
                if(err.name === 'AbortError') {
                    console.log('fetch abort');
                }else {
                    setError(err.message);
                    setIsLoading(false);
                }
            });
        }, 700); 
            

        return () => {
            console.log('cleanup');
            abortCont.abort();
        }
    }, []);


    return {data, isLoading, error};
}

export default useFetch;