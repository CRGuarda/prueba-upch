import { create } from 'zustand'
import { UsersList } from '../../types/random-user/users-list'

type UsersStore = {
  usersList: UsersList
  setUsersList: (usersList: UsersList) => void
  deleteUser: () => void
  usersSelected: string[]
  setUsersSelected: (name: string) => void
  selectAll: (toggleSelect: boolean) => void
}

export const useUsersStore = create<UsersStore>()((set, get) => ({
  usersList: [],
  usersSelected: [],
  setUsersSelected: (name) => {
    const { usersSelected } = get()
    if (usersSelected.includes(name)) {
      return set({ usersSelected: usersSelected.filter((item) => item !== name) })
    }
    const usersSelectedClone = structuredClone(usersSelected)
    usersSelectedClone.push(name)
    return set({ usersSelected: usersSelectedClone })
  },
  selectAll: (toggleSelect) => {
    if (toggleSelect) {
      const { usersList } = get()
      return set({
        usersSelected: usersList.map(({ name }) => name),
      })
    }

    return set({
      usersSelected: [],
    })
  },
  setUsersList: (usersList) => set({ usersList }),
  deleteUser: () => {
    const { usersList, usersSelected } = get()
    set({
      usersList: usersList.filter(({ name }) => !usersSelected.includes(name)),
      usersSelected: [],
    })
  },
}))
