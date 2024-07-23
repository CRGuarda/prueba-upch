import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SearchInput } from './SearchInput'
import { ResultsSizeSelect } from './ResultsSizeSelect'
import { TablePagination } from './TablePagination'
import { useListUsers } from '../hooks/useListUsers'
import { useUsersStore } from './store/useUsersStore'
import { sortableColumnsEntries } from '../utils/sortable-columns'
import { SortIcon } from './Icons'
import { EditableField } from './table/EditableField'

export const TableList = () => {
  const { usersList, isLoading } = useListUsers()
  const setUsersSelected = useUsersStore((state) => state.setUsersSelected)
  const usersSelected = useUsersStore((state) => state.usersSelected)
  const selectAll = useUsersStore((state) => state.selectAll)
  const sortUserList = useUsersStore((state) => state.sortUserList)
  const sortKey = useUsersStore((state) => state.sortKey)

  if (isLoading) return <h3>HOLA</h3>
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
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='selectAll'
                    onChange={(e) => selectAll(e.target.checked)}
                  />
                </th>
                <th scope='col'></th>
                {sortableColumnsEntries.map(([key, value]) => {
                  const order = sortKey.key === key ? sortKey.order : undefined
                  return (
                    <th
                      key={value}
                      scope='col'
                      onClick={() => sortUserList(key)}
                      role='button'
                      tabIndex={0}
                      className='position-relative'
                    >
                      <span className='pe-2'>{value}</span>
                      <SortIcon order={order} className='position-absolute top-50 end-0 translate-middle-y' />
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {usersList?.map(({ id, name, gender, address, phone, email, country, picture }) => {
                const isSelected = usersSelected.some((item) => item === id)
                const isEditable = usersSelected.includes(id)
                return (
                  <tr key={id}>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name={`select-${id}`}
                        checked={isSelected}
                        onChange={() => setUsersSelected(id)}
                      />
                    </th>
                    <td>
                      <Image src={picture} alt={`Picture of ${name}`} roundedCircle height={36} />
                    </td>

                    <td>
                      <EditableField isEditable={isEditable} value={name} propertyName='name' userId={id} />
                    </td>
                    <td>
                      <EditableField isEditable={isEditable} value={gender} propertyName='gender' userId={id} />
                    </td>
                    <td>
                      {<EditableField isEditable={isEditable} value={address} propertyName='address' userId={id} />}
                    </td>
                    <td>
                      <EditableField isEditable={isEditable} value={phone} propertyName='phone' userId={id} />
                    </td>

                    <td>
                      <EditableField isEditable={isEditable} value={email} propertyName='email' userId={id} />
                    </td>

                    <td>
                      <EditableField isEditable={isEditable} value={country} propertyName='country' userId={id} />
                    </td>
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
