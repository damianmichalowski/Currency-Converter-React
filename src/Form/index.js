import "./style.css";
import { useState } from "react";

const Form = () => {
  const [currency, setcurrency] = useState("EUR");
  const onSelectChange = ({ target }) => {
    if (currency === "EUR") {
      setcourse(4.26);
    } else if (currency === "USD") {
      setcourse(4.64);
      console.log("EUR");
    };

    setcurrency(target.value);
  };

  const [amount, setamount] = useState(0);
  const onamountChange = ({ target }) => setamount(target.value);

  const [course, setcourse] = useState(4.64);
  const oncourseChange = ({ target }) => setcourse(target.value);

  const [result, setresult] = useState(0);

  const [amount2, setamount2] = useState(0);
  const [currency2, setcurrency2] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setamount2(amount);
    setcurrency2(currency);
  }

  const reset = () => {
    setcurrency("EUR");
    setamount(0);
    setcourse(4.64);
    setresult(0);
    setamount2(0);
  };

  return (
    <form onSubmit={onFormSubmit} className="form" method="post">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Converter</legend>

        <p>
          <label className="form__label">
            <span className="form__labelText">Wybierz walutę:</span>
            <select className="form__field" value={currency} onChange={onSelectChange}>
              <option>EUR</option>
              <option>USD</option>
            </select>
          </label>
        </p>

        <p>
          <label className="form__label">
            <span className="form__labelText">Podaj kwotę:</span>
            <input
              className="form__field form__field--bold"
              value={amount}
              onChange={onamountChange}
              type="number"
              step="any"
              min="0"
              placeholder="Wpisz kwotę"
              autoFocus
              required
            />
          </label>
        </p>

        <p>
          <label className="form__label">
            <span className="form__labelText">Średni course:</span>
            <input
              className="form__field"
              type="number"
              placeholder="1.0"
              step="0.01"
              min="3"
              max="5"
              value={course}
              onChange={oncourseChange}>
            </input>
          </label>
        </p>

        <p>
          <button onClick={() => setresult(course * amount)} className="form__button" type="submit">Przelicz</button>
          <button onClick={reset} className="form__button form__button--clear" type="reset">Wyczyść</button>
        </p>

        <p className="form__legend">
          {amount2} {currency2} = {result.toFixed(2)} PLN
        </p>

      </fieldset>
    </form>
  );
};

export default Form;