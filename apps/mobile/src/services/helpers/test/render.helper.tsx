import { render as renderWithTestingLibrary } from '@testing-library/react-native'

import Provider from '@/services/providers'

export default function render(children: JSX.Element) {
  return renderWithTestingLibrary(<Provider>{children}</Provider>)
}
