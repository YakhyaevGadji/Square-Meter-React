import { useEffect, useState } from "react";

function useFetchItem(url) {

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then((res) => {
            if(res.ok !== true) {
                throw Error('Error to fetch item');
            }
            return res.json();
        }).then((data) => {
            setItem(data);
            setIsLoading(false);
            setError(null);
        }).catch((err) => {
            setError(err.message);
            setIsLoading(false);
        });
    }, []);

    return {item, isLoading, error};
}

export default useFetchItem;