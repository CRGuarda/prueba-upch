import { PageSizeEnum } from '../../types/enums/page-size.enum'

export const validateResults = (resultsSize: string | null) => {
  const resultsNumber = Number(resultsSize)
  return Object.values(PageSizeEnum).includes(resultsNumber) ? resultsNumber : PageSizeEnum.SIZE_1
}
