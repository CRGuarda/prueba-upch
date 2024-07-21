import Pagination from 'react-bootstrap/Pagination'
import { usePagination } from '../hooks/usePagination'

export const TablePagination = () => {
  const { currentPage, handlePrev, handleNext, isPrevDisabled, isNextDisabled } = usePagination()
  return (
    <Pagination>
      <Pagination.Prev as='button' disabled={isPrevDisabled} onClick={handlePrev} />
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Next as='button' disabled={isNextDisabled} onClick={handleNext} />
    </Pagination>
  )
}
