import Container from 'react-bootstrap/Container'
import { CustomNavbar } from './components/CustomNavbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CustomButton } from './components/CustomButton'
import { PencilIcon, SlidersIcon, TrashIcon } from './components/Icons'
import { TableList } from './components/TableList'

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Container className='pt-5'>
        <Row>
          <Col sm={12} md={12}>
            <div>
              <h2>Mi tabla</h2>
            </div>
          </Col>
          <Col sm={12} md={6} className='mt-3'>
            <CustomButton variant='outline-primary'>
              <SlidersIcon /> Filtros
            </CustomButton>
            <CustomButton variant='outline-primary'>
              <PencilIcon /> Editar
            </CustomButton>
            <CustomButton variant='outline-danger'>
              <TrashIcon /> Eliminar
            </CustomButton>
          </Col>
          <Col sm={12} className='mt-4 d-none'>
            {/* TODO: FiltersContent */}
          </Col>
        </Row>
        <TableList></TableList>
      </Container>
    </>
  )
}

export default App
