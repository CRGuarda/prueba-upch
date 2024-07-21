import { useSearchParams } from 'react-router-dom'

export const useSeed = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSeed = () => {
    const randomSeedNumber = Math.round(Math.random() * 100) // To get a random seed with a generous interval (001 - 100) seeds
    const randomSeed = randomSeedNumber.toString().padStart(3, '0') // To maintain same structure as initial value ('001')
    const searchParamsObject = Object.fromEntries(searchParams)
    setSearchParams({ ...searchParamsObject, seed: randomSeed })
  }

  return { handleSeed, seed: searchParams.get('seed') }
}
