import { Coordinates } from './coordinates.type'
import { Street } from './street.type'
import { Timezone } from './timezone.type'

export type Location = {
  street: Street
  city: string
  state: string
  country: string
  postcode: number | string
  coordinates: Coordinates
  timezone: Timezone
}
