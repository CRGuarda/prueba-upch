import { useSeed } from '../hooks/useSeed'
import { CustomButton } from './CustomButton'

export const RandomSeedButton = () => {
  const { handleSeed, seed } = useSeed()
  return (
    <CustomButton onClick={handleSeed} variant='info'>
      Generar seed <br />
      {seed && <small>seed:{seed}</small>}
    </CustomButton>
  )
}
