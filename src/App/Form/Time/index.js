import { useState } from "react";
import "../style.css"

export const Clock = () => {

    const getTime = () => {
        return new Date().toLocaleString("pl", {weekday: "long", day:"numeric", month: "long", minute: "numeric" , hour: "numeric" , second: "numeric"});
    };

    const [currentTime, setCurrentTime] = useState(getTime());

    const updateTime = () => {
        getTime();
        setCurrentTime(getTime());
    };

    setInterval(updateTime, 1000);

    return (
        <p className="form__date">
            Dzisiej jest {currentTime}
        </p>
    );
};
