import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  deleteTodo,
  editTodo,
  toggleTodo,
  restoreTodo
} from 'src/redux/reducer'
import { Todo } from 'src/types'
import styles from 'src/components/todo-item/todo-item.module.css'

type TodoItemProps = Todo & {}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  deleted,
  completed
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(text)
  const dispatch = useDispatch()

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    dispatch(editTodo({ id: id, text: editText }))
    setIsEditing(false)
  }

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id))
  }

  const handleCheckboxChange = () => {
    dispatch(toggleTodo(id))
  }

  const handleRestoreClick = () => {
    dispatch(restoreTodo(id))
  }

  return (
    <div className={styles['container-item']}>
      <label className={styles['competed-checkbox']}>
        <input
          name='dummy'
          type='checkbox'
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}></span>
      </label>

      <input
        type='text'
        value={editText}
        readOnly={!isEditing}
        className={styles['todo-input']}
        onChange={(e) => setEditText(e.target.value)}
      />

      {deleted ? (
        <button className={styles.button} onClick={handleRestoreClick}>
          Restore
        </button>
      ) : (
        <div className={styles.tools}>
          <button
            className={styles.button}
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button className={styles.button} onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoItem
