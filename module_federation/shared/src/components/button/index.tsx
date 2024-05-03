import styles from './styles.module.css'

interface Button extends React.HTMLAttributes<HTMLButtonElement> {}

export default function Button({children ,...rest}: Button) {
  if (!children) return null
  return <button className={styles.button} {...rest}>{children}</button>
}
