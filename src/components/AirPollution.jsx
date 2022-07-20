/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import { airPollution } from '../services/getApiWeather';
import { airP } from '../tests/data';

export default function AirPollution(props) {
  const [deta, setDeta] = useState({});
  const [erro, setErro] = useState(true);
  const { info } = props;

  const getApi = async () => {
    const { data } = info;
    if (data !== '404') {
      // const loc = await airPollution(data.coord.lat, data.coord.lon);
      setErro(false);
      return setDeta(airP);
      // return setDeta(loc.list[0]);
    }
    setErro(true);
  };

  useEffect(() => {
    if (info) {
      getApi();
    }
  }, [info]);

  const quality = () => {
    const num = deta.main.aqi;
    if (num === 1) return 'Muito Boa 😃';
    if (num === 2) return 'Boa 🙂';
    if (num === 3) return 'Moderada 😞';
    if (num === 4) return 'Ruim 😫';
    if (num === 5) return 'Muito Ruim 😭';
  };

  const index = () => {
    if (!erro) {
      return (
        <>
          <h6>Qualidade Do Ar</h6>
          <h3>
            {quality()}
          </h3>
          <div className="dark:md:hover:bg-fuchsia-600 drop-shadow-2xl">
            <p>{`Monóxido de carbono: ${deta.components.co}μg/m3`}</p>
            <p>{`Monóxido de nitrogênio: ${deta.components.no}μg/m3`}</p>
            <p>{`Dióxido de nitrogênio: ${deta.components.no2}μg/m3`}</p>
            <p>{`Ozônio: ${deta.components.o3}μg/m3`}</p>
            <p>{`Dióxido de enxofre: ${deta.components.so2}μg/m3`}</p>
            <p>{`Partículas finas: ${deta.components.pm2_5}μg/m3`}</p>
            <p>{`Partículas grossas: ${deta.components.pm10}μg/m3`}</p>
            <p>{`Amônia: ${deta.components.nh3}μg/m3`}</p>

          </div>
        </>
      );
    }
  };

  return (
    <div>
      {info ? index() : null}
    </div>
  );
}
