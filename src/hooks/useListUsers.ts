import axios from 'axios'
import { useEffect, useState } from 'react'
import { RandomUser } from '../types/random-user/random-user.type'
import { getUsersList } from '../lib/get-users-list'
import { UsersList } from '../types/random-user/users-list'

export const useListUsers = () => {
  const [usersList, setUsersList] = useState<UsersList>([])

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<RandomUser>(
        'https://randomuser.me/api/?inc=id,picture,name,gender,location,phone,email,nat&page=1&results=10&seed=upch',
        {
          signal: controller.signal,
        }
      )
      .then(({ data }) => {
        const usersListFormatted = getUsersList(data.results)
        setUsersList(usersListFormatted)
      })

    return () => {
      controller.abort()
    }
  }, [])

  return { usersList }
}
