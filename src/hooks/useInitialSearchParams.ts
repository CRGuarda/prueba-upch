import { useSearchParams } from 'react-router-dom'
import { validateResults } from '../utils/search-params/validate-results'
import { validatePage } from '../utils/search-params/validate-page'

export const useInitialSearchParams = () => {
  const [searchParams] = useSearchParams()

  return {
    seed: searchParams.get('seed') || '001',
    results: validateResults(searchParams.get('results')),
    page: validatePage(searchParams.get('page')),
    nat: searchParams.get('nat') || 'us,au,br,ch',
    gender: searchParams.get('gender'),
  }
}
