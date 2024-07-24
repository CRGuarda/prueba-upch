import { ButtonProps } from 'react-bootstrap/Button'
import { CustomButton } from '../../../CustomButton'
import { TrashIcon } from '../../../Icons'
import { useUsersStore } from '../../../store/useUsersStore'

export const DeleteButton = ({ disabled, ...rest }: ButtonProps) => {
  const deleteUser = useUsersStore((state) => state.deleteUser)
  const usersSelected = useUsersStore((state) => state.usersSelected)
  const isDisabled = !usersSelected.length

  const handleDelete = () => {
    const userResponse = confirm(`¿Estás seguro de eliminar estos usuarios?`)
    if (!userResponse) return
    return deleteUser()
  }

  return (
    <CustomButton variant='outline-danger' disabled={isDisabled || disabled} onClick={handleDelete} {...rest}>
      <TrashIcon /> Eliminar
    </CustomButton>
  )
}
