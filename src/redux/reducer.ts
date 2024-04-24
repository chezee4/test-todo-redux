import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { saveToLocalStorage, getFromLocalStorage } from 'src/utils'

import { Todo } from 'src/types'

type TodoState = {
  todos: Todo[]
  deletedTodos: Todo[]
}

const initialState: TodoState = {
  todos: getFromLocalStorage('todos'),
  deletedTodos: getFromLocalStorage('deletedTodos')
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        deleted: false
      }
      state.todos.unshift(newTodo)
      saveToLocalStorage('todos', state.todos)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      saveToLocalStorage('todos', state.todos)
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
      saveToLocalStorage('todos', state.todos)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      )
      if (todoIndex === -1) return

      const [deletedTodo] = state.todos.splice(todoIndex, 1)
      deletedTodo.deleted = true
      state.deletedTodos.unshift(deletedTodo)

      saveToLocalStorage('todos', state.todos)
      saveToLocalStorage('deletedTodos', state.deletedTodos)
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.deletedTodos.findIndex(
        (todo) => todo.id === action.payload
      )
      if (todoIndex === -1) return

      const [restoredTodo] = state.deletedTodos.splice(todoIndex, 1)
      restoredTodo.deleted = false
      state.todos.unshift(restoredTodo)

      saveToLocalStorage('todos', state.todos)
      saveToLocalStorage('deletedTodos', state.deletedTodos)
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo, editTodo, restoreTodo } =
  todoSlice.actions

export default todoSlice.reducer
