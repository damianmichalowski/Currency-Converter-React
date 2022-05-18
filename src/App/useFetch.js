import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = () => {
    const [currencyItem, setCurrencyItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    const currencyFunction = async () => {
        try {
            const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
            setCurrencyItem(response.data);
            setError(false);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        currencyFunction();
    }, []);
    
    
    return {
        error,
        loading,
        currencyItem,
    };
};