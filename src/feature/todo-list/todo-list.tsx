import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import { TodoItem } from 'src/components/todo-item/todo-item'
import styles from 'src/feature/todo-list/todo-list.module.css'

type TodoListProps = {
  deleted?: boolean
}

const TodoList: React.FC<TodoListProps> = ({ deleted = false }) => {
  const todos = useSelector((state: RootState) =>
    deleted ? state.todos.deletedTodos : state.todos.todos
  )

  return (
    <div className={styles['list']}>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <TodoItem
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            deleted={todo.deleted}
          />
          <hr style={{ height: '1px', backgroundColor: '#000' }} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default TodoList
