import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import App from 'src/app/app'

describe('Router', () => {
  let initialEntries;

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <App />
      </MemoryRouter>
    )
  })

  it('should render TodoPage at path /', () => {
    initialEntries = ['/'];
    expect(screen.getByText('Todo All')).toBeInTheDocument()
  })

  it('should render DeletedTodoPage at path /deleted', () => {
    initialEntries = ['/deleted'];
    expect(screen.getByText('Todo Deleted')).toBeInTheDocument()
  })
})