import { useEffect, useState } from "react";
import { StyledForm, Fieldset, Legend, Title, Footer, Input, Button, Label, Container, Wrapper, Content, Error } from "./styled";
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap';

export const Form = ({ calculateResult, result, setResult }) => {
  const [currencyItem, setCurrencyItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const currencyFunction = async () => {
    try {
      const response = await axios.get("https://api.exchangerate.host/latest?base=PLN")
      console.log(response);
      setCurrencyItem(response.data);
      setError(false);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    currencyFunction();
  }, []);











  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };


  if (error) {
    return (
      <>
        <Error>Hmm... Coś poszło nie tak.😕 Sprawdź, czy masz połączenie z internetem. 
          Jeśli masz... to wygląda że to, nasza wina. Może spróbuj później? 🙂</Error>
      </>
    );
  } else if (loading) {
    return (
      <>
        <Wrapper>
          <Legend>Przelicznik Walut</Legend>
          <ReactBootStrap.Spinner animation="border" />
          <Content>Sekunda... Ładuje kursy z walut Eropejskiego Banku Centralnego...😎</Content>
        </Wrapper>
      </>
    );
  } else {
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
                {Object.keys(currencyItem.rates).map((currency => (
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

        <Footer>Kursy walut pobierane są z Europejskiego Banku Centralnego.<br/>Aktualne na dzień: <strong>{currencyItem.date}</strong> </Footer>

      </StyledForm>
    );
  };
};

export default Form;