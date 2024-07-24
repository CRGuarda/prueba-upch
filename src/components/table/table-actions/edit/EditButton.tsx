import { ButtonProps } from 'react-bootstrap/Button'
import { CustomButton } from '../../../CustomButton'
import { PencilIcon } from '../../../Icons'
import { useUsersStore } from '../../../store/useUsersStore'

export const EditButton = ({ disabled, ...rest }: ButtonProps) => {
  const toggleEditable = useUsersStore((state) => state.toggleEditable)
  const usersSelected = useUsersStore((state) => state.usersSelected)
  const isDisabled = !usersSelected.length || disabled

  return (
    <CustomButton variant='outline-primary' disabled={isDisabled} onClick={() => toggleEditable()} {...rest}>
      <PencilIcon /> Editar
    </CustomButton>
  )
}
