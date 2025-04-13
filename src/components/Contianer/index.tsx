import React from 'react'
import styles from './container.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Container = (props:any) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}
 
export default Container;
