import styles from "../../app/preAuth/login/Login.module.css";

const ResetPasswordCard = ({ handlepasswordReset }) => (
  <form
    onSubmit={handlepasswordReset}
    className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
  >
    <p className="text-center font-[600] text-[24px] leading-[normal]">
      Reset Password
    </p>
    <div className="flex flex-col gap-[8px]">
      <label
        className="block text-[14px]  font-semibold  text-gray-900"
        htmlFor="New Password"
      >
        New Password
      </label>
      <div className="border-boulder gap-[8px] rounded-[8px] p-[5px] border flex">
        <img src="/Login_Images/password.svg" alt="" />
        <div className="flex relative flex-row items-center gap-[3px] w-full md:gap-[4px]">
          <input
            required
            type="password"
            id="New Password"
            name="New Password"
            maxLength={10}
            inputMode="numeric"
            placeholder="Minimum 8 Letters"
            className="focus:outline-none"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-[8px]">
      <label
        className="block text-[14px]  font-semibold  text-gray-900"
        htmlFor="Re-enter Password"
      >
        Re-enter Password
      </label>
      <div className="border-boulder gap-[8px] rounded-[8px] p-[5px] border flex">
        <img src="/Login_Images/password.svg" alt="" />
        <div className="flex relative flex-row items-center gap-[3px] w-full md:gap-[4px]">
          <input
            required
            placeholder="Make sure it Matches"
            type="password"
            id="Re-enter Password"
            name="Re-enter Password"
            maxLength={10}
            inputMode="numeric"
            className="focus:outline-none"
          />
        </div>
      </div>
    </div>
    <button
      type="submit"
      className="w-full p-[12px] font-[600] text-center bg-Vivid_Tangelo text-white text-[16px] rounded-[8px]"
    >
      Reset
    </button>
  </form>
);
export default ResetPasswordCard;
