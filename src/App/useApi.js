import axios from "axios";
import { useState , useEffect } from "react";

export const useApi = () => {
    const [ratesData , setRatesData] = useState({});


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://api.exchangerate.host/latest?base=PLN');
                setRatesData(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return ratesData;
};