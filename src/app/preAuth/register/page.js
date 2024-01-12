"use client";
import { useState } from "react";
import styles from "./Register.module.css";
import Link from "next/link";
import Select from "react-select";
import { GraduationOptions } from "../../../shared/staticData/register.json";
import InputField from "components/preAuthComponents/InputField";

export default function Register() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [highestQualification, setHighestQualification] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: null,
    emailId: "",
    newPassword: "",
    reEnterPassword: "",
    graduationYear: null,
    workExp: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const sanitizedValue =
      name === "mobileNumber" || name === "graduationYear"
        ? value.replace(/\D/g, "")
        : value;
    const inputValue = type === "checkbox" ? checked : sanitizedValue;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      "&:hover": {
        borderColor: "#DAE8FF",
      },
      fontWeight: "bold",
    }),
  };

  const options = GraduationOptions;

  const handleFileChange = (e) => {
    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);
      fileInput.value = null;
      setSelectedFile(fileURL);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="flex h-[100vh] items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="py-[20px] border shadow-md flex flex-col lg:w-[866px] md:w-[768px] gap-[28px] rounded-[16px] px-[40px]"
      >
        <div className="flex justify-center relative gap-[32px] items-end w-full">
          <div className="flex absolute left-0 gap-[10px] items-start font-[700] text-[12px] tracking-wide">
            <img src="/Register_Images/home.svg" alt="" />
            <Link href="/">
              <span className="uppercase"> go to home</span>
            </Link>
          </div>
          <p className="text-[24px] font-[600] leading-[normal]">
            Get Started with{" "}
            <span className={styles.linear_Gradient_text}>Profile</span>
          </p>
        </div>

        <div className="flex justify-between">
          <div className="w-[46%] flex flex-col gap-[24px]">
            <p className="text-center tracking-[3px] text-[10px] font-[300]">
              Primary Information
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
            <div className="flex items-center gap-[24px]">
              <div className="flex gap-[8px] w-[152px] flex-col">
                <p className="text-[12px] font-[600] leading-[normal]">
                  Upload Profile Pic
                </p>
                <label className="w-full p-[12px] font-[400] text-center text-Vivid_Tangelo border border-Vivid_Tangelo text-[13px] rounded-[8px] cursor-pointer">
                  {selectedFile ? "Selected File" : "Select File "}
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {selectedFile && (
                <div className="overflow-hidden rounded-[8px] relative border-silver h-[60px] w-[60px]">
                  <div className="top-[2px] border-[3px] border-red-500 bg-white rounded-full right-[2px] p-1 absolute">
                    <img
                      onClick={() => setSelectedFile(null)}
                      className="h-2 w-2 cursor-pointer"
                      src="/Register_Images/cross-mark-svgrepo-com.svg"
                      alt=""
                    />
                  </div>
                  <img
                    draggable={false}
                    src={selectedFile}
                    className="h-full w-full"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>

          <div className="border"></div>

          <div className="w-[46%] flex flex-col gap-[24px] ">
            <p className="text-center tracking-[3px] text-[10px] font-[300]">
              Secondary Information
            </p>
            <InputField
              type="password"
              id="NewPassword"
              name="newPassword"
              label="New Password"
              placeholder="Enter a new password"
              onChange={handleInputChange}
              value={formData.newPassword}
              required={true}
              img="/Login_Images/password.svg"
            />
            <InputField
              type="password"
              id="ReEnterPassword"
              name="reEnterPassword"
              label="Re-enter Password"
              placeholder="Re-enter your password"
              onChange={handleInputChange}
              value={formData.reEnterPassword}
              required={true}
              img="/Login_Images/password.svg"
            />
            <div className="flex flex-col gap-[8px]">
              <label
                className="block text-[14px] font-semibold text-gray-900"
                htmlFor="education"
              >
                Highest Qualification
              </label>
              <div className="focus-within:border-Vivid_Tangelo focus-within:border gap-[8px] rounded-[8px] px-[5px] border flex">
                <img src="/Register_Images/Graduation_Icon.svg" alt="" />
                <div className="flex flex-row focus-within:border-none items-center gap-[3px] w-full md:gap-[4px]">
                  <Select
                    styles={selectStyles}
                    className="w-full"
                    isSearchable={false}
                    options={options}
                    onChange={setHighestQualification}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[24px] ">
              <div className="w-[141px] flex-shrink-0 flex flex-col gap-[8px] ">
                <label
                  className="font-[600] text-[12px] "
                  htmlFor="Graduation Year"
                >
                  Graduation Year
                </label>
                <div className="border focus-within:border-Vivid_Tangelo w-full gap-[8px] p-2 flex rounded-[8px]">
                  <img src="/Register_Images/Calender.svg" alt="" />
                  <input
                    id="Graduation Year"
                    placeholder="eg: 2023"
                    className="w-full placeholder:text-[13px] focus:outline-none"
                    type="text"
                    onChange={handleInputChange}
                    value={formData.graduationYear}
                    name="graduationYear"
                    maxLength={4}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] ">
                <label
                  className="font-[600] text-[12px] "
                  htmlFor="Work Experience"
                >
                  Work Experience
                </label>
                <div className="border focus-within:border-Vivid_Tangelo w-full gap-[8px] p-2 flex rounded-[8px]">
                  <img src="/Register_Images/experience_icon.svg" alt="" />
                  <input
                    id="Work Experience"
                    placeholder="eg: 2 years in BPO"
                    className="w-full placeholder:text-[13px] focus:outline-none"
                    type="text"
                    onChange={handleInputChange}
                    value={formData.workExp}
                    name="workExp"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="flex gap-[8px] w-[190px] flex-col">
                <p className="text-[12px] font-[600] leading-[normal]">
                  Upload Degree Certificate (PDF)
                </p>
                <label className="w-full p-[12px] font-[400] text-center text-Vivid_Tangelo border border-Vivid_Tangelo text-[13px] rounded-[8px] cursor-pointer">
                  Select File
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-[366px] mx-auto p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
        >
          Register
        </button>

        <p className="text-[12px] mx-auto text-boulder font-[600]">
          Already have an account?{" "}
          <Link
            href="/preAuth/login"
            className="text-Vivid_Tangelo cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
