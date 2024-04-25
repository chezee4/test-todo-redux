import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from 'src/redux/reducer'
import TodoList from 'src/feature/todo-list/todo-list'

const store = configureStore({
  reducer,
  preloadedState: {
    todos: {
      todos: [{ id: 1, text: 'Test todo', completed: false, deleted: false }],
      deletedTodos: []
    }
  }
})

describe('TodoList', () => {
  let getByText, getByDisplayValue

  beforeEach(() => {
    const renderResult = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )

    getByText = renderResult.getByText
    getByDisplayValue = renderResult.getByDisplayValue
  })

  it('renders todo item', () => {
    const todoItem = getByDisplayValue('Test todo')
    expect(todoItem).toBeInTheDocument()
  })
})
