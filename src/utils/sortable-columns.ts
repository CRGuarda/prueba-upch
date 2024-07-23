import { UsersList } from '../types/random-user/users-list'

export const sortableColumns: Partial<UsersList[number]> = {
  name: 'Nombre',
  gender: 'Género',
  address: 'Dirección',
  phone: 'Teléfono',
  email: 'Correo electrónico',
  country: 'País',
}

export const sortableColumnsEntries = Object.entries(sortableColumns) as [keyof typeof sortableColumns, string][]
