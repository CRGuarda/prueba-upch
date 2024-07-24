import { useSearchParams } from 'react-router-dom'
import Select, { SingleValue } from 'react-select'
const selectName = 'gender'
const options = [
  { value: 'female', label: 'FEMALE' },
  { value: 'male', label: 'MALE' },
]

export const GenderSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultValue = options.find(({ value }) => value === searchParams.get(selectName))

  const handleChange = (
    inputValue: SingleValue<{
      value: string
      label: string
    }>
  ) => {
    if (!inputValue) {
      searchParams.delete(selectName)
      return setSearchParams(searchParams)
    }
    const valuesString = inputValue.value

    searchParams.set(selectName, valuesString)
    setSearchParams(searchParams)
  }
  return (
    <Select
      options={options}
      onChange={handleChange}
      isClearable
      name={selectName}
      defaultValue={defaultValue}
      placeholder={'GÉNERO'}
    />
  )
}
