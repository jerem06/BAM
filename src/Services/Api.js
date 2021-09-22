
const apiKey = '5f5672185bdca3ad4246c51ff9fd45bc' ; 

export function getWeather(city){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
    
}