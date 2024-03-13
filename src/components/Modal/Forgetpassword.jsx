import React from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import Logo from "../Logo";

const Forgetpassword = ({ closeModal, setCurrentForm }) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 top-0 z-10 bg-white bg-opacity-60 w-full h-screen flex flex-col justify-center`}
    >
      <motion.form
        class="relative shadow-md bg-white w-[500px] mx-auto  lg:h-[600px] flex flex-col justify-center px-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <div className="flex justify-between items-center mb-5">
          <Logo />
          <IoIosClose
            onClick={closeModal}
            className="absolute top-8 right-8 text-right text-black w-8 h-8 cursor-pointer"
          />
        </div>
        <h2 className="text-left text-2xl font-bold mb-5">
          Forgot your password?
        </h2>{" "}
        <span className="block text-left mb-2 text-xs text-gray-900">
          No problem. Just enter your email address below — we’ll send you a
          link to reset it.
        </span>
        <div class="mb-5">
          <label
            for="email"
            class="block text-left mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            class="border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 outline-none"
            placeholder="Email"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-black hover:bg-[#222] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5"
        >
          Reset password
        </button>
        <div className="flex gap-8 items-center">
          <p
            onClick={() => setCurrentForm("login")}
            className="text-left cursor-pointer underline mb-5"
          >
            Sign in
          </p>
        
          <p
            onClick={() => setCurrentForm("register")}
            className="text-left cursor-pointer underline mb-5"
          >
            Create a new account
          </p>
        </div>
      </motion.form>
    </div>
  );
};

export default Forgetpassword;
