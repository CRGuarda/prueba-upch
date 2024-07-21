import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SearchInput } from './SearchInput'
import { useAsyncValue } from 'react-router-dom'
import { UsersList } from '../types/random-user/users-list'
import { ResultsSizeSelect } from './ResultsSizeSelect'
import { TablePagination } from './TablePagination'

export const TableList = () => {
  const usersList = useAsyncValue() as UsersList
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

      <Row className='data-table-wrapper mb-2'>
        <Col sm={12}>
          <Table className='table-hover table-light data-table' id='users-data'>
            <thead>
              <tr>
                <th scope='col'>
                  <i className='bi bi-check-lg'></i>
                </th>
                <th scope='col'></th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Género</th>
                <th scope='col'>Dirección</th>
                <th scope='col'>Teléfono</th>

                <th scope='col'>Correo electrónico</th>

                <th scope='col'>País</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map(({ name, gender, address, phone, email, country, picture }) => {
                return (
                  <tr key={name}>
                    <th scope='row'>
                      <input className='form-check-input' type='checkbox' value='' />
                    </th>
                    <td>
                      <Image src={picture} alt={`Picture of ${name}`} roundedCircle width={36} />
                    </td>

                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{address}</td>
                    <td>{phone}</td>

                    <td>{email}</td>

                    <td>{country}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
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
