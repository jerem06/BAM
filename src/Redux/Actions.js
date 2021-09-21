export const addedWeather = weatherIndex => (
  {
    type: 'SELECT_WEATHER',
    payload: weatherIndex,
  }
);
