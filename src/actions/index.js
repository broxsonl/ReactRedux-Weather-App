'use strict';

const API_KEY = require('../../env.js');

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Story tyhe action type in a var to export it so it's consistent both here and where it's used elsewhere.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  return (
    // Action FETCH_WEATHER.
    type: FETCH_WEATHER
  );
}
