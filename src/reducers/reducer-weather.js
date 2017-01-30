import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  if (action.type === FETCH_WEATHER) {
    // Only taking back the data property on the payload return
    // that we get. Don't need the rest.
    // We are adding the data for each city called to the
    // existing state array. This adds to the existing state,
    // rather than mutating it.
    // ES6 way of creating new array below. This also adds a new
    // entry to the top of the array.
    return [action.payload.data, ...state];
  }

  return state;
}
