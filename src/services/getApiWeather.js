const Key = 'b40d105652572479bed6fab2551755d2';

export default async function search(city, units, lang) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${Key}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
