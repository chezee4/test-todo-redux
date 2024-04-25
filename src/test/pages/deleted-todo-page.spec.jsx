import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store' // замените на путь к вашему хранилищу Redux

import DeletedTodoPage from 'src/pages/deleted-todo-page'

let getByText, container

beforeEach(() => {
  const renderResult = render(
    <Provider store={store}>
      <DeletedTodoPage />
    </Provider>
  )

  getByText = renderResult.getByText
  container = renderResult.container
})

it('renders page title', () => {
  const title = getByText('Deleted Todo Page')
  expect(title).toBeInTheDocument()
})

it('renders TodoList component', () => {
  const todoList = container.querySelector('.list')
  expect(todoList).toBeInTheDocument()
})
