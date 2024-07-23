import { ChangeEvent } from 'react'
import { PageSizeEnum } from '../types/enums/page-size.enum'
import { useSearchParams } from 'react-router-dom'

export const ResultsSizeSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    searchParams.set(target.name, target.value)
    return setSearchParams(searchParams)
  }
  return (
    <label>
      <span>#Registros: </span>
      <select
        name='results'
        id='ResultsSizeSelect'
        onChange={handleChange}
        className='bg-transparent rounded-pill text-reset border-1 px-1'
        defaultValue={searchParams.get('results') || 10}
      >
        {Object.values(PageSizeEnum)
          .filter((item) => Number(item))
          .map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            )
          })}
      </select>
    </label>
  )
}
