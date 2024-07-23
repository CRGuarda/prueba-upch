export const ascSortElements = (a: string | number, b: string | number) => {
  if (Number(a) && Number(b)) {
    return Number(a) - Number(b)
  }

  return a.toString().localeCompare(b.toString())
}
export const descSortElements = (a: string | number, b: string | number) => {
  if (Number(b) && Number(a)) {
    return Number(b) - Number(a)
  }

  return b.toString().localeCompare(a.toString())
}
