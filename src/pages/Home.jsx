/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import AirPollution from '../components/AirPollution';
import FiveDayWeatherForecast from '../components/FiveDayWeatherForecast';
import MainScreen from '../components/MainScreen';
import ScreenDetails from '../components/ScreenDetails';

export default function Home() {
  const [data, setData] = useState(undefined);
  const funcdata = (resp, cf) => {
    setData({
      data: resp,
      cf,
    });
  };
  return (
    <div className=" rounded-md container mx-auto flex flex-col justify-center gap-5 bg-gradient-to-br from-cyan-700 to-blue-700">
      <MainScreen func={funcdata} />
      <ScreenDetails info={data} />
      <AirPollution info={data} />
      <FiveDayWeatherForecast info={data} />
    </div>
  );
}
