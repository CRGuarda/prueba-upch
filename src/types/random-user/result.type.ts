import { Gender } from '../enums/gender.enum'
import { ID } from './id.type'
import { Location } from './location.type'
import { Name } from './name.type'
import { Picture } from './picture.type'

export type Result = {
  id: ID
  gender: Gender
  name: Name
  location: Location
  email: string
  phone: string
  picture: Picture
  nat: string
}
