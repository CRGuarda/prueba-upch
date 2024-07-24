import { CustomButton } from '../../../CustomButton'
import { SlidersIcon } from '../../../Icons'
import { useUsersStore } from '../../../store/useUsersStore'

export const FilterButton = () => {
  const setIsFilterOpen = useUsersStore((state) => state.setIsFilterOpen)
  return (
    <CustomButton variant='outline-primary' onClick={() => setIsFilterOpen()}>
      <SlidersIcon /> Filtros
    </CustomButton>
  )
}
