/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  UilUserExclamation,
  UilTemperatureHalf,
  UilWind,
  UilRaindropsAlt,
  UilCompressLines,
  UilEye,
} from '@iconscout/react-unicons';
import {
  call5day,
  iconUrlFromCode,
} from '../services/getApiWeather';
// import { forecast } from '../tests/data';

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

  const units = (cf) => (cf === '°C' ? 'metric' : 'imperial');

  const getApi = async () => {
    const { data, cf } = info;
    if (data !== '404') {
      const response = await call5day(data.coord.lat, data.coord.lon, units(cf));
      // const response = forecast;
      const deta = response.list.filter((item) => item.dt_txt.includes('12:00:00'));
      const days = deta.map(({ main }) => main.temp);
      setUnit(cf);
      setDay(days);
      setAlldays(deta);
      setInfoDetails(deta[index]);
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

  const details = () => (
    <div className="flex flex-col items-center text-base mt-5">
      <p className="flex flex-row mb-3 items-end gap-3 text-white">
        <UilUserExclamation size={25} className="text-white" />
        Sensação termica:
        {` ${infoDetails.main.feels_like}${unit}`}
      </p>
      <p className="flex flex-row mb-3 items-end gap-3 text-white">
        <UilTemperatureHalf size={25} className="text-white" />
        Temp Max/Min:
        {` ${infoDetails.main.temp_max}°/${infoDetails.main.temp_max}°`}
      </p>
      <p className="flex flex-row mb-3 items-end gap-3 text-white">
        <UilRaindropsAlt size={25} className="text-white" />
        Umidade:
        {` ${infoDetails.main.humidity}%`}
      </p>
      <p className="flex flex-row mb-3 items-end gap-3 text-white">
        <UilWind size={25} className="text-white" />
        Vento:
        {` ${infoDetails.wind.speed}${unit === '°C' ? 'm/s' : 'mp/h'}`}
      </p>
      <p className="flex flex-row mb-3 items-end gap-3 text-white">
        <UilCompressLines size={25} className="text-white" />
        Pressão:
        {` ${infoDetails.main.pressure}hPa`}
      </p>
      <p className="flex flex-row mb-5 items-center gap-3 text-white">
        <UilEye size={25} className="text-white" />
        Visibilidade:
        {` ${unit === '°C' ? infoDetails.visibility / 1000 : ((infoDetails.visibility / 1000) * 1.60934).toFixed(2)}${unit === '°C' ? 'km' : 'mi'}`}
      </p>
    </div>
  );

  const dayWeek = (ele, param) => (
    <div key={param}>
      <button
        type="button"
        onClick={() => openDetails(param)}
        className={`uppercase ${param === index && open ? 'bg-black/10 rounded-lg' : ''}`}
      >
        <p>{dayName[new Date().getDay() + param + 1]}</p>
        <img src={iconUrlFromCode(alldays[param].weather[0].icon)} alt="weather-icon" />
        <h3>{`${ele}${unit}`}</h3>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col gap-5 text-white mb-5">
      <div className="flex justify-center gap-12 w-full">
        {!erro ? day.map((ele, ind) => dayWeek(ele, ind)) : null}
      </div>
      {open && details()}
    </div>
  );
}
