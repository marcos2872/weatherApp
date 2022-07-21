/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import { airPollution } from '../services/getApiWeather';
import { airP } from '../tests/data';

export default function AirPollution(props) {
  const [deta, setDeta] = useState({});
  const [erro, setErro] = useState(true);
  const [open, setOpen] = useState(false);
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
        <div className="flex justify-center my-9">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-xlcursor-pointer"
          >
            <h6>Qualidade Do Ar</h6>
            {quality()}
          </button>
          {open
          && (
          <div className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
            <p>{`Monóxido de carbono: ${deta.components.co}μg/m3`}</p>
            <p>{`Monóxido de nitrogênio: ${deta.components.no}μg/m3`}</p>
            <p>{`Dióxido de nitrogênio: ${deta.components.no2}μg/m3`}</p>
            <p>{`Ozônio: ${deta.components.o3}μg/m3`}</p>
            <p>{`Dióxido de enxofre: ${deta.components.so2}μg/m3`}</p>
            <p>{`Partículas finas: ${deta.components.pm2_5}μg/m3`}</p>
            <p>{`Partículas grossas: ${deta.components.pm10}μg/m3`}</p>
            <p>{`Amônia: ${deta.components.nh3}μg/m3`}</p>

          </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="rounded-md container mx-auto flex flex-col justify-center gap-4">
      {info ? index() : null}
    </div>
  );
}
