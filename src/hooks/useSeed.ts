import { useSearchParams } from 'react-router-dom'

export const useSeed = () => {
  const seedKey = 'seed'
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSeed = () => {
    const randomSeedNumber = Math.round(Math.random() * 100)
    const randomSeed = randomSeedNumber.toString().padStart(3, '0')
    searchParams.set(seedKey, randomSeed)
    return setSearchParams(searchParams)
  }

  return { handleSeed, seed: searchParams.get(seedKey) }
}
