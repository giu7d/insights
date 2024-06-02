import Home from './index'
import render from '@/services/helpers/test/render.helper'

describe('Home', () => {
  it('renders home screen', () => {
    const component = render(<Home />)

    expect(component).toBeDefined()
  })
})
