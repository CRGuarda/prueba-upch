import { ChangeEvent, InputHTMLAttributes, useEffect, useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useUsersStore } from './store/useUsersStore'

export const SearchInput = ({ id, placeholder, ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  const inputId = useId()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchUser = useUsersStore((state) => state.searchUser)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.value) {
      searchParams.delete(target.name)
      return setSearchParams(searchParams)
    }

    searchParams.set(target.name, target.value)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    searchUser(searchParams.get('searchUser'))
  }, [searchParams, searchUser])

  return (
    <input
      type='search'
      name='searchUser'
      defaultValue={searchParams.get('searchUser')?.toString()}
      id={id || inputId}
      placeholder={placeholder}
      onChange={handleChange}
      {...rest}
    />
  )
}
