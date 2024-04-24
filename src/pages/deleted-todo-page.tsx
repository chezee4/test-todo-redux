import Wrapper from 'src/layout/wrapper/wrapper'
import TodoList from 'src/feature/todo-list/todo-list'
import styles from 'src/pages/pages.module.css'

const DeletedTodoPage = () => {
  return (
    <Wrapper>
      <h1 className={styles.title}>Deleted Todo Page</h1>
      <TodoList deleted />
    </Wrapper>
  )
}

export default DeletedTodoPage
