import { useEffect, useState, useMemo } from 'react'
import SearchInput from './components/SearchInput'
import DisplayView from './components/DisplayView'
import countryService, { type Country } from './service/country'
import './index.css'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState<Country[]>([])
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setCurrentCountry(null)
  }

  useEffect(() => {
    // initail data
    countryService.getAll().then(data => {
      setCountries(data)
    })
  }, [])

  const filteredCountries = useMemo((): Country[] => {
    if (!searchValue) {
      return []
    }
    const normalizedValue = searchValue.toUpperCase()
    return countries.filter(({ name }) => name.common.toUpperCase().includes(normalizedValue))
  }, [searchValue, countries])

  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      <div className="grid grid-rows-[3] gap-4">
        <div className="bg-lime-200">
          <SearchInput value={searchValue} onChange={handleSearch} />
        </div>
        <div className="bg-pink-200">
          Today overview
          <DisplayView data={filteredCountries} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} />
        </div>
        <div className="bg-indigo-200">Weekly temprature</div>
      </div>
    </div>
  )
}

export default App
