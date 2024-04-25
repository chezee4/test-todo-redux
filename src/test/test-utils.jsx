import { MemoryRouter } from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

function render(ui, { route = '/', ...renderOptions } = {}) {
  const Wrapper = ({ children }) => (
    <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }
