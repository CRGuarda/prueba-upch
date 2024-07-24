import Card from 'react-bootstrap/Card'
import { useUsersStore } from '../../../store/useUsersStore'
import { NationalitySelect } from './NationalitySelect'
import { GenderSelect } from './GenderSelect'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FilterForm = () => {
  const isFilterOpen = useUsersStore((state) => state.isFilterOpen)

  if (!isFilterOpen) return
  return (
    <Card className='border-0 shadow-sm mb-2'>
      <Card.Body>
        <Row>
          <Col>
            <NationalitySelect />
          </Col>
          <Col>
            <GenderSelect />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
