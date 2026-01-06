import { useEffect, useState, useMemo } from 'react'
import SearchInput from './components/SearchInput'
import DisplayView from './components/DisplayView'
// import countryService, { type Country } from './service/country'
import cityService, { type City } from './service/city'
import './index.css'
import { useDebounce } from './hooks/useDebounce'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  // const [countries, setCountries] = useState<Country[]>([])
  // const [currentCountry, setCurrentCountry] = useState<Country | null>(null)
  const debouncedSearchValue = useDebounce(searchValue, 400)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    // setCurrentCountry(null)
  }

  // useEffect(() => {
  //   // initail data
  //   countryService.getAll().then(data => {
  //     setCountries(data)
  //   })
  // }, [])

  // const filteredCountries = useMemo((): Country[] => {
  //   if (!searchValue) {
  //     return []
  //   }
  //   const normalizedValue = searchValue.toUpperCase()
  //   return countries.filter(({ name }) => name.common.toUpperCase().includes(normalizedValue))
  // }, [searchValue, countries])

  useEffect(() => {
    if (!debouncedSearchValue) return

    const fetchCities = async () => {
      try {
        const data = await cityService.fetchByName(debouncedSearchValue)
        console.log(data)
      } catch (error) {
        console.log('fetch cities error: ', error)
      }
    }

    fetchCities()

  }, [debouncedSearchValue])

  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      <div className="grid grid-rows-[3] gap-4">
        <div className="bg-lime-200">
          <SearchInput value={searchValue} onChange={handleSearch} />
        </div>
        {/* <div className="bg-pink-200">
          Today overview
          <DisplayView data={filteredCountries} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} />
        </div>
        <div className="bg-indigo-200">Weekly temprature</div> */}
      </div>
    </div>
  )
}

export default App
