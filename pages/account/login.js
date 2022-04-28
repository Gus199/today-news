import { FaUser } from "react-icons/fa";
import { ToastContainer, Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/AuthForm.module.css";
import FadeUp from "../../animations/FadeUp";
import { Bounce } from "react-awesome-reveal";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);
  const handelePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout title="User Login">
      <FadeUp
        duration={500}
        triggerOnce={true}
        fraction={0}
        cascade={true}
        damping={0.1}
      >
        <div className={styles.auth}>
          <h1>
            <FaUser /> Log In
          </h1>
          <ToastContainer />
          <form onSubmit={handleLogin}>
            <Bounce>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                  value={data.email}
                />
              
              </div>
            </Bounce>

            <Bounce>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type={passwordEye === false ? "password" : "text"}
                  id="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                  value={data.password}
                  className="w-full rounded-lg"
                />
               
              </div>
            </Bounce>
            
            <Bounce>
              <input type="submit" value="Login" className="btn" />
            </Bounce>
          </form>

          <p>
            <Link href="/account/register">Register</Link>
          </p>
        </div>
      </FadeUp>
    </Layout>
  );
}
