import Bills from './bills'

describe('Bills Use Cases', () => {
  it('lists bills', async () => {
    const bills = await Bills.list()
    expect(bills).toHaveLength(4)
  })
})
