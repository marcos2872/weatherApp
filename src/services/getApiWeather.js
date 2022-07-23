// const Key = 'b40d105652572479bed6fab2551755d2';
const Key = '556dde43cb373c1d662046ef78b4e7e0';

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
