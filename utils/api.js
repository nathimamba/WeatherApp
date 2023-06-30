export const fetchLocationId = async (city) => {
  const apiKey = 'f6c534e784a6c02e7cc0770800989d4d';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  
  return data.id;
};

export const fetchWeather = async (locationId) => {
  const apiKey = 'f6c534e784a6c02e7cc0770800989d4d';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${locationId}&appid=${apiKey}`
  );
  const data = await response.json(); 

  const { name: location, weather, main } = data;
 
  const { description} = weather[0];
  const { temp } = main;
 
  return {
    location,
    weather: description,
    temperature: Math.round(temp- 273.15),
  };
};
