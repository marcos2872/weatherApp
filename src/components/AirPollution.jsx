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
        <div className="flex flex-col gap-5 justify-center my-9">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-xl cursor-pointer text-white"
          >
            <h6 className="uppercase text-white">Qualidade Do Ar</h6>
            {quality()}
          </button>
          {open
          && (
            <div className=" flex-col rounded-md text-white w-4/5">
              <p>{`CO: ${deta.components.co}μg/m3`}</p>
              <p>{`NO: ${deta.components.no}μg/m3`}</p>
              <p>{`NO₂: ${deta.components.no2}μg/m3`}</p>
              <p>{`O₃: ${deta.components.o3}μg/m3`}</p>
              <p>{`SO₂: ${deta.components.so2}μg/m3`}</p>
              <p>{`NH₃: ${deta.components.nh3}μg/m3`}</p>
              <p>{`Pf: ${deta.components.pm2_5}μg/m3`}</p>
              <p>{`Pg: ${deta.components.pm10}μg/m3`}</p>

            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className=" container mx-auto flex justify-center gap-4">
      {info ? index() : null}
    </div>
  );
}
