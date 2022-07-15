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

 const weather = async () => {
    const response = await search(city, 'metric');
    setData(response);
    setCity('');
    setBtnlook(true)
  };

  return(
    <div>
         <input
           type="text"
           value={city}
           name="city"
           onChange={saveInput}
           placeholder="Digite o nome da cidade"
         />
         <input
           id="pesquisa"
           type="button"
           placeholder="Buscar"
           disabled={btnlook}
           onClick={btnBuscar}
         />
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
}
