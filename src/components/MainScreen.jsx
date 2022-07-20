/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { search } from '../services/getApiWeather';

export default function MainScreen(props) {
  const [city, setCity] = useState('');
  const [cityBkp, setCityBkp] = useState('');
  const [data, setData] = useState(undefined);
  const [btnlook, setBtnlook] = useState(true);
  const [units, setUnits] = useState('metric');
  const [error, setError] = useState(undefined);
  const [cf, setCf] = useState('°C');
  const [update, setUpdate] = useState(false);
  const [date, setDate] = useState(undefined);

  const weather = async () => {
    const { func } = props;
    const response = await search(cityBkp, units, 'pt_br');
    if (response.cod === '404') {
      setError(response.message);
      setCity('');
      setBtnlook(true);
      func(response.cod, cf);
    } else {
      setError(undefined);
      setData(response);
      setCity('');
      func(response, cf);
    }
    const dt = new Date().toLocaleString();
    setDate(dt);
  };

  useEffect(() => {
    if (update) {
      weather();
    }
  }, [units]);

  const saveInput = ({ target }) => {
    const { value } = target;
    setCity(value);
    setCityBkp(value);
    setBtnlook(value.length < 3);
  };

  const btnUnits = () => {
    if (units === 'imperial') {
      setUnits('metric');
      setCf('°C');
      setUpdate(true);
    } else {
      setUnits('imperial');
      setCf('°F');
      setUpdate(true);
    }
  };

  const dayName = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  return (
    <div>
      <div className="bg-indigo-300">
        <h1 className="text-3xl font-bold underline">Weather</h1>
        <input
          type="text"
          value={city}
          name="city"
          onChange={saveInput}
          onKeyUp={(event) => event.key === 'Enter' && weather()}
          placeholder="Digite o nome da cidade"
        />

        <button
          className="bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50"
          type="button"
          disabled={btnlook}
          onClick={() => {
            btnUnits();
          }}
        >
          {cf}
        </button>
        {error ? <h5>{error}</h5>
          : data && (
            <>
              <p />
              {data.name}
              <h2>
                {data.main.temp}
                {cf}
              </h2>
              <p>
                {data.weather[0].description}
              </p>
              <p>{`${dayName[new Date().getDay()]} ${date}`}</p>
            </>
          )}
      </div>
    </div>
  );
}
