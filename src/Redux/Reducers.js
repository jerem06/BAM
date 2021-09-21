const INITIAL_STATE = {
  featured: [],
  all_weather: [
    'London',
    'Paris',
    'Rome',
    'Grasse',
    'Nice',
    'Bilbao',
    'Carros',
    'Carcassonne',
    'Carpentras',
    'Guiglia',
    'Guagnano',
    'Grottolella',
    'Cimancak',
    'Benger',
    'Pasirgembong',
    'Rancasadang',
    'Cinyurup',
    'Leuwibuaya',
    'Karamat',
    'Cicadas',
    'Cikaramat',

  ],
};
 
const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_WEATHER':
      
      
      const { featured,  all_weather,} = state;
 
      //remove a subject from the all_subjects array
       
      const addedWeather = all_weather.splice(action.payload, 1);
 
      // put subject in current array
      featured.push(addedWeather);
 
      // update the redux state to reflect the change
      const newState = { featured, all_weather };
       
      //return new state
      return newState;
    
    default:
      return state
  }
};

export default weatherReducer;
