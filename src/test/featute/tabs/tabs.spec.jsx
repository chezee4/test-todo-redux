import { render, screen } from 'src/test/test-utils'
import Tabs from 'src/feature/tabs/tabs'

describe('Tabs', () => {
  test('should render tabs', () => {
    render(<Tabs />)
    expect(screen.getByText('Todo All')).toBeInTheDocument()
    expect(screen.getByText('Todo Deleted')).toBeInTheDocument()
  })
})
