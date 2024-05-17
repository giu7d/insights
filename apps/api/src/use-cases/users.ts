import type { User } from '@/entities/user'

async function create(data: Omit<User, 'id' | 'cashback'>): Promise<User> {
  return await new Promise((resolve) =>
    resolve({
      id: new Date().getTime().toString(),
      cashback: {
        currency: 'BRL',
        total: '0',
      },
      ...data,
    }),
  )
}

async function find(userId: string): Promise<User> {
  return await new Promise((resolve) =>
    resolve({
      id: userId,
      photo: 'https://avatars.githubusercontent.com/u/30274817?v=4',
      firstName: 'Giuseppe',
      lastName: 'Setem',
      username: 'giu.setem',
      cashback: {
        total: '20.00',
        currency: 'BRL',
      },
    }),
  )
}

const Users = { create, find }

export default Users
