import Container from 'react-bootstrap/Container'
import { CustomNavbar } from './components/CustomNavbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CustomButton } from './components/CustomButton'
import { PencilIcon, SlidersIcon, TrashIcon } from './components/Icons'
import { TableList } from './components/TableList'
import { RandomSeedButton } from './components/RandomSeedButton'
import { useUsersStore } from './components/store/useUsersStore'

const App = () => {
  const deleteUser = useUsersStore((state) => state.deleteUser)
  const usersSelected = useUsersStore((state) => state.usersSelected)
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
          <Col sm={12} md={6} className='mt-3'>
            <CustomButton variant='outline-primary'>
              <SlidersIcon /> Filtros
            </CustomButton>
            <CustomButton variant='outline-primary' disabled={usersSelected.length !== 1}>
              <PencilIcon /> Editar
            </CustomButton>
            <CustomButton variant='outline-danger' onClick={() => deleteUser()} disabled={!usersSelected.length}>
              <TrashIcon /> Eliminar
            </CustomButton>
          </Col>
          <Col sm={12} className='mt-4 d-none'>
            {/* TODO: FiltersContent */}
          </Col>
        </Row>
        <TableList />
      </Container>
    </>
  )
}

export default App
