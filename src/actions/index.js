'use strict';

import axios from 'axios';

const API_KEY = require('../../env.js');

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Store the action type in a var to export it so it's consistent both here and where it's used elsewhere.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    // Action FETCH_WEATHER.
    type: FETCH_WEATHER,
    //ReduxPromise sees payload is a promise, so it stops the action entirely. When the request finishes, it dispatches a new action with a payload of the resolved request. It's a middleware that handles this payload for us, and sends this to the reducer for us.
    // This prevents our reducer from having a Promise to deal with instead.
    payload: request
  };
}
