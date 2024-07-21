import { ChangeEvent, InputHTMLAttributes, useId } from 'react'
import { useSearchParams } from 'react-router-dom'

export const SearchInput = ({ id, placeholder, ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  const inputId = useId()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentParams = Object.fromEntries(searchParams)
    setSearchParams({
      ...currentParams,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <input
      type='search'
      name='searchUser'
      id={id || inputId}
      placeholder={placeholder}
      onChange={handleChange}
      {...rest}
    />
  )
}
