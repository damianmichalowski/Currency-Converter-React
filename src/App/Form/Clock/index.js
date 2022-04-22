import { DateStyled } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <DateStyled>
            Dzisiej jest
            {" "}
            {date}
        </DateStyled>
    );
};
