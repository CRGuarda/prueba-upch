import { useListUsers } from '../hooks/useListUsers'

export const TableList = () => {
  const { usersList } = useListUsers()
  return (
    <div className='col-sm-12 pt-1'>
      <div className='dt-example'>
        <table className='table table-hover table-light' id='example'>
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
            {usersList.map(({ id, name, gender, address, phone, email, country, picture }) => {
              return (
                <tr key={id}>
                  <th scope='row'>
                    <input className='form-check-input' type='checkbox' value='' />
                  </th>
                  <td>
                    <img src={picture} alt={`Picture of ${name}`} className='img-thumbnail ' />
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
        </table>
      </div>
    </div>
  )
}
