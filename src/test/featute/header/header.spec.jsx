import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Header from 'src/feature/header/header'

describe('Header', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>
    )
  })

  it('renders without crashing', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('contains Tabs component', () => {
    expect(screen.getByText('Todo All')).toBeInTheDocument()
    expect(screen.getByText('Todo Deleted')).toBeInTheDocument()
  })
})
