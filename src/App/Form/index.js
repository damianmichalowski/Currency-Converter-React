import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { StyledForm, Fieldset, Legend, Title, Footer, Input, Button } from "./styled";

export const Form = ({ calculateResult, result, setResult}) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [course, setCourse] = useState(currencies[0].rate);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);

    setCourse(currencies.find(({ name }) => name === target.value).rate);
  };

  const clearingForm = (event) => {
    event.preventDefault();
    setCurrency(currencies[0].name);
    setAmount("");
    setCourse(currencies[0].rate);
    setResult(undefined);
  };
  
  return (
    <StyledForm onSubmit={onSubmit}>
      <Clock />
      <Fieldset>
        <Legend>Currency Converter</Legend>
        <Title>Wybierz walutę:</Title>
        <Input as="select" value={currency} onChange={onCurrencyChange}>
          {currencies.map((currency => (
            <option
              key={currency.name}
              value={currency.name}
            >
              {currency.name}
            </option>
          )))}
        </Input>

        <Title>Podaj kwotę:</Title>
        <Input
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          type="number"
          required
          step="any"
          min="0"
          placeholder="Wpisz kwotę"
          autoFocus
        />

        <Title>Średni kurs:</Title>
        <Input
          readOnly
          value={course}
        >
        </Input>

        <Footer>Kursy pobrane z dnia 12.04.2022</Footer>

        <Button>Przelicz</Button>
        <Button reset onClick={clearingForm}>Wyczyść</Button>

        <Result result={result} />

      </Fieldset>
    </StyledForm>
  );
};

export default Form;