"use client";
import styles from "../../login/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SendResetPasswordLink from "components/preAuthComponents/SendResetPasswordLink";
import ResetPasswordCard from "components/preAuthComponents/ResetPasswordCard";

const ResetPassword = () => {
  const [registerForPasswordReset, setRegisterForPasswordReset] =
    useState(false);
  const [isPasswordReset, setPasswordReset] = useState(false);
  const { push } = useRouter();
  const handleConvertNum = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    event.target.value = inputValue;
  };
  const handlepasswordReset = () => {
    setPasswordReset(!isPasswordReset);
  };
  const handleRegisterForPasswordReset = (e) => {
    e.preventDefault();
    setRegisterForPasswordReset(!registerForPasswordReset);
  };

  const PasswordResetConfirmation = () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        push("/preAuth/login");
      }}
      className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
    >
      <div className="flex gap-[16px]">
        <img src="/Login_Images/orangeTick.svg" alt="" />
        <p className="font-[600] text-[24px] leading-[normal]">
          Password Reset Successful
        </p>
      </div>
      <button
        type="submit"
        className="w-full p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
      >
        Login with new password
      </button>
    </form>
  );

  return (
    <main className="flex lg:flex-row">
      <section
        className={`lg:w-[50%] bg-boulder ${styles.left_section} h-[100vh] overflow-auto gap-[30px] justify-center flex`}
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
      <section className="lg:w-[50%] flex items-center relative h-[100vh] bg-indigo">
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
            <img src="/Login_Images/Home.svg" alt="" />{" "}
            <span className="text-[12px] cursor-pointer font-bold leading-[normal]">
              Go to Home
            </span>
          </Link>
        </div>
        {!registerForPasswordReset ? (
          <SendResetPasswordLink
            handleConvertNum={handleConvertNum}
            handleRegisterForPasswordReset={handleRegisterForPasswordReset}
          />
        ) : !isPasswordReset ? (
          <ResetPasswordCard handlepasswordReset={handlepasswordReset} />
        ) : (
          <PasswordResetConfirmation />
        )}
      </section>
    </main>
  );
};
export default ResetPassword;
