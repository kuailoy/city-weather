import axios from 'axios'

const apiKey = import.meta.env.VITE_WEATHER_KEY
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`

export interface WeatherResponse {
  main: {
    temp: number
  }
  wind: {
    speed: number
  }
  weather: Array<{ icon: string }>
}

export interface WeatherData {
  temperature: number
  windSpeed: number
  icon?: string
}

const getByLocation = async (latlng: number[]): Promise<WeatherData> => {
  const [lat, lon] = latlng
  const response = await axios.get<WeatherResponse>(baseUrl, {
    params: {
      appid: apiKey,
      lat,
      lon,
      units: 'metric',
    },
  })

  const { main, wind, weather } = response.data
  return {
    temperature: main.temp,
    windSpeed: wind.speed,
    icon: weather?.[0].icon,
  }
}

export default {
  getByLocation,
}
