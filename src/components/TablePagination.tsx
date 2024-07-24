import Pagination from 'react-bootstrap/Pagination'
import { usePagination } from '../hooks/usePagination'

export const TablePagination = () => {
  const { currentPage, handlePrev, handleNext, isPrevDisabled, isNextDisabled } = usePagination()
  return (
    <Pagination className='justify-content-end pt-1'>
      <Pagination.Prev as='button' disabled={isPrevDisabled} onClick={handlePrev}>
        Anterior
      </Pagination.Prev>
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Next as='button' disabled={isNextDisabled} onClick={handleNext}>
        Siguiente
      </Pagination.Next>
    </Pagination>
  )
}
