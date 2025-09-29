import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div>ALUME</div>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/school">Школа</Link>
            </li>
            <li>
              <Link href="/join">Присоединиться</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
