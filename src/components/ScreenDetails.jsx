/* eslint-disable react/prop-types */
import React from 'react';

export default function ScreenDetails(props) {
  const { info } = props;

  const details = () => {
    const { data, cf } = info;
    return (
      <div>
        {data !== '404'
          ? (
            <div className="bg-purple-600">
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
                {` ${data.visibility}m`}
              </p>
            </div>
          ) : null}

      </div>

    );
  };

  return (
    <div>
      {info ? details() : null}
    </div>
  );
}
