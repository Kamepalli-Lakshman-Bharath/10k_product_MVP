const PasswordRecovery = ({ handleConvertNum, handleResetPassword }) => (
  <form
    className={`mt-[10rem] h-[450px] rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
  >
    <p className="text-center text-[24px] font-[600] leading-[normal]">
      Password Recovery
    </p>
    <div className="flex flex-col gap-[8px]">
      <label
        className="block text-[13px] font-semibold text-gray-900"
        htmlFor="Mobile Number"
      >
        Registered Phone Number
      </label>
      <div
        className={`border-silver gap-[8px] focus-within:border-Vivid_Tangelo rounded-[8px] py-1 px-[15px] border flex`}
      >
        <img src="/RequestCallBack_images/call.svg" alt="" />
        <div className="flex relative   flex-row items-center gap-[3px]  w-full md:gap-[4px]">
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
    </div>
    <p className="text-[12px] text-center font-[600] leading-[normal] text-boulder">
      OR
    </p>
    <div className="flex flex-col gap-[8px]">
      <label
        className="block text-[13px] font-semibold text-gray-900"
        htmlFor="Email ID"
      >
        Registered Email ID
      </label>
      <div className=" w-full focus-within:border-Vivid_Tangelo focus-within:border gap-[8px] rounded-[8px] py-1 px-[15px] border flex">
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
      onClick={handleResetPassword}
      type="submit"
      className="w-full p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
    >
      Send Password Reset Link
    </button>
  </form>
);
export default PasswordRecovery;
