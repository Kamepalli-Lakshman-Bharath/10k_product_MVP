import styles from "../../app/preAuth/login/Login.module.css";

const SendResetPasswordLink = ({
  handleConvertNum,
  handleRegisterForPasswordReset,
}) => (
  <form
    onSubmit={handleRegisterForPasswordReset}
    className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
  >
    <p className="text-center font-[600] text-[24px] leading-[normal]">
      Password Recovery
    </p>
    <div>
      <div className="flex flex-col gap-[8px]">
        <label
          className="block text-[14px]  font-semibold  text-gray-900"
          htmlFor="Mobile Number"
        >
          Mobile Number
        </label>
        <div className="border-bolder gap-[8px] focus-within:border-Vivid_Tangelo focus-within:border rounded-[8px] p-[5px] border flex">
          <img src="/RequestCallBack_images/call.svg" alt="" />
          <div className="flex relative flex-row items-center gap-[3px] w-full md:gap-[4px]">
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
      </div>
    </div>
    <p className="text-center text-[#646464]">OR</p>
    <div className="flex flex-col gap-[8px]">
      <label
        className="block text-[13px] font-semibold text-gray-900"
        htmlFor="Email ID"
      >
        Registered Email ID
      </label>
      <div className="border-bolder focus-within:border-Vivid_Tangelo focus-within:border w-full gap-[8px] rounded-[8px] py-1 px-[15px] border flex">
        <img src="/RequestCallBack_images/mail.svg" alt="" />
        <input
          required
          type="email"
          id="Email ID"
          name="Email ID"
          className="focus:outline-none"
        />
      </div>
    </div>
    <button
      type="submit"
      className="w-full p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
    >
      Send Password Reset Link
    </button>
  </form>
);
export default SendResetPasswordLink;
