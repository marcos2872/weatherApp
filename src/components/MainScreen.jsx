import React, { useEffect, useState } from 'react';
import search from '../services/getApiWeather';

export default function MainScreen() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(undefined);
  const [btnlook, setBtnlook] = useState(true);
  const [units, setUnits] = useState('metric');
  const [error, setError] = useState(undefined);

  useEffect(() => {
    // async function api() {
    //   // & appid=b40d105652572479bed6fab2551755d2
    //   const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Timoteo&limit=1&appid=b40d105652572479bed6fab2551755d2'
    //   const renponse = await fetch(url);
    //   const data = await renponse.json();
    //   console.log(data);
    // }
    // api();
  }, []);

  const saveInput = ({ target }) => {
    const { value } = target;
    setCity(value);
    setBtnlook(value.length < 3);
  };

  const weather = async () => {
    const response = await search(city, units, 'pt_br');
    if (response.cod === '404') {
      setError(response.message);
      setCity('');
      setBtnlook(true);
    } else {
      setData(response);
      setCity('');
      setBtnlook(true);
    }
  };

  const keyPress = (event) => event.key === 'Enter' && weather();

  const btnBuscar = () => {
    weather();
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Weather</h1>
        <input
          type="text"
          value={city}
          name="city"
          onChange={saveInput}
          onKeyUp={keyPress}
          placeholder="Digite o nome da cidade"
        />
        <button
          id="pesquisa"
          type="button"
          placeholder="Buscar"
          disabled={btnlook}
          onClick={btnBuscar}
        >
          Buscar
        </button>
        <label htmlFor="temp">
          °C
          <input
            type="radio"
            value="metric"
            name="temp"
            defaultChecked
            onChange={() => setUnits('metric')}
          />
          °F
          <input
            type="radio"
            value="imperial"
            name="temp"
            onChange={() => setUnits('imperial')}
          />
        </label>
        {error ? <h5>{error}</h5>
          : data && (
            <>
              <p />
              {data.name}
              <h2>
                {data.main.temp}
                °C
              </h2>
              <p>
                {data.weather[0].description}
              </p>
              <p>
                Max:
                {data.main.temp_max}
                °C
                /Mín:
                {data.main.temp_min}
                °C
              </p>
            </>
          )}
      </div>
    </div>
  );
}
