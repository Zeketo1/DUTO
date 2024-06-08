import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { login, signUp, googleSignIn } from "../../../../firebase";
import { Link } from "react-router-dom";

const Login = ({ setShowLogin }) => {
  const [loginState, setLoginState] = useState("REGISTER");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async () => {
    if (loginState === "LOGIN") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
  };

  const handleGoogleSignIn = async () => {
    await googleSignIn();
  };

  const authUser = () => {
    setIsLoading(true);
    setTimeout(() => {
      user_auth();
    }, 3000);
  };

  const loginContainerRef = useRef();
  let loginRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!loginRef.current.contains(e.target)) {
        loginContainerRef.current.classList.add("animate-ping");
        setTimeout(() => {
          setShowLogin(false);
        }, 800);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={loginContainerRef}
      className="top-0 z-[50] fixed justify-center items-center bg-slate-950/30 pt-[6.04rem] w-full min-h-[100vh]"
    >
      <div ref={loginRef} className="bg-white m-auto w-[300px] h-fit">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setLoginState("LOGIN")}
            className={` p-3 w-[50%] ${loginState === "LOGIN" && "bg-slate-900/5"}`}
          >
            LOGIN
          </button>
          <button
            onClick={() => setLoginState("REGISTER")}
            className={` p-3 w-[50%] ${loginState === "REGISTER" && "bg-slate-900/5"}`}
          >
            REGISTER
          </button>
        </div>
        <div className="flex flex-col gap-3 p-[30px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action=""
          >
            <div className="flex flex-col gap-3 font-thin">
              {loginState === "REGISTER" && (
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="p-3 border w-[100%] text-[#909090] text-[13px] outline-0"
                  placeholder="User Name"
                />
              )}
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="p-3 border w-[100%] text-[#909090] text-[13px] outline-0"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="p-3 border w-[100%] text-[#909090] text-[13px] outline-0"
                placeholder="Password"
              />
              {loginState === "REGISTER" && (
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="p-3 border w-[100%] text-[#909090] text-[13px] outline-0"
                  placeholder="Repeat Password"
                />
              )}
            </div>
            {loginState === "REGISTER" && (
              <div className="font-thin text-[#808080]">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="text-black">privacy policy.</span>
              </div>
            )}
            <div className="font-bold text-[12px] text-white tracking-[.15em]">
              {isLoading ? (
                <button className="flex justify-center items-center bg-[#080808] pl-[ w-full h-12 36px]">
                  <AiOutlineLoading className="animate-spin" />
                </button>
              ) : (
                <button
                  onClick={authUser}
                  className="flex justify-center items-center bg-[#080808] pl-[ w-full h-12 36px]"
                >
                  {loginState === "REGISTER" ? "REGISTER" : "LOGIN"}
                </button>
              )}
            </div>
            <Link className="pl-14" onClick={handleGoogleSignIn}>
              Sign In With google
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
