import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpass] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_API);
    if (password === cpassword) {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/vsignin`,
        {
          name,
          email,
          password,
          cpassword,
        }
      );
      if (res.data.success) {
        console.log(res.data.message);
        alert("andr avi gya");
        setName("");
        setEmail("");
        setPassword("");
        setCpass("");
        navigate("/login")
      } else {
        console.log(res.data.message);
        alert("unique name or email req.");
      }
    }
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              onChange={(e) => setCpass(e.target.value)}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <a
              href=""
              onClick={handleSignin}
              className="bg-emerald-600 text-white  block border border-emerald-900  p-3 rounded mb-4 w-full text-center"
            >
              Sign In
            </a>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="/login"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
