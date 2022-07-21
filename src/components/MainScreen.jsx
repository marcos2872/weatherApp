/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import { search } from '../services/getApiWeather';
import { mainS } from '../tests/data';

export default function MainScreen(props) {
  const [city, setCity] = useState('');
  // const [cityBkp, setCityBkp] = useState('');
  const [data, setData] = useState(undefined);
  const [btnlook, setBtnlook] = useState(true);
  const [units, setUnits] = useState('metric');
  const [error, setError] = useState(undefined);
  const [cf, setCf] = useState('°C');
  const [update, setUpdate] = useState(false);
  const [date, setDate] = useState(undefined);

  const weather = async () => {
    const { func } = props;
    // const response = await search(cityBkp, units, 'pt_br');
    const response = mainS;
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
    // const formatDt = dt.split(' ');
    setDate(dt.split(' '));
  };

  useEffect(() => {
    if (update) {
      weather();
    }
  }, [units]);

  const saveInput = ({ target }) => {
    const { value } = target;
    setCity(value);
    // setCityBkp(value);
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
  // <div className="container mx-auto flex flex-norow flex-wrap justify-center ">
    <div className="bg-indigo-300 rounded-md container mx-auto flex flex-col justify-center gap-5 ">
      <h1 className="text-3xl font-bold flex justify-center">Weather</h1>
      <div className="flex justify-evenly bg-white rounded-lg p-6 shadow-xl">
        <input
          className="text-x font-light p-2 shadow-xl w-4/12 focus:outline-none capitalize"
          type="text"
          value={city}
          name="city"
          onChange={saveInput}
          onKeyUp={(event) => event.key === 'Enter' && weather()}
          placeholder="Digite o nome da cidade"
        />

        <button
          className="bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 rounded-md w-10"
          type="button"
          disabled={btnlook}
          onClick={() => {
            btnUnits();
          }}
        >
          {cf}
        </button>
      </div>

      {error ? <h5 className="flex justify-center">{error}</h5>
        : data && (
          <div className="flex flex-col gap-5">
            <p className="flex justify-center uppercase ">{`${dayName[new Date().getDay()]}, ${date}`}</p>
            <p className="flex justify-center text-2xl capitalize font-bold">
              {data.name}
            </p>
            <p className="flex justify-center capitalize">
              {data.weather[0].description}
            </p>
            <h2 className="flex justify-center text-5xl font-bold pb-2">
              {data.main.temp}
              {cf}
            </h2>
            <p className="flex justify-center">
              {data.weather[0].description}
            </p>
            <p className="flex justify-center">{`${dayName[new Date().getDay()]} ${date[0]} | ${date[1]}`}</p>
          </div>
        )}
    </div>
  // </div>
  );
}