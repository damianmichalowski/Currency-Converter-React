import { useEffect, useState } from "react";
import { currencies } from "../currencies";
import { StyledForm, Fieldset, Legend, Title, Footer, Input, Button, Label, Container, Wrapper, Content, Header } from "./styled";
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap';

export const Form = ({ calculateResult, result, setResult }) => {
    const [currencyItem, setCurrencyItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const currencyFunction = async () => {
      try {
        const data = await axios
          .get("https://api.exchangerate.host/latest?base=PLN")
          .then(res => {
            if(!res.ok){
              throw Error("COŚ POSZŁO NIE TAK, sprawdz połącznie z internetem");
            }
            console.log(res);
            setCurrencyItem(res.data);
          });
        setTimeout(() => {
          setLoading(true);
        }, 2000);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
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

  if (!loading) {
    return (
      <>
      <Wrapper>
        <Legend as="h1">Przelicznik Walut</Legend>
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

        <Footer>Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />Aktualne na dzień: </Footer>

      </StyledForm>
    );
  };
};

export default Form;