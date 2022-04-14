import { useEffect, useState } from "react";
import "../style.css"

export const Clock = () => {

    const formatDate = (date) => {
        return date.toLocaleString(
            undefined,
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                minute: "numeric",
                hour: "numeric",
                second: "numeric"
            });
    };

    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div className="form__date">
            Dzisiej jest
            {" "}
            {formatDate(date)}
        </div>
    );
};
