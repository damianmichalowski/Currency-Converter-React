import "./style.css";
import { useState } from "react";

const Form = () => {
  const [waluta, setWaluta] = useState("EUR");
  const onSelectChange = ({ target }) =>{
    if(waluta === "EUR"){
      setKurs(4.26);
    }else if (waluta === "USD"){
      setKurs(4.64);
      console.log("EUR");
    };

    setWaluta(target.value);
  };

  const [kwota, setKwota] = useState(0);
  const onKwotaChange = ({ target }) => setKwota(target.value);

  const [kurs, setKurs] = useState(4.64);
  const onKursChange = ({ target }) => setKurs(target.value);

  const [wynik, setWynik] = useState(0);

  const [kwota2, setKwota2] = useState(0);
  const [waluta2, setWaluta2] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setKwota2(kwota);
    setWaluta2(waluta);
  }

  const reset = () => {
    setWaluta("EUR");
    setKwota(0);
    setKurs(4.64);
    setWynik(0);
    setKwota2(0);
  };

  return (
    <form onSubmit={onFormSubmit} className="form" method="post">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Converter</legend>

        <p>
          <label className="form__label">
            <span className="form__labelText">Wybierz walutę:</span>
            <select className="form__field" value={waluta} onChange={onSelectChange}>
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
              value={kwota}
              onChange={onKwotaChange}
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
            <span className="form__labelText">Średni Kurs:</span>
            <input
              className="form__field"
              type="number"
              placeholder="1.0"
              step="0.01"
              min="3"
              max="5"
              value={kurs}
              onChange={onKursChange}>
            </input>
          </label>
        </p>

        <p>
          <button onClick={() => setWynik(kurs*kwota)} className="form__button" type="submit">Przelicz</button>
          <button onClick={reset} className="form__button form__button--clear" type="reset">Wyczyść</button>
        </p>

        <p className="form__legend">
          {kwota2} {waluta2} = {wynik.toFixed(2)} PLN
        </p>

      </fieldset>
    </form>
  );
};

export default Form;