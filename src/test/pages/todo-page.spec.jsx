import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import TodoPage from 'src/pages/todo-page'

describe('TodoPage', () => {
  let getByText, getByPlaceholderText, container

  beforeEach(() => {
    const renderResult = render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    )

    getByText = renderResult.getByText
    getByPlaceholderText = renderResult.getByPlaceholderText
    container = renderResult.container
  })

  it('renders page title', () => {
    const title = getByText('Todo Page')
    expect(title).toBeInTheDocument()
  })

  it('renders InputTodo component', () => {
    const inputTodo = getByPlaceholderText('Add todo...')
    expect(inputTodo).toBeInTheDocument()
  })

  it('renders TodoList component', () => {
    const todoList = container.querySelector('.list')
    expect(todoList).toBeInTheDocument()
  })
})
