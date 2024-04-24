import Tabs from 'src/feature/tabs/tabs'

import styles from 'src/feature/header/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Tabs />
    </header>
  )
}

export default Header
