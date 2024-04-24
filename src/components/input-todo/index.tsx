import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from 'src/redux/reducer'

import styles from 'src/components/input-todo/input-todo.module.css'

const InputTodo = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const addTodoAndClearInput = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  const handleInputSubmit = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!('key' in event) || event.key === 'Enter') {
      addTodoAndClearInput()
    }
  }

  return (
    <div className={styles['container-input']}>
      <input
        type='text'
        placeholder='Add todo...'
        className={styles['todo-input']}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputSubmit}
      />
      <button className={styles['button-add']} onClick={handleInputSubmit}>
        Add
      </button>
    </div>
  )
}

export default InputTodo
