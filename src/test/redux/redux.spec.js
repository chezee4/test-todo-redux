import { configureStore } from '@reduxjs/toolkit'
import todoReducer, {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  restoreTodo,
  TodoState
} from 'src/redux/reducer'

describe('todo reducer', () => {
  let store

  beforeEach(() => {
    store = configureStore({ reducer: { todos: todoReducer } })
  })

  it('should handle initial state', () => {
    expect(store.getState().todos).toEqual({ todos: [], deletedTodos: [] })
  })

  it('should handle addTodo', () => {
    store.dispatch(addTodo('Run the tests'))
    const todos = store.getState().todos.todos
    expect(todos.length).toBe(1)
    expect(todos[0].text).toBe('Run the tests')
  })

  it('should handle toggleTodo', () => {
    store.dispatch(addTodo('Run the tests'))
    let todos = store.getState().todos.todos
    store.dispatch(toggleTodo(todos[0].id))
    todos = store.getState().todos.todos
    expect(todos[0].completed).toBe(true)
  })

  it('should handle deleteTodo', () => {
    store.dispatch(addTodo('Run the tests'))
    let todos = store.getState().todos.todos
    store.dispatch(deleteTodo(todos[0].id))
    todos = store.getState().todos.todos
    const deletedTodos = store.getState().todos.deletedTodos
    expect(todos.length).toBe(0)
    expect(deletedTodos.length).toBe(1)
  })

  it('should handle editTodo', () => {
    store.dispatch(addTodo('Run the tests'))
    let todos = store.getState().todos.todos
    store.dispatch(editTodo({ id: todos[0].id, text: 'Run the tests again' }))
    todos = store.getState().todos.todos
    expect(todos[0].text).toBe('Run the tests again')
  })

  it('should handle restoreTodo', () => {
    store.dispatch(addTodo('Run the tests'))
    let todos = store.getState().todos.todos
    store.dispatch(deleteTodo(todos[0].id))
    let deletedTodos = store.getState().todos.deletedTodos
    store.dispatch(restoreTodo(deletedTodos[0].id))
    todos = store.getState().todos.todos
    deletedTodos = store.getState().todos.deletedTodos
    expect(todos.length).toBe(1)
    expect(deletedTodos.length).toBe(0)
  })
})
