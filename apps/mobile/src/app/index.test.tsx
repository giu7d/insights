import render from '@/services/helpers/test/render.helper'

import Home from './index'

describe('Home', () => {
  it('renders home screen', () => {
    const component = render(<Home />)

    expect(component).toBeDefined()
  })
})
