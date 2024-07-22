import axios from 'axios'
import { useEffect, useState } from 'react'
import { RandomUser } from '../types/random-user/random-user.type'
import { getUsersList } from '../lib/get-users-list'
import { useInitialSearchParams } from './useInitialSearchParams'
import { useUsersStore } from '../components/store/useUsersStore'

export const useListUsers = () => {
  const { page, nat, results, seed, gender } = useInitialSearchParams()
  const usersList = useUsersStore((state) => state.usersList)
  const setUsersList = useUsersStore((state) => state.setUsersList)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    axios
      .get<RandomUser>(
        `https://randomuser.me/api/?inc=id,picture,name,gender,location,phone,email,nat&nat=${nat}&page=${page}&results=${results}&seed=${seed}&gender=${
          gender || ''
        }`,
        {
          signal: controller.signal,
        }
      )
      .then(({ data }) => {
        const usersListFormatted = getUsersList(data.results)
        setUsersList(usersListFormatted)
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [page, nat, results, seed, gender, setUsersList])

  return { usersList, isLoading }
}
