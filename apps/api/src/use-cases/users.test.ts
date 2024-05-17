import Users from './users'

describe('Users Use Cases', () => {
  it('find user', async () => {
    const user = await Users.find('user_id')
    expect(user).toHaveProperty('id', 'user_id')
  })
})
