/* eslint-disable react/prop-types */
import React from 'react';
import { } from '@iconscout/react-unicons';
import latLong from '../icons/lat-long.png';
import wind from '../icons/vento.png';
import visibility from '../icons/visibilidade.png';
import pressure from '../icons/pressão-atmosférica.png';
import feelsLike from '../icons/termometro.png';
import humidity from '../icons/umidade.png';
import maxmin from '../icons/clima.png';

export default function ScreenDetails(props) {
  const { info } = props;

  const details = () => {
    const { data, cf } = info;
    return (
      <div>
        {data !== '404'
          ? (
            <div className="flex justify-evenly text-lg mb-5">
              <section>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <img src={feelsLike} alt="icone-de-latitude-longitude" width="30px" />
                  Sensação termica:
                  {` ${data.main.feels_like}${cf}`}
                </p>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <img src={maxmin} alt="icone-de-latitude-longitude" width="30px" />
                  Temp Max/Min:
                  {` ${data.main.temp_max}°/${data.main.temp_max}°`}
                </p>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <img src={humidity} alt="icone-de-latitude-longitude" width="30px" />
                  Umidade:
                  {` ${data.main.humidity}%`}
                </p>
                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <img src={wind} alt="icone-de-latitude-longitude" width="28px" />
                  Vento:
                  {` ${data.wind.speed}${cf === '°C' ? 'm/s' : 'mp/h'}`}
                </p>
              </section>
              <section>
                <p className="flex flex-row mb-3 items-end gap-2 text-white">
                  <img src={pressure} alt="icone-de-latitude-longitude" width="40px" />
                  Pressão:
                  {` ${data.main.pressure}hPa`}
                </p>

                <p className="flex flex-row mb-3 items-end gap-3 text-white">
                  <img src={latLong} alt="icone-de-latitude-longitude" width="30px" />
                  Latitude/Longitude:
                  {` ${data.coord.lat}/${data.coord.lon}`}
                </p>

                <p className="flex flex-row mb-5 items-center gap-2 text-white">
                  <img src={visibility} alt="icone-de-latitude-longitude" width="45px" />
                  Visibilidade:
                  {` ${cf === '°C' ? data.visibility / 1000 : ((data.visibility / 1000) * 1.60934).toFixed(2)}${cf === '°C' ? 'km' : 'mi'}`}
                </p>
              </section>
            </div>
          ) : null}

      </div>

    );
  };

  return (
    <div className="">
      {info ? details() : null}
    </div>
  );
}
