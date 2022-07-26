/* eslint-disable react/prop-types */
import React from 'react';
import {
  UilUserExclamation,
  UilTemperatureHalf,
  UilWind,
  UilRaindropsAlt,
  UilCompressLines,
  UilGlobe,
  UilEye,
} from '@iconscout/react-unicons';

export default function ScreenDetails(props) {
  const { info } = props;

  const details = () => {
    const { data, cf } = info;
    return (
      <div className="">
        {data !== '404'
          ? (
            <div className="flex justify-evenly gap-5 text-lg mt-6 mb-4">
              <section>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <UilUserExclamation size={25} className="text-white" />
                  Sensação termica:
                  {` ${data.main.feels_like}${cf}`}
                </p>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <UilTemperatureHalf size={25} className="text-white" />
                  Temp Max/Min:
                  {` ${data.main.temp_max}°/${data.main.temp_max}°`}
                </p>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <UilRaindropsAlt size={25} className="text-white" />
                  Umidade:
                  {` ${data.main.humidity}%`}
                </p>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <UilWind size={25} className="text-white" />
                  Vento:
                  {` ${data.wind.speed}${cf === '°C' ? 'm/s' : 'mp/h'}`}
                </p>
              </section>
              <section>
                <p className="flex flex-row mb-3 items-end gap-2 text-white">
                  <UilCompressLines size={25} className="text-white" />
                  Pressão:
                  {` ${data.main.pressure}hPa`}
                </p>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <UilGlobe size={25} className="text-white" />
                  Latitude/Longitude:
                  {` ${data.coord.lat}/${data.coord.lon}`}
                </p>

                <p className="flex flex-row mb-5 items-center gap-2 text-white">
                  <UilEye size={25} className="text-white" />
                  Visibilidade:
                  {` ${cf === '°C' ? data.visibility / 1000 : ((data.visibility / 1000) * 1.60934).toFixed(2)}${cf === '°C' ? 'km' : 'mi'}`}
                </p>
              </section>
            </div>
          ) : null}
          <div className="w-3/5 m-auto">
            <hr className="mb-4 border-t-neutral-200" />
          </div>
      </div>

    );
  };

  return (
    <div className="">
      {info ? details() : null}
    </div>
  );
}
