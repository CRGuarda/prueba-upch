import { Result } from '../types/random-user/result.type'
import { UsersList } from '../types/random-user/users-list'
import { toCapitalize } from './to-capitalize'

export const getUsersList = (usersList: Result[]): UsersList =>
  usersList.map(({ id, picture, name, gender, location, phone, email, nat }) => {
    return {
      id: id.name + id.value,
      name: name.first + ' ' + name.last,
      picture: picture.large,
      gender: toCapitalize(gender),
      address: location.street.name + ' ' + location.street.number,
      phone,
      email,
      country: location.country.toUpperCase(),
      nat,
    }
  })
