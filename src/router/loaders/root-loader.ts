import axios from 'axios'
import { RandomUser } from '../../types/random-user/random-user.type'
import { getUsersList } from '../../lib/get-users-list'
import { defer } from 'react-router-dom'
import { validateResults } from '../../lib/search-params/validate-results'
import { validatePage } from '../../lib/search-params/validate-page'

export const rootLoader = async ({ request }: { request: Request }) => {
  const { searchParams } = new URL(request.url)
  const seed = searchParams.get('seed') || '001'
  const results = validateResults(searchParams.get('results'))
  const page = validatePage(searchParams.get('page'))
  const nat = searchParams.get('nat') || 'us,au,br,ch'
  const gender = searchParams.get('gender')
  const userList = axios
    .get<RandomUser>(
      `https://randomuser.me/api/?inc=id,picture,name,gender,location,phone,email,nat&nat=${nat}&page=${page}&results=${results}&seed=${seed}&gender=${
        gender || ''
      }`
    )
    .then(({ data }) => getUsersList(data.results))
  return defer({ userList })
}
