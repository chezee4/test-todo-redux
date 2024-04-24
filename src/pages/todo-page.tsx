import InputTodo from 'src/components/input-todo'
import TodoList from 'src/feature/todo-list/todo-list'
import Wrapper from 'src/layout/wrapper/wrapper'
import styles from 'src/pages/pages.module.css'

const TodoPage = () => {
  return (
    <Wrapper>
      <h1 className={styles.title}>Todo Page</h1>
      <InputTodo />
      <TodoList />
    </Wrapper>
  )
}

export default TodoPage
