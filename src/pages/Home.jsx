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
    <div className="flex gap-5  border-2 border-black-500 w-full h-full bg-black">
      <div className="flex flex-col justify-center gap-5 border-2 border-red-500 w-3/4 bg-gradient-to-br from-cyan-700 to-blue-700 rounded-lg">
        <MainScreen func={funcdata} />
        <ScreenDetails info={data} />
        <FiveDayWeatherForecast info={data} />
      </div>
      <div className="flex flex-col gap-5 border-2 border-gray-500 w-1/4 bg-gradient-to-br to-cyan-700 from-blue-700 rounded-lg">
        <AirPollution info={data} />

      </div>

    </div>
  );
}
