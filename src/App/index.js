import { useState } from "react";
import { Form } from "./Form";
import { Container } from "./styled.js";
import { Clock } from "./Clock";
import { Result } from "./Result";
import { useFetch } from "./useFetch";

function App() {
  const [result, setResult] = useState();

  const {
    error,
    loading,
    currencyItem,
  } = useFetch();

  const calculateResult = (currency, amount) => {
    const rate = currencyItem.rates[currency];
    
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
          calculateResult={calculateResult}
          error={error}
          loading={loading}
          currencyItem={currencyItem}
        />
        <Result result={result} />
      </Container>
    </>
  );
}

export default App;
