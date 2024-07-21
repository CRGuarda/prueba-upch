import { useSearchParams } from 'react-router-dom'
import { validatePage } from '../lib/search-params/validate-page'

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = validatePage(searchParams.get('page'))
  const handlePrev = () => {
    const currentSearchParams = Object.fromEntries(searchParams)
    setSearchParams({
      ...currentSearchParams,
      page: (currentPage - 1).toString(),
    })
  }

  const handleNext = () => {
    const currentSearchParams = Object.fromEntries(searchParams)
    setSearchParams({
      ...currentSearchParams,
      page: (currentPage + 1).toString(),
    })
  }

  const isPrevDisabled = currentPage <= 1

  const isNextDisabled = currentPage >= 10000

  return { currentPage, handlePrev, handleNext, isPrevDisabled, isNextDisabled }
}
