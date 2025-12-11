import { useEffect, useState } from 'react'
import WeatherDisplay from './WeatherDisplay'
import weatherService, { type WeatherData } from '../service/weather'
import type { Country } from '../service/country'

interface DetailViewProps {
  country: Country
}

const DetailView = ({ country: { name, capital, area, languages, flags, capitalInfo } }: DetailViewProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    weatherService.getByLocation(capitalInfo.latlng).then((weatherData) => {
      setWeather(weatherData)
    })
  }, [])

  return (
    <div>
      <h1>{name.common}</h1>
      <span>Capital {capital[0]}</span>
      <br />
      <span>Area {area}</span>
      <h2>Languages</h2>
      <ul>
        {Object.entries(languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <p>
        <img src={flags.png} alt={flags.alt} />
      </p>
      {weather && <WeatherDisplay weather={weather} capitalCity={capital[0]} />}
    </div>
  )
}

export default DetailView
