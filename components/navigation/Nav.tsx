'use client'
import Button from '../button/Button'
import styles from './Nav.module.css'
import { usePathname } from 'next/navigation'
export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={pathname === '/' ? styles.selected: ''}>
          <Button label="Home" href="/" />
        </li>
        <li className={pathname === '/about' ? styles.selected : ''}>
          <Button label="About" href="/about" />
        </li>
        <li className={pathname === '/topics' ? styles.selected : ''}>
          <Button label="Topics" href="/topics" />
        </li>
        <li className={pathname === '/questions' ? styles.selected : ''}>
          <Button label="All Questions" href="/questions" />
        </li>
        <li className={pathname === '/users' ? styles.selected : ''}>
          <Button label="All Users" href="/users" />
        </li>
      </ul>
    </nav>
  );
}
