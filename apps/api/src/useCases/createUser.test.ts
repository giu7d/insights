import CreateUser from '@/useCases/createUser'

describe('Create User', () => {
  it('returns a created user', async () => {
    const request = {
      firstName: 'name',
      lastName: 'surname',
      username: 'name.surname',
    }

    const createUser = new CreateUser()

    const response = await createUser.call(request)

    expect(response.firstName).toBe(request.firstName)
  })
})
