/* eslint-disable react/prop-types */
import React from 'react';

export default function ScreenDetails(props) {
  const { info } = props;

  const details = () => {
    const { data, cf } = info;
    return (
      <div className="flex flex-row flex-wrap justify-center">
        {data !== '404'
          ? (
            <div>
              <p>
                Sensação termica:
                {` ${data.main.feels_like}${cf}`}
              </p>
              <p>
                Temp Max/Min:
                {` ${data.main.temp_max}°/${data.main.temp_max}°`}
              </p>
              <p>
                Umidade:
                {` ${data.main.humidity}%`}
              </p>
              <p>
                Vento:
                {` ${data.wind.speed}${cf === '°C' ? 'm/s' : 'mp/h'}`}
              </p>
              <p>
                Pressão:
                {` ${data.main.pressure}hPa`}
              </p>
              <p>
                Latitude/Longitude:
                {` ${data.coord.lat}/${data.coord.lon}`}
              </p>
              <p>
                Visibilidade:
                {` ${cf === '°C' ? data.visibility / 1000 : ((data.visibility / 1000) * 1.60934).toFixed(2)}${cf === '°C' ? 'km' : 'mi'}`}
              </p>
            </div>
          ) : null}

      </div>

    );
  };

  return (
    <div className="bg-purple-300 rounded-md container mx-auto flex flex-row flex-wrap justify-center gap-4 ">
      {info ? details() : null}
    </div>
  );
}
