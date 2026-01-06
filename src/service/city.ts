import axios from 'axios'

const baseUrl = 'https://geodb-free-service.wirefreethought.com/v1/geo/cities'

export interface City {
  name: string
  country: string
  lat: number
  lon: number
}

const fetchByName = (cityName: string): Promise<City> => axios.get(baseUrl, {
    params: {
      namePrefix: cityName,
      limit: 10,
    },
})
    .then(response => response.data)

export default {
  fetchByName,
}