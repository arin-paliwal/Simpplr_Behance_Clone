import React from 'react'
import fb from "../../assets/logos/fb.png"
import google from "../../assets/logos/google.png"
import apple from "../../assets/logos/apple.png"
const PopupSign = () => {
  return (
    <div className="flex justify-center w-full text-center">
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="flex">
          <h1 className="font-semibold">
            <span className="underline">Sign&nbsp;up</span> &nbsp;or&nbsp;{" "}
            <span className="underline">Sign&nbsp;in</span>to your account to
            view more work personalized to your preferences.
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 items-center">
          <div className="flex">
            <button className="rounded-3xl w-[11rem] px-4 py-2 bg-blue2 hover:bg-blue1 text-white font-semibold transform duration-300">
              Sign Up with email
            </button>
          </div>
          <div className="flex">
            <h1 className="text-gray-500">or</h1>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex border p-2 rounded-full">
              <img src={apple} alt="apple" className="w-7 h-7 object-cover" />
            </div>
            <div className="flex border p-2 bg-[#3c5b9a] rounded-full">
              <img
                src={fb}
                alt="apple"
                className="w-7 h-7 object-cover bg-[#3c5b9a]"
              />
            </div>
            <div className="flex border p-2 rounded-full">
              <img src={google} alt="apple" className="w-7 h-7 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupSign