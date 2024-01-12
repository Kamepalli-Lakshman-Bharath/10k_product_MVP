import Link from "next/link";

const LoginForm = ({
  loginType,
  isOTP,
  showPassword,
  handleConvertNum,
  handleOTP,
  handleFogetPassword,
  handleLoginType,
  handleShowPassword,
}) => (
  <>
    <form
      className={` mt-[10rem] h-[450px] rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
    >
      <p className="text-center w-full text-[24px] font-[600] leading-[normal]">
        Login
      </p>
      <div className="flex flex-col gap-[8px]">
        {loginType == "Mobile" ? (
          <>
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="Mobile Number"
            >
              Mobile Number
            </label>
            <div
              className={`border-silver focus-within:border-Vivid_Tangelo gap-[8px] rounded-[8px] py-1 px-[15px] border flex`}
            >
              <img src="/RequestCallBack_images/call.svg" alt="" />
              <div className="flex relative flex-row items-center gap-[3px]  w-full md:gap-[4px]">
                <span className="text-darkGray  text-[13px] leading-[normal] font-[500]">
                  +91
                </span>
                <input
                  required
                  type="tele"
                  id="Mobile Number"
                  name="Mobile Number"
                  maxLength={10}
                  inputMode="numeric"
                  onChange={handleConvertNum}
                  className="focus:outline-none"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="Email ID"
            >
              Email ID
            </label>
            <div className="border-silver focus-within:border-Vivid_Tangelo focus-within:border  w-full gap-[8px] rounded-[8px] py-1 px-[15px] border flex">
              <img src="/RequestCallBack_images/mail.svg" alt="" />
              <input
                required
                type="email"
                id="Email ID"
                name="Email ID"
                className="focus:outline-none"
              />
            </div>
          </>
        )}
        {!isOTP && loginType !== "Email" ? (
          <div className="flex flex-col gap-[8px]">
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="OTP"
            >
              OTP
            </label>
            <div
              className={`border-silver focus-within:border-Vivid_Tangelo w-full gap-[8px] rounded-[8px] py-1 px-[15px] border flex`}
            >
              <img src="/RequestCallBack_images/otp.svg" alt="" />
              <input
                required
                type="text"
                maxLength="6"
                inputMode="numeric"
                pattern="\d*"
                id="OTP"
                name="OTP"
                className="focus:outline-none"
                onChange={handleConvertNum}
              />
            </div>
          </div>
        ) : loginType === "Email" ? (
          <div className="flex w-full flex-col gap-[8px]">
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="Password"
            >
              Password
            </label>
            <div className="border-silver px-[15px]  w-full gap-[8px] rounded-[8px] py-1 border items-center flex ">
              <input
                required
                type={showPassword ? "password" : "text"}
                id="Password"
                name="Password"
                className="focus:outline-none w-full"
              />
              <img
                onClick={handleShowPassword}
                className="cursor-pointer h-[21px]"
                src="/Login_Images/eye.svg"
                alt=""
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="cursor-pointer flex justify-between text-[13px] font-[600]">
        <p onClick={handleLoginType} className="text-Vivid_Tangelo">
          {loginType === "Mobile"
            ? "Login with Email"
            : "Login with Phone Number"}
        </p>
        {loginType === "Email" ? (
          <p onClick={handleFogetPassword} className="text-boulder">
            forgot password?
          </p>
        ) : (
          ""
        )}
      </div>
      {loginType === "Email" ? (
        <div className="flex text-[13px] font-[600] gap-[8px]">
          <input
            required
            type="checkbox"
            name="Remember me"
            id="Remember me"
            className=" checked:bg-Vivid_Tangelo"
          />
          <label htmlFor="Remember me">Remember me</label>
        </div>
      ) : (
        ""
      )}
      {isOTP && loginType === "Mobile" ? (
        <button
          onClick={handleOTP}
          type="submit"
          className="w-full p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
        >
          OTP
        </button>
      ) : (
        <button
          onClick={(e) => e.preventDefault()}
          type="submit"
          className="w-full p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
        >
          Login
        </button>
      )}
      <p className="text-[12px] text-boulder text-center font-[600]">
        Don't have account?{" "}
        <Link
          href="/preAuth/register"
          className="text-Vivid_Tangelo cursor-pointer"
        >
          Register
        </Link>
      </p>
    </form>
  </>
);
export default LoginForm;
