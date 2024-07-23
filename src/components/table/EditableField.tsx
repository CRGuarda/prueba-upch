import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useUsersStore } from '../store/useUsersStore'
import { UsersList } from '../../types/random-user/users-list'

type EditableField = { isEditable: boolean; value: string; propertyName: keyof UsersList[number]; userId: string }

export const EditableField = ({ isEditable, value, propertyName, userId }: EditableField) => {
  const [inputValue, setInputValue] = useState(value)
  const isEditableEnabled = useUsersStore((state) => state.isEditableEnabled)
  const editUser = useUsersStore((state) => state.editUser)
  const [isInputEditable, setIsInputEditable] = useState(isEditable && isEditableEnabled)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => setInputValue(target.value)

  const handleEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      editUser(userId, inputValue, propertyName)
      return setIsInputEditable(false)
    }
  }

  useEffect(() => {
    setIsInputEditable(isEditable && isEditableEnabled)
  }, [isEditable, isEditableEnabled])

  if (!isInputEditable) return <span>{value}</span>
  return (
    <input
      type='text'
      className='form-control form-control-sm'
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleEnter}
    />
  )
}
