import type { ReactNode } from 'react'
import styles from './styles.module.css'
const ProductFlexLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.products}>{children}</div>
    </>
  )
}

export default ProductFlexLayout
