const Key = 'b40d105652572479bed6fab2551755d2';

export default async function search(city, units) {
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=pt_br&appid=${Key}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${Key}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
