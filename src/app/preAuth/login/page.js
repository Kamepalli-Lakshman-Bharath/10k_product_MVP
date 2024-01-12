"use client";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import useToast from "@/hooks/useToast";
import styles from "./Login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginForm from "components/preAuthComponents/LoginForm";
import PasswordRecovery from "components/preAuthComponents/PasswordRecoveryForm";

const Login = () => {
  const { showErrorToast } = useToast();
  const [loginType, setLoginType] = useState("Mobile");
  const [isOTP, setOTP] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    const redirectTo = window.location.search
      ? new URLSearchParams(window.location.search).get("redirectTo")
      : null;

    if (redirectTo) {
      showErrorToast("Please login to access this page", "top-right", "light");

      const currentUrl = window.location.href;
      const updatedUrl = currentUrl.replace(
        `?redirectTo=${encodeURIComponent(redirectTo)}`,
        ""
      );
      window.history.replaceState({}, document.title, updatedUrl);
    }
  }, []);

  const handleConvertNum = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    event.target.value = inputValue;
  };
  const handleOTP = () => setOTP(!isOTP);
  const handleFogetPassword = () => setForgotPassword(!forgotPassword);
  const handleLoginType = () =>
    loginType === "Mobile" ? setLoginType("Email") : setLoginType("Mobile");
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleResetPassword = () => push("/preAuth/resetPassword/1");

  return (
    <main className="flex lg:flex-row">
      <ToastContainer />
      <section
        className={`lg:w-[50%] bg-[#747474] ${styles.left_section} h-[100vh] overflow-auto gap-[30px] justify-center flex`}
      >
        <div className="flex flex-col overflow-hidden">
          <div className={`${styles.image1} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages1.png"
              alt=""
            />
          </div>
          <div className={`${styles.image1} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className={`${styles.image2} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages2.png"
              alt=""
            />
          </div>
          <div className={`${styles.image2} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages2.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className={`${styles.image3} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages3.png"
              alt=""
            />
          </div>
          <div className={`${styles.image3} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages3.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="lg:w-[50%]  flex justify-center relative h-[100vh] bg-[#332C60]">
        <div>
          <img
            className="mx-auto absolute top-[30px] right-[42%] py-[40px]"
            src="/Login_Images/2 51.png"
            alt=""
          />
          <Link
            href="/"
            className="flex absolute top-[80px] items-center right-[57px] gap-[10px] text-white px-[16px] py-[8px]"
          >
            <img src="/Login_Images/Home.svg" alt="" />
            <span className="text-[12px] cursor-pointer font-bold leading-[normal]">
              Go to Home
            </span>
          </Link>
        </div>
        {!forgotPassword ? (
          <LoginForm
            loginType={loginType}
            isOTP={isOTP}
            showPassword={showPassword}
            handleConvertNum={handleConvertNum}
            handleOTP={handleOTP}
            handleFogetPassword={handleFogetPassword}
            handleLoginType={handleLoginType}
            handleShowPassword={handleShowPassword}
          />
        ) : (
          <PasswordRecovery
            handleResetPassword={handleResetPassword}
            handleConvertNum={handleConvertNum}
          />
        )}
      </section>
    </main>
  );
};
export default Login;
