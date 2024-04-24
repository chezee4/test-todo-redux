import { Link, useLocation } from 'react-router-dom'
import styles from 'src/feature/tabs/tabs.module.css'

const Tabs = () => {
  const location = useLocation()
  return (
    <div className={styles['tab-container']}>
      <Link
        to='/'
        className={`${location.pathname === '/' ? styles.active : ''} ${
          styles.tab
        }`}
      >
        Todo All
      </Link>
      <Link
        to='/deleted'
        className={`${location.pathname === '/deleted' ? styles.active : ''} ${
          styles.tab
        }`}
      >
        Todo Deleted
      </Link>
    </div>
  )
}

export default Tabs
