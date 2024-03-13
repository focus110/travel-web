import React from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import Logo from "../Logo";

const Register = ({ closeModal, setCurrentForm }) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 top-0 z-10 bg-white bg-opacity-60 w-full h-screen flex flex-col justify-center`}
    >
      <motion.form
        class="relative shadow-md bg-white w-[500px] mx-auto h-[600px] flex flex-col justify-center px-16"
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
          Join to unlock the best of Tripwise
        </h2>
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
        <div class="mb-2">
          <label
            for="password"
            class="block text-left mb-2 text-sm font-medium text-gray-900"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            class="border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 outline-none"
            required
          />
        </div>

        <p
          onClick={() => setCurrentForm("forgetpassword")}
          className="text-left cursor-pointer underline mb-5"
        >
          Forgot password?
        </p>

        <button
          type="submit"
          class="text-white bg-black hover:bg-[#222] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5"
        >
          Register new account
        </button>
        <p class="block text-center mb-2 text-sm font-medium text-gray-900">
          Already a member?
        </p>
        <p className="mb-5">
          <span
            onClick={() => setCurrentForm("login")}
            className="font-bold underline cursor-pointer"
          >
            Sign in
          </span>{" "}
          using your Tripwise account.
        </p>
        <span className="block text-center mb-2 text-xs text-gray-900">
          By proceeding, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>{" "}
          and confirm you have read our{" "}
          <a href="#" className="underline">
            Privacy and Cookie Statement
          </a>{" "}
          .
        </span>
      </motion.form>
    </div>
  );
};

export default Register;
