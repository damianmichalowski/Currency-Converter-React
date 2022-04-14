import { useEffect, useState } from "react";
import "../style.css"

export const Clock = () => {

    const getFormatTime = () => {
        return currentTime.toLocaleString(
            "pl",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                minute: "numeric",
                hour: "numeric",
                second: "numeric"
            });
    };

    const [currentTime, setCurrentTime] = useState(new Date());

    const updateTime = () => {
        setCurrentTime(new Date());
        getFormatTime();
    };

    useEffect(() => {
        const intervalID = setInterval(updateTime, 1000);

        return () => {
            clearInterval(intervalID)
        };
    },[]);

    return (
        <p className="form__date">
            Dzisiej jest {getFormatTime()}
        </p>
    );
};
