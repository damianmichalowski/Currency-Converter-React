import { useState } from "react";
import { Form } from "./Form";
import { currencies } from "./currencies";

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
      <Form
        result={result}
        calculateResult={calculateResult}
        setResult={setResult}
      />
    </>
  );
}

export default App;
