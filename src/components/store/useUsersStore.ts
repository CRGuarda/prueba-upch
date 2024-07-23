import { create } from 'zustand'
import { UsersList } from '../../types/random-user/users-list'
import { ascSortElements, descSortElements } from '../../utils/sort-elements'

type UsersStore = {
  isEditableEnabled: boolean
  toggleEditable: () => void
  editUser: (userId: string, newValue: string, propertyName: keyof UsersList[number]) => void
  initialUsersList: UsersList
  usersList: UsersList
  setUsersList: (usersList: UsersList) => void
  deleteUser: () => void
  usersSelected: string[]
  setUsersSelected: (id: string) => void
  selectAll: (toggleSelect: boolean) => void
  searchUser: (searchInput: string | null) => void
  sortUserList: (key: keyof UsersList[number]) => void
  sortKey: {
    key?: keyof UsersList[number]
    order?: 'asc' | 'desc'
  }
}

export const useUsersStore = create<UsersStore>()((set, get) => ({
  isEditableEnabled: false,
  toggleEditable: () => set((state) => ({ isEditableEnabled: !state.isEditableEnabled })),
  editUser: (userId, newValue, propertyName) => {
    const { initialUsersList, usersList } = get()
    const findInitialUserIndex = initialUsersList.findIndex((user) => user.id === userId)
    const findUserIndex = usersList.findIndex((user) => user.id === userId)
    if (findInitialUserIndex < 0 && findUserIndex < 0) return
    // StructuredClone is used to change the reference of the usersList and trigger a rerender
    const initialUsersListClone = structuredClone(initialUsersList)
    const usersListClone = structuredClone(usersList)
    initialUsersListClone[findInitialUserIndex][propertyName] = newValue
    usersListClone[findUserIndex][propertyName] = newValue
    set({
      initialUsersList: initialUsersListClone,
      usersList: usersListClone,
    })
  },
  initialUsersList: [],
  usersList: [],
  usersSelected: [],
  sortKey: {},
  searchUser: (searchInput) => {
    set(({ initialUsersList }) => ({
      usersList: searchInput
        ? initialUsersList.filter((user) =>
            Object.values(user).some((value) => value.toLowerCase().includes(searchInput.toLowerCase()))
          )
        : initialUsersList,
    }))
  },
  setUsersSelected: (id) => {
    const { usersSelected } = get()
    if (usersSelected.includes(id)) return set({ usersSelected: usersSelected.filter((item) => item !== id) })
    const usersSelectedClone = structuredClone(usersSelected)
    usersSelectedClone.push(id)
    return set({ usersSelected: usersSelectedClone })
  },
  selectAll: (toggleSelect) =>
    set((state) => ({
      usersSelected: toggleSelect ? state.usersList.map(({ id }) => id) : [],
    })),
  setUsersList: (usersList) => set({ usersList, initialUsersList: usersList }),
  sortUserList: (key) =>
    set(({ usersList, sortKey }) => {
      const newOrder = () => {
        if (!sortKey.key || sortKey.key !== key) return 'asc'

        return sortKey.order === 'asc' ? 'desc' : 'asc'
      }

      const orderedUsersList = usersList.sort((a, b) =>
        newOrder() === 'asc' ? ascSortElements(a[key], b[key]) : descSortElements(a[key], b[key])
      )

      return {
        usersList: orderedUsersList,
        sortKey: {
          key,
          order: newOrder(),
        },
      }
    }),
  deleteUser: () => {
    set(({ initialUsersList, usersList, usersSelected }) => ({
      usersList: usersList.filter(({ id }) => !usersSelected.includes(id)),
      initialUsersList: initialUsersList.filter(({ id }) => !usersSelected.includes(id)),
      usersSelected: [],
    }))
  },
}))
