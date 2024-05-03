import type { User } from '@/entities/user'

export default class CreateUser {
  async call(data: Omit<User, 'id' | 'cashback'>): Promise<User> {
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
}
