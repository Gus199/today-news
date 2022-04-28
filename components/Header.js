import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";
import Avatar from "./Gravatar";
//  import { useContext } from "react";
// import AuthContext from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Bounce top delay={500}>
          <Link href="/">
            <a>
              <span style={{ color: "black" }}>NE</span>
              <span style={{ color: "red" }}>WS</span>
            </a>
          </Link>
        </Bounce>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/dailyNews">
              <a>Today News</a>
            </Link>
          </li>

          {user ? (
            // If logged in
            <>
              <li>
                <Link href='/contactUs'>
                <button className="btn-secondary btn-icon">Contact us</button>
                </Link>
              </li>

              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
              <li>
                <Avatar email={user?.email}></Avatar>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
