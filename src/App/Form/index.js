import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result, setResult }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [course, setCourse] = useState(currencies[0].rate);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }
  
  const onCurrencyChange =({target}) => {
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
    <form onSubmit={onSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Converter</legend>

        <p>
          <label className="form__label">
            <span className="form__labelText">Wybierz walutę:</span>
            <select className="form__field" value={currency} onChange={onCurrencyChange}>
              {currencies.map((currency => (
                <option
                  key={currency.name}
                  value={currency.name}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </label>
        </p>

        <p>
          <label className="form__label">
            <span className="form__labelText">Podaj kwotę:</span>
            <input
              className="form__field form__field--bold"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              required
              step="any"
              min="0"
              placeholder="Wpisz kwotę"
              autoFocus
            />
          </label>
        </p>

        <p>
          <label className="form__label">
            <span className="form__labelText">Średni kurs:</span>
            <input
              className="form__field"
              readOnly
              value={course}
            >
            </input>
          </label>
        </p>

        <p className="form__footer">Kursy pobrane z dnia 12.04.2022</p>

        <p>
          <button className="form__button">Przelicz</button>
          <button onClick={clearingForm} className="form__button form__button--clear">Wyczyść</button>
        </p>

        <Result result={result} />

      </fieldset>
    </form>
  );
};

export default Form;