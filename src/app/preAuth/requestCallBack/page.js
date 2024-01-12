"use client";
import ThankYouModal from "components/Modals/ThankYouModal/ThankYouModal";
import styles from "./RequestCallBack.module.css";
import { useState } from "react";
import InputField from "components/preAuthComponents/InputField";
const RequestCallBack = () => {
  const [isTQModal, setTQmodal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: null,
    otp: null,
    emailId: "",
    whatsApp: false,
  });

  const handleThankYouModal = () => {
    setTQmodal(!isTQModal);
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const sanitizedValue =
      name === "mobileNumber" || name === "otp"
        ? value.replace(/\D/g, "")
        : value;
    const inputValue = type === "checkbox" ? checked : sanitizedValue;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleThankYouModal();
  };

  return (
    <main className="flex lg:flex-row sm:flex-col">
      <section
        className={`lg:w-[50%] md:flex sm:hidden sm:w-[100%] justify-center items-center bg-dustyBlue h-[100dvh]`}
      >
        <div className={`${styles.bg_img}`}>
          <img
            className={`${styles.call}`}
            src="/RequestCallBack_images/callImage.svg"
            alt=""
          />
          <img
            className={`${styles.settings}`}
            src="/RequestCallBack_images/settingimage.svg"
            alt=""
          />
          <img
            className={`${styles.chat_blue}`}
            src="/RequestCallBack_images/blue_chat.svg"
            alt=""
          />
          <img
            className={`${styles.black_chat}`}
            src="/RequestCallBack_images/black_chat.svg"
            alt=""
          />
          <img
            className={`${styles.email}`}
            src="/RequestCallBack_images/email.svg"
            alt=""
          />
        </div>
      </section>
      <section
        className={`flex flex-col px-[10px] py-[20px] sm:gap-[20px] md:gap-[40px] justify-center items-center bg-azureDream lg:h-[100dvh] lg:w-[50%] sm:w-[100%]`}
      >
        <img
          className="md:pt-[40px]"
          src="/LandingPageImages/10k_Logo.svg"
          alt=""
        />
        <form
          onSubmit={handleFormSubmit}
          className={`w-[454px] ${styles.content_section} gap-[24px] flex flex-col rounded-[16px] h-[564px] bg-white px-[40px] py-[38px]`}
        >
          <p className="text-center sm:text-[20px] md:text-[24px] font-semibold leading-[normal]">
            Talk to Our{" "}
            <span className={`${styles.text_linear_gradient}`}>Career</span>{" "}
            Expert
          </p>
          <InputField
            type="text"
            id="Name"
            name="name"
            label="Name"
            placeholder="Enter your name"
            onChange={handleInputChange}
            value={formData.name}
            required={true}
            img="/RequestCallBack_images/profile.svg"
          />
          <InputField
            type="tel"
            id="MobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            placeholder="Enter your mobile number"
            onChange={handleInputChange}
            value={formData.mobileNumber}
            required={true}
            img="/RequestCallBack_images/call.svg"
            showOTP={true}
          />
          <InputField
            type="text"
            id="otp"
            name="otp"
            label="otp"
            placeholder="Enter the OTP"
            onChange={handleInputChange}
            value={formData.otp}
            required={true}
            img="/RequestCallBack_images/otp.svg"
          />

          <InputField
            type="email"
            id="EmailID"
            name="emailId"
            label="Email ID"
            placeholder="Enter your email address"
            onChange={handleInputChange}
            value={formData.emailId}
            required={true}
            img="/RequestCallBack_images/mail.svg"
          />
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[8px]">
              <input
                required
                type="checkbox"
                name="whatsApp"
                id="whatsApp"
                onChange={handleInputChange}
                value={formData.whatsApp}
              />
              <label htmlFor="whatsApp">
                I want to receive updates on WhatsApp
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
            >
              Send Request
            </button>
          </div>
        </form>
        <ThankYouModal
          isTQModal={isTQModal}
          handleThankYouModal={handleThankYouModal}
        />
      </section>
    </main>
  );
};
export default RequestCallBack;
