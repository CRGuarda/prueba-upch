import { useSeed } from '../hooks/useSeed'
import { CustomButton } from './CustomButton'

export const RandomSeedButton = () => {
  const { handleSeed, seed } = useSeed()
  return (
    <CustomButton onClick={handleSeed} variant='info' className='position-relative' title='Cambiar seed de randomuser'>
      Generar seed <br />
      {seed && <small style={{ position: 'absolute', bottom: -5, right: 0, fontSize: '10px' }}>seed:{seed}</small>}
    </CustomButton>
  )
}
