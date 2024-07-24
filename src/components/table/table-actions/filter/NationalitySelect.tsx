import { useSearchParams } from 'react-router-dom'
import Select, { MultiValue } from 'react-select'

const selectName = 'nat'

const options = [
  { value: 'us', label: 'US' },
  { value: 'au', label: 'AU' },
  { value: 'br', label: 'BR' },
  { value: 'ch', label: 'CH' },
]

export const NationalitySelect = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchValues = searchParams.getAll(selectName)
  // console.log(options.filter(({ value }) => searchValues.includes(value)))
  const defaultValue = searchValues.length
    ? options.filter(({ value }) => searchValues[0].split(',').includes(value.toLowerCase()))
    : []

  const handleChange = (
    inputValues: MultiValue<{
      value: string
      label: string
    }>
  ) => {
    const valuesString = inputValues.map(({ value }) => value).join(',')
    if (!valuesString) {
      searchParams.delete(selectName)
      return setSearchParams(searchParams)
    }

    searchParams.set(selectName, valuesString)
    setSearchParams(searchParams)
  }
  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
      name={selectName}
      defaultValue={defaultValue}
      placeholder={'NACIONALIDAD'}
    />
  )
}
