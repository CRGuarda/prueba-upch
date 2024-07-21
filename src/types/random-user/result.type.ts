import { Gender } from '../enums/gender.enum'
import { Location } from './location.type'
import { Name } from './name.type'
import { Picture } from './picture.type'

export type Result = {
  gender: Gender
  name: Name
  location: Location
  email: string
  phone: string
  picture: Picture
  nat: string
}
