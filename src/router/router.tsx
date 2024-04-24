import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import App from 'src/app/app'
import TodoPage from 'src/pages/todo-page'
import DeletedTodoPage from 'src/pages/deleted-todo-page'

export const routerConfig = (
  <Route path='/' element={<App />}>
    <Route index element={<TodoPage />} />
    <Route path='deleted' element={<DeletedTodoPage />} />
  </Route>
)

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig)
)
