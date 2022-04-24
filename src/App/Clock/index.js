import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper>
            Dzisiej jest
            {" "}
            {formatdate(date)}
        </Wrapper>
    );
};
