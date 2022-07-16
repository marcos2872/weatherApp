import { useEffect, useState } from 'react';
import search from '../services/getApiWeather';

export default function Home() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(undefined);
  const [btnlook, setBtnlook] = useState(true);

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
    const response = await search(city, 'metric', 'pt_br');
    console.log(response);
    setData(response);
    setCity('');
    setBtnlook(true);
  };

  const keyPress = (event) => event.key === 'Enter' && weather();

  const btnBuscar = () => {
    weather();
  };

  return (
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
      {data
         && (
         <>
           <p />
           {data.name}
           <p>
             {data.main.temp}
             °C
           </p>
         </>
         )}
    </div>
  );
}
