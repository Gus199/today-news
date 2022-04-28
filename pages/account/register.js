import { FaUser } from "react-icons/fa";
import { ToastContainer, Toast, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/AuthForm.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const router = useRouter();

  const { user, signup } = useAuth();
  console.log(user);
 

  // handle password Eye
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handelePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const handeleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const onSubmit = async (data) => {
    // e.preventDefault();
    alert(JSON.stringify(data));

    try {
      await signup(data.email, data.password);
      router.push("/account/login");
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };
  // Check Password event
  const password = watch("password");
  return (
    <Layout title="User Registration">
      <div className={styles.auth}>
        <h1>
          <FaUser /> Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="username"
              className={`${
                errors.username &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("username", {
                required: "username is required",
              })}
            />
             {errors.username && (
              <span className="text-sm text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className={`${
                errors.email &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("email", {
                required: "email is required",
              })}
            />
             {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className=" relative">
            <label htmlFor="password">Password</label>
            <input
              type={passwordEye === false ? "password" : "text"}
              id="password"
              className={`${
                errors.password &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"`,
                  message: "it must have a character",
                },
                minLength: {
                  value: 8,
                  message: "minimum requered length is 8",
                },
                maxLength: {
                  value: 20,
                  message: "maximum requered length is 20",
                },
                // ToDo make this parts works
              })}

              // value={data.password}
              // className="w-full h-14 rounded-lg"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            {/* eye section */}
            <div className="text-2xl absolute top-12 right-5">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={handelePasswordClick} />
              ) : (
                <AiFillEye onClick={handelePasswordClick} />
              )}
            </div>
          </div>
          <div className=" relative">
            <label htmlFor="password">Confirm Password</label>
            <input
              className={`${
                errors.Confirmpassword &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              type={confirmPasswordEye === false ? "password" : "text"}
              id="Confirmpassword"
              {...register("Confirmpassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "The password dont match",
              })}

       
            />
            {errors.Confirmpassword && (
              <span className="text-sm text-red-500">
                {errors.Confirmpassword.message}
              </span>
            )}
            {/* eye section */}
            <div className="text-2xl absolute top-12 right-5">
              {confirmPasswordEye === false ? (
                <AiFillEyeInvisible onClick={handeleConfirmPasswordClick} />
              ) : (
                <AiFillEye onClick={handeleConfirmPasswordClick} />
              )}
            </div>
          </div>

          <input type="submit" value="Register" className="btn" />
        </form>

        <p>
          Already have an account? <Link href="/account/login">Login</Link>
        </p>
      </div>
    </Layout>
  );
}
