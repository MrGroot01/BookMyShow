import { useState } from "react";
import "./Login.css";

function LoginModal({ close }) {
  const [isRegister, setIsRegister] = useState(false);
  const [forgot, setForgot] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForgot = () => {
    if (!form.email) {
      setError("Enter your email to reset password");
      return;
    }

    alert("Password reset link sent (demo) 📩");
    setForgot(false);
    setError("");
  };

  return (
    <div className="overlay" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <span className="close-btn" onClick={close}>×</span>

        <h2 className="title">
          {forgot
            ? "Reset Password 🔐"
            : isRegister
            ? "Create Account 🚀"
            : "Welcome Back 👋"}
        </h2>

        {error && <p className="error">{error}</p>}

        {/* FORGOT PASSWORD UI */}
        {forgot ? (
          <>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>

            <button className="continue-btn" onClick={handleForgot}>
              Send Reset Link
            </button>

            <p className="switch">
              Back to{" "}
              <span onClick={() => setForgot(false)}>
                Login
              </span>
            </p>
          </>
        ) : !isRegister ? (
          <>
            {/* LOGIN */}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>

            {/* FORGOT PASSWORD LINK */}
            <p className="forgot" onClick={() => setForgot(true)}>
              Forgot Password?
            </p>

            <button className="continue-btn">
              Login
            </button>

            <div className="divider"><span>OR</span></div>

            <button className="social-btn google">
              <img src="https://img.icons8.com/color/24/google-logo.png" />
              Continue with Google
            </button>

            <p className="switch">
              New user?{" "}
              <span onClick={() => setIsRegister(true)}>
                Register
              </span>
            </p>
          </>
        ) : (
          <>
            {/* REGISTER */}
            <div className="input-box">
              <input name="name" placeholder="Full Name" onChange={handleChange} />
            </div>

            <div className="input-box">
              <input name="email" placeholder="Email" onChange={handleChange} />
            </div>

            <div className="input-box">
              <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>

            <button className="continue-btn">
              Register
            </button>

            <p className="switch">
              Already have an account?{" "}
              <span onClick={() => setIsRegister(false)}>
                Login
              </span>
            </p>
          </>
        )}

        <p className="terms">
          By continuing, you agree to <span>Terms</span> &{" "}
          <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;