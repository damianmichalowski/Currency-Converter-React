import { useState } from "react";
import { Form } from "./Form";
import { currencies } from "./currencies";
import { useApi } from "./useApi";

function App() {
  const [result, setResult] = useState();

  const ratesData = useApi();
  console.log(ratesData);
  console.log(ratesData.rates);

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
