import { useState } from "react";
import { Form } from "./Form";
import { currencies } from "./currencies";
import {Container} from "./styled.js";
import { Clock } from "./Clock";
import { Result } from "./Result";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  return (
    <>
      <Container>
        <Clock />
        <Form
          result={result}
          calculateResult={calculateResult}
          setResult={setResult}
        />
        <Result result={result} />
      </Container>
    </>
  );
}

export default App;
