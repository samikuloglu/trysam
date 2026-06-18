import { COMPANY } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {COMPANY.year} {COMPANY.name} &middot; {COMPANY.domain} &middot; {COMPANY.location}.</p>
    </footer>
  );
}
