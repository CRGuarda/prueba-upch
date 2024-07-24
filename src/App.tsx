import Container from 'react-bootstrap/Container'
import { CustomNavbar } from './components/CustomNavbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TableList } from './components/TableList'
import { RandomSeedButton } from './components/RandomSeedButton'
import { FilterForm } from './components/table/table-actions/filter/FilterForm'
import { TableActions } from './components/table/table-actions/TableActions'

const App = () => {
  return (
    <>
      <CustomNavbar />
      <RandomSeedButton />
      <Container className='pt-5'>
        <Row>
          <Col sm={12} md={12}>
            <div>
              <h2>Mi tabla</h2>
            </div>
          </Col>
          <TableActions />
          <Col sm={12} className='mt-4'>
            <FilterForm />
          </Col>
        </Row>
        <TableList />
      </Container>
    </>
  )
}

export default App
