import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

export interface Country {
  name: {
    common: string
    official: string
  }
  capital: string[]
  area: number
  languages: { [key: string]: string }
  flags: {
    png: string
    alt: string
    svg: string
  }
  capitalInfo: {
    latlng: number[]
  }
}

const getAll = (): Promise<Country[]> => axios.get(`${baseUrl}/all`).then(response => response.data)

const fetchByName = (countryName: string): Promise<Country> => axios.get(`${baseUrl}/name/${countryName}`).then(response => response.data)

export default {
  getAll,
  fetchByName,
}
