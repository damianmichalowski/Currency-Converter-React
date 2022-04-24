import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

    const formatdate = (date) => {
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

    return (
        <Wrapper>
            Dzisiej jest
            {" "}
            {formatdate(date)}
        </Wrapper>
    );
};
