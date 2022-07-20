/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import { call5day } from '../services/getApiWeather';
import { forecast } from '../tests/data';

export default function FiveDayWeatherForecast(props) {
  const [day, setDay] = useState();
  // const [alldays, setAlldays] = useState();
  const [unit, setUnit] = useState();
  const [erro, setErro] = useState(true);
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
      return setErro(false);
      // return setAlldays(deta);
    }
    return setErro(true);
  };

  useEffect(() => {
    if (info) {
      getApi();
    }
  }, [info]);

  const dayWeek = (ele, index) => (
    <div key={index}>
      <p>{dayName[new Date(1).getDay() + index]}</p>
      <h3>{`${ele}${unit}`}</h3>
    </div>
  );

  return (
    <div>
      {!erro ? day.map((ele, index) => dayWeek(ele, index)) : null}
    </div>
  );
}
