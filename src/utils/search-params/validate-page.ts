export const validatePage = (page: string | null) => {
  const pageNumber = Number(page)
  if (pageNumber <= 0) return 1
  if (pageNumber > 10000) return 1
  return Number.isInteger(pageNumber) ? pageNumber : 1
}
