import { COMPANY } from '@/lib/constants';
import styles from './FooterTR.module.css';

export default function FooterTR() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {COMPANY.year} {COMPANY.name} &middot; {COMPANY.domain} &middot; T&uuml;rkiye İletişim: PLACEHOLDER_EMAIL</p>
    </footer>
  );
}
