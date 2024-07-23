import { useSearchParams } from 'react-router-dom'
import { validatePage } from '../utils/search-params/validate-page'

export const usePagination = () => {
  const pageKey = 'page'
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = validatePage(searchParams.get(pageKey))
  const handlePrev = () => {
    searchParams.set(pageKey, (currentPage - 1).toString())
    return setSearchParams(searchParams)
  }

  const handleNext = () => {
    searchParams.set(pageKey, (currentPage + 1).toString())
    return setSearchParams(searchParams)
  }

  const isPrevDisabled = currentPage <= 1

  const isNextDisabled = currentPage >= 10000

  return { currentPage, handlePrev, handleNext, isPrevDisabled, isNextDisabled }
}
