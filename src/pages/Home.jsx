/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import AirPollution from '../components/AirPollution';
import FiveDayWeatherForecast from '../components/FiveDayWeatherForecast';
import Footer from '../components/Footer';
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
    <main className="bg-gradient-to-br from-cyan-700 to-blue-700">
      <div className="flex flex-col items-center gap-5 w-full min-h-screen bg-gradient-to-br from-cyan-700 to-blue-700">
        <div className="flex gap-5 w-11/12 bg-black/[0.1] rounded-lg mt-5 shadow-xl">
          <MainScreen func={funcdata} />
        </div>
        <div className="flex gap-5 w-11/12">
          <div className="flex flex-col gap-5 w-11/12 h-fit bg-black/[0.1] rounded-lg shadow-xl">
            <ScreenDetails info={data} />
            <FiveDayWeatherForecast info={data} />
          </div>
          <div className="flex flex-col gap-5 w-3/12 bg-black/[0.1] h-fit rounded-lg shadow-xl">
            <AirPollution info={data} />
          </div>
        </div>
        <footer className="my-5 flex">
          <Footer />
        </footer>
      </div>
    </main>
  );
}
