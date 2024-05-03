import type { User } from '@/entities/user'

export default class FindUser {
  async call(userId: string): Promise<User> {
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
}
