import Col from 'react-bootstrap/Col'
import { FilterButton } from './filter/FilterButton'
import { EditButton } from './edit/EditButton'
import { DeleteButton } from './delete/DeleteButton'

export const TableActions = () => {
  return (
    <Col sm={12} md={6} className='mt-3 text-center text-lg-start'>
      <FilterButton />
      <EditButton />
      <DeleteButton />
    </Col>
  )
}
