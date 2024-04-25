import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from 'src/redux/reducer'
import InputTodo from 'src/components/input-todo/input-todo'

const store = configureStore({ reducer })

describe('InputTodo', () => {
  let getByPlaceholderText, getByText

  beforeEach(() => {
    const renderResult = render(
      <Provider store={store}>
        <InputTodo />
      </Provider>
    )

    getByPlaceholderText = renderResult.getByPlaceholderText
    getByText = renderResult.getByText
  })

  it('updates value on input change', () => {
    const input = getByPlaceholderText('Add todo...')
    fireEvent.change(input, { target: { value: 'New Todo' } })
    expect(input.value).toBe('New Todo')
  })

  it('clears input after submit', () => {
    const input = getByPlaceholderText('Add todo...')
    fireEvent.change(input, { target: { value: 'New Todo' } })
    fireEvent.click(getByText('Add'))
    expect(input.value).toBe('')
  })
})
