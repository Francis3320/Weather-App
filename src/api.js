export const geoApiOptions = {
    
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5158cfac50mshf8054018f71711cp1ab46ajsndaa6a7423f9b",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  navigator.geolocation.getCurrentPosition(success, error);

  export default function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
}

function error() {
    console.error('Error getting location');
  }
  
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "e8eb5def14b4b9c9503ee225c6703282"; 

