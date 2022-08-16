/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { iconUrlFromCode, search } from '../services/getApiWeather';

export default function MainScreen(props) {
  const [cit, setCity] = useState('');
  const [cityBkp, setCityBkp] = useState('');
  const [data, setData] = useState(undefined);
  const [btnlook, setBtnlook] = useState(true);
  const [units, setUnits] = useState('metric');
  const [error, setError] = useState(undefined);
  const [cf, setCf] = useState('°C');
  const [update, setUpdate] = useState(false);
  const [date, setDate] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [coordintesError, setCoordintesError] = useState(false);

  const weather = async () => {
    setLoading(false);
    setCoordintesError(false);
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
    setDate(dt.split(' '));
  };

  useEffect(() => {
    if (update) {
      weather();
    }
  }, [units]);

  async function getCity(coordinates) {
    const lat = coordinates[0];
    const lng = coordinates[1];

    const response = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.1c2a01d0d1e02774355084100b798d11&lat=${lat}&lon=${lng}&format=json`);
    const cityName = await response.json();
    if (cityName.address.town) {
      setCityBkp(cityName.address.town);
      setUpdate(true);
      setBtnlook(false);
    } else {
      setLoading(false);
      setCoordintesError(true);
    }
  }
  function getCoordintes() {
    function success(pos) {
      const crd = pos.coords;
      const lat = crd.latitude.toString();
      const lng = crd.longitude.toString();
      const coordinates = [lat, lng];
      console.log(coordinates);
      getCity(coordinates);
    }

    navigator.geolocation.getCurrentPosition(success);
  }

  useEffect(() => {
    if (update) {
      weather();
    }
  }, [cityBkp]);

  useEffect(() => {
    getCoordintes();
  }, []);

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
    <div
      className="rounded-md container mx-auto flex flex-col align-center gap-5 "
    >
      <header className="flex justify-center">
        <h1 className="text-3xl font-bold flex justify-center text-white mt-5">Weather</h1>
        <button
          className=" text-white flex justify-center items-center relative top-full
          left-1/4 w-10 h-7 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 rounded-md "
          type="button"
          disabled={btnlook}
          onClick={() => {
            btnUnits();
          }}
        >
          {cf}
        </button>
      </header>
      <input
        className="text-x rounded-md font-light p-2 shadow-xl w-4/12 focus:outline-none capitalize m-auto mb-3 placeholder:lowercase"
        type="text"
        value={cit}
        name="city"
        onChange={saveInput}
        onKeyUp={(event) => event.key === 'Enter' && weather()}
        placeholder="Digite o nome da cidade"
      />
      <main>
        {loading && <h3>Buscando localização</h3> }
        {coordintesError && <h3>Não foi possivel achar sua localização</h3>}
        {error ? <h5 className="flex justify-center">{error}</h5>
          : data && (
          <div className="flex flex-col items-center gap-4">
            <p data-testid="day-name" className="flex justify-center capitalize text-white">{`${dayName[new Date().getDay()]} ${date[0]} | Hora Local: ${date[1]}`}</p>
            <p className="flex justify-center text-2xl capitalize text-white">
              {data.name}
            </p>
            <p className="flex justify-center capitalize text-cyan-200">
              {data.weather[0].description}
            </p>
            <img src={iconUrlFromCode(data.weather[0].icon)} alt="description-icon" className="w-20 flex m-auto" />
            <h2 className="flex justify-center text-5xl  pb-2 mb-5 text-white">
              {data.main.temp}
              {cf}
            </h2>
          </div>
          )}
      </main>
    </div>
  );
}
