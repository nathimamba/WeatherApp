const images = {
  Clear: require('../assets/clear.png'),
  Hail: require('../assets/hail.png'),
  'Heavy Cloud': require('../assets/heavy-cloud.png'),
  'Light Cloud': require('../assets/light-cloud.png'),
  'Heavy Rain': require('../assets/heavy-rain.png'),
  'Light Rain': require('../assets/light-rain.png'),
  Showers: require('../assets/showers.png'),
  Sleet: require('../assets/sleet.png'),
  Snow: require('../assets/snow.png'),
  Thunder: require('../assets/thunder.png'),
};

export default function getImageForWeather(weather) {
  if (weather === 'clear sky') {
    return images.Clear;
  } else if (weather === 'haze') {
    return images.Hail;
  } else if (weather === 'overcast clouds') {
    return images['Heavy Cloud'];
  } else if (weather === 'few clouds') {
    return images['Light Cloud'];
  } else if (weather === 'heavy intensity rain') {
    return images['Heavy Rain'];
  } else if (weather === 'light rain') {
    return images['Light Rain'];
  } else if (weather === 'shower rain') {
    return images.Showers;
  } else if (weather === 'sleet') {
    return images.Sleet;
  } else if (weather === 'snow') {
    return images.Snow;
  } else if (weather === 'thunderstorm') {
    return images.Thunder;
  }

  return require('../assets/default.jpg');
}
