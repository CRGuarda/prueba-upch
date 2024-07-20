import { Gender } from './gender.enum'
import { ID } from './id.type'
import { Location } from './location.type'
import { Name } from './name.type'
import { Picture } from './picture.type'

export type Result = {
  gender: Gender
  name: Name
  location: Location
  email: string
  phone: string
  id: ID
  picture: Picture
  nat: string
}
