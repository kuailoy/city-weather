import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="search-country">Find Countries</Label>
      <Input id="search-country" type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default SearchInput
