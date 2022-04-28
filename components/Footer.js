import Link from "next/link";
import styles from "../styles/Footer.module.css";

import { useAuth } from "../context/AuthContext";

export default function Footer() {
  const { user } = useAuth();
  return (
    <footer className={styles.footer}>
      <p>Cpoyright &copy; Flash News 2022</p>
      <Link href="/about">About this project</Link>
    </footer>
  );
}
