import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Wrapper from 'src/layout/wrapper/wrapper'

describe('Wrapper', () => {
  let getByText

  beforeEach(() => {
    const renderResult = render(
      <Wrapper>
        <div>Test content</div>
      </Wrapper>
    )

    getByText = renderResult.getByText
  })

  it('renders children correctly', () => {
    const content = getByText('Test content')
    expect(content).toBeInTheDocument()
  })
})
