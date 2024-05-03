import styles from './styles.module.css'

export default function Header() {
  return <header className={styles.header}>
    <nav>
      <ul>
        <li>Home</li>
        <li>Destaque</li>
        <li>Sobre</li>
      </ul>
    </nav>
  </header>
}
