import { useState } from "react";
import { currencies } from "../currencies";
import { StyledForm, Fieldset, Legend, Title, Footer, Input, Button, Label, Container } from "./styled";
import { useFetch } from "../useFetch";

export const Form = ({ calculateResult, result, setResult }) => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  // const currencies = useFetch();

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Przelicznik Walut</Legend>

        <Container>
          <Label>
            <Title>Podaj kwotę:</Title>
            <Input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              required
              step="any"
              min="0"
              placeholder="Wpisz kwotę w zł"
              autoFocus
            />
          </Label>
        </Container>

        <Container>
          <Label>
            <Title>Waluta:</Title>
            <Input as="select" value={currency} onChange={onCurrencyChange}>
              {Object.keys(currencies.rates).map((currency => (
                <option
                  key={currency}
                  value={currency}
                >
                  {currency}
                </option>
              )))}
            </Input>
          </Label>
        </Container>
      </Fieldset>

      <Container>
        <Button>Przelicz</Button>
      </Container>

      <Footer>Kursy walut pobierane są z Europejskiego Banku Centralnego.<br/>Aktualne na dzień: </Footer>
      
    </StyledForm>
  );
};

export default Form;