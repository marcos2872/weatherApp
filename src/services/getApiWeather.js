const Key = process.env.REACT_APP_WEATHER_KEY;

export async function search(city, units, lang) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${Key}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function airPollution(lat, lon) {
  try {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${Key}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function call5day(lat, lon, units) {
  try {
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${Key}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

export const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export async function locationIq(lat, lng) {
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&lat=${lat}&lon=${lng}&format=json`;
  const response = await fetch(url);
  const cityName = await response.json();
  return cityName;
}
