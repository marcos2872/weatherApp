import { useState } from 'react';
import search from '../services/getApiWeather';


export default function Home() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(undefined);
  const [btnlook, setBtnlook] = useState(true)

  const saveInput = ({ target }) => {
    const { value } = target;
    setCity(value);
    setBtnlook(value.length < 3);
  };

  const btnBuscar = () => {
    weather();
  };
  const keyPress = (event) => {
    if (event.key === 'Enter') return weather();
  }

 const weather = async () => {
    const response = await search(city, 'metric', 'pt_br');
    console.log(response);
    setData(response);
    setCity('');
    setBtnlook(true);
  };

  return(
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
  )
};
