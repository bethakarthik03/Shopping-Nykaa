import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../../Assets/backgroundimage.jpg";
import { loginUser } from "../../api/userApi";
import { useAuth } from "../Authcontent"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const { login } = useAuth(); 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Screen resize listener
  useEffect(() => {
    const resizeHandler = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const getResponsiveWidth = () => {
    if (windowWidth < 480) return "95%";
    if (windowWidth < 768) return "90%";
    if (windowWidth < 1024) return "40%";
    return "25%";
  };

  const styles = {
    background: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: getResponsiveWidth(),
      background: "white",
      padding: windowWidth < 480 ? "20px" : "40px",
      borderRadius: "10px",
      boxShadow: "1px 1px 8px rgba(0,0,0,0.065)",
    },
    title: {
      textAlign: "center",
      fontWeight: "bold",
      color: "darkcyan",
      textTransform: "uppercase",
      textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
      marginBottom: "20px",
      fontSize:
        windowWidth < 480
          ? "18px"
          : windowWidth < 768
          ? "20px"
          : windowWidth < 1024
          ? "22px"
          : "24px",
    },
    inputGroup: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginTop: "10px",
      fontSize: windowWidth < 480 ? "14px" : "16px",
    },
    input: {
      marginTop: "5px",
      padding: windowWidth < 480 ? "12px" : "10px",
      fontSize: windowWidth < 480 ? "15px" : "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      outline: "none",
    },
    primaryBtn: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#0077b6",
      border: "none",
      borderRadius: "10px",
      color: "#fff",
      fontSize: "17px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "25px",
      transition: "0.3s ease-in-out",
      boxShadow: "0 4px 12px rgba(0,119,182,0.3)",
    },
    successBtn: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#06d6a0",
      border: "none",
      borderRadius: "10px",
      color: "white",
      fontSize: "17px",
      fontWeight: "600",
      marginTop: "30px",
      cursor: "pointer",
      transition: "0.3s ease-in-out",
      boxShadow: "0 4px 12px rgba(6,214,160,0.3)",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
    },
    googleBtn: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#4285F4",
      border: "none",
      borderRadius: "10px",
      color: "white",
      fontSize: "17px",
      fontWeight: "600",
      marginTop: "15px",
      cursor: "pointer",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
    },
    forgotPassword: {
      display: "flex",
      justifyContent: "center",
      gap: "5px",
      fontSize: windowWidth < 480 ? "12px" : "14px",
      marginTop: "20px",
    },
    errorText: {
      color: "red",
      fontSize: "14px",
      marginTop: "5px",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password)
      return toast.warning("Please fill both email and password");

    if (!emailRegex.test(email))
      return toast.error("Invalid email");

    if (password.length < 8)
      return toast.error("Password must be at least 8 characters");

    setIsSubmitting(true);

    try {
      const res = await loginUser({ email, password });

      // Save JWT token & user data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 🔥 Update AuthContext state
      login(res.data.token);

      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.background}>
      <ToastContainer theme="colored" />

      <div style={styles.card}>
        <h3 style={styles.title}>Sign In</h3>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label style={styles.label}>Password:</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" style={styles.primaryBtn} disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div style={styles.forgotPassword}>
          <span>Forgot Password?</span>
          <a href="/fpassword" style={{ color: "#0077b6" }}>
            Click here
          </a>
        </div>

        <Link to="/signup" style={styles.successBtn}>
          Sign Up
        </Link>

        <Link to="/google-login" style={styles.googleBtn}>
          Sign In with Google
        </Link>
      </div>
    </div>
  );
};

export default Login;