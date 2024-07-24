import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SearchInput } from './SearchInput'
import { ResultsSizeSelect } from './ResultsSizeSelect'
import { TablePagination } from './TablePagination'
import { MainTable } from './table/MainTable'

export const TableList = () => {
  return (
    <Col className='pt-1' sm={12}>
      <Row>
        <Col md={6} sm={12}>
          <SearchInput
            className='search-user-input form-control form-control-sm'
            name='searchUser'
            aria-controls='users-data'
            placeholder='Lesa Collins'
          />
        </Col>
      </Row>
      <Row className='data-table-wrapper mb-3'>
        <Col sm={12}>
          <MainTable />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={5}>
          <ResultsSizeSelect />
        </Col>
        <Col sm={12} md={7}>
          <TablePagination />
        </Col>
      </Row>
    </Col>
  )
}
