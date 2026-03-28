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

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // REGISTER FUNCTION
  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Register Successful 🎉");
    setError("");
    setIsRegister(false);
  };

  // LOGIN FUNCTION
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }

    if (
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      alert("Login Successful 🎉");
      setError("");
      close(); // close popup
    } else {
      setError("Invalid email or password");
    }
  };

  // FORGOT PASSWORD
  
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

        {/* CLOSE */}
        <span className="close-btn" onClick={close}>×</span>

        {/* TITLE */}
        <h2 className="title">
          {forgot
            ? "Reset Password 🔐"
            : isRegister
            ? "Create Account 🚀"
            : "Welcome Back 👋"}
        </h2>

        {/* ERROR */}
        {error && <p className="error">{error}</p>}

        {/* FORGOT PASSWORD */}
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
              <span onClick={() => setForgot(false)}>Login</span>
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

            <p className="forgot" onClick={() => setForgot(true)}>
              Forgot Password?
            </p>

            <button className="continue-btn" onClick={handleLogin}>
              Login
            </button>

            <div className="divider"><span>OR</span></div>

            <button className="social-btn google">
              <img
                src="https://img.icons8.com/color/24/google-logo.png"
                alt="google"
              />
              Continue with Google
            </button>

            <p className="switch">
              New user?{" "}
              <span onClick={() => setIsRegister(true)}>Register</span>
            </p>
          </>
        ) : (
          <>
            {/* REGISTER */}
            <div className="input-box">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button className="continue-btn" onClick={handleRegister}>
              Register
            </button>

            <p className="switch">
              Already have an account?{" "}
              <span onClick={() => setIsRegister(false)}>Login</span>
            </p>
          </>
        )}

        {/* TERMS */}
        <p className="terms">
          By continuing, you agree to <span>Terms</span> &{" "}
          <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;