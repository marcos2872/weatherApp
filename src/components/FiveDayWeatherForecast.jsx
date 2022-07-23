/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import { call5day } from '../services/getApiWeather';
import { forecast } from '../tests/data';

export default function FiveDayWeatherForecast(props) {
  const [day, setDay] = useState();
  const [alldays, setAlldays] = useState();
  const [unit, setUnit] = useState();
  const [erro, setErro] = useState(true);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(undefined);
  const [infoDetails, setInfoDetails] = useState({ data: '404', cf: '°C' });
  const { info } = props;
  const dayName = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  // const units = (cf) => (cf === '°C' ? 'metric' : 'imperial');

  const getApi = async () => {
    const { data, cf } = info;
    if (data !== '404') {
      // const response = await call5day(data.coord.lat, data.coord.lon, units(cf));
      const response = forecast;
      const deta = response.list.filter((item) => item.dt_txt.includes('12:00:00'));
      const days = deta.map(({ main }) => main.temp);
      setUnit(cf);
      setDay(days);
      setAlldays(deta);
      return setErro(false);
    }
    return setErro(true);
  };

  const openDetails = (param) => {
    if (index === param) {
      setOpen(!open);
    }
    setIndex(param);
  };

  useEffect(() => {
    if (info) {
      getApi();
    }
    if (index >= 0) {
      setInfoDetails(alldays[index]);

      setOpen(true);
    }
  }, [info, index]);

  const dayWeek = (ele, param) => (
    <div key={param}>
      <button
        type="button"
        onClick={() => openDetails(param)}
        className="uppercase"
      >
        <p>{dayName[new Date(1).getDay() + param]}</p>
        <h3>{`${ele}${unit}`}</h3>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-evenly">
        {!erro ? day.map((ele, ind) => dayWeek(ele, ind)) : null}
      </div>
      {open && (
        <div className="flex flex-col">
          <div>
            <p>
              Sensação termica:
              {` ${infoDetails.main.feels_like}${unit}`}
            </p>
            <p>
              Temp Max/Min:
              {` ${infoDetails.main.temp_max}°/${infoDetails.main.temp_max}°`}
            </p>
            <p>
              Umidade:
              {` ${infoDetails.main.humidity}%`}
            </p>
            <p>
              Vento:
              {` ${infoDetails.wind.speed}${unit === '°C' ? 'm/s' : 'mp/h'}`}
            </p>
            <p>
              Pressão:
              {` ${infoDetails.main.pressure}hPa`}
            </p>
            <p>
              Visibilidade:
              {` ${unit === '°C' ? infoDetails.visibility / 1000 : ((infoDetails.visibility / 1000) * 1.60934).toFixed(2)}${unit === '°C' ? 'km' : 'mi'}`}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
