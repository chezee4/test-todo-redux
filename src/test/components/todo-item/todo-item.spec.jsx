import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { waitFor } from '@testing-library/react'
import reducer from 'src/redux/reducer'
import TodoItem from 'src/components/todo-item/todo-item'

const mockTodo = {
  id: '1',
  text: 'Test Todo',
  deleted: false,
  completed: false
}

let store

describe('TodoItem', () => {
  beforeEach(() => {
    store = configureStore({
      reducer: reducer,
      preloadedState: { todos: [mockTodo] }
    })
    render(
      <Provider store={store}>
        <TodoItem {...mockTodo} />
      </Provider>
    )
  })

  it('dispatches deleteTodo action on Delete button click', () => {
    fireEvent.click(screen.getByText('Delete'))
    expect(store.getState().todos[0].deleted).toBe(true)
  })

  it('dispatches toggleTodo action on checkbox change', () => {
    fireEvent.click(screen.getByRole('checkbox'))
    expect(store.getState().todos[0].completed).toBe(true)
  })

  it('dispatches editTodo action on Save button click', () => {
    fireEvent.click(screen.getByText('Edit'))
    fireEvent.change(screen.getByDisplayValue('Test Todo'), {
      target: { value: 'New Todo' }
    })
    fireEvent.click(screen.getByText('Save'))
    expect(store.getState().todos[0].text).toBe('New Todo')
  })

  it('dispatches restoreTodo action on Restore button click', () => {
    fireEvent.click(screen.getByText('Delete'))
    fireEvent.click(screen.getByText('Restore'))
    expect(store.getState().todos[0].deleted).toBe(false)
  })
})