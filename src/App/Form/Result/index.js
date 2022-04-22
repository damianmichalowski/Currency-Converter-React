import { ResultStyled } from "./styled"

export const Result = ({ result }) => (
    <ResultStyled>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </ResultStyled>
)