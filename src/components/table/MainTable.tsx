import Table from 'react-bootstrap/Table'
import { useUsersStore } from '../store/useUsersStore'
import { sortableColumnsEntries } from '../../utils/sortable-columns'
import { SortIcon } from '../Icons'
import { useListUsers } from '../../hooks/useListUsers'
import Image from 'react-bootstrap/Image'
import { EditableField } from './EditableField'
import { RowsSkeleton } from './RowsSkeleton'

export const MainTable = () => {
  const { usersList, isLoading } = useListUsers()
  const selectAll = useUsersStore((state) => state.selectAll)
  const sortKey = useUsersStore((state) => state.sortKey)
  const sortUserList = useUsersStore((state) => state.sortUserList)
  const usersSelected = useUsersStore((state) => state.usersSelected)
  const setUsersSelected = useUsersStore((state) => state.setUsersSelected)

  return (
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
        {!isLoading ? (
          usersList?.map(({ id, name, gender, address, phone, email, country, picture }) => {
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
                  <EditableField isEditable={isEditable} value={address} propertyName='address' userId={id} />
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
          })
        ) : (
          <RowsSkeleton size={10} />
        )}
      </tbody>
    </Table>
  )
}
