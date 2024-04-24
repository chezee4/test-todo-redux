import React from 'react'
import styles from 'src/layout/wrapper/wrapper.module.css'

type WrapperProps = {
  children: React.ReactNode
}
const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
