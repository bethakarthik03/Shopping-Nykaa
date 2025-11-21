import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./Authcontent";
import { ToastContainer, toast } from "react-toastify";
import { auth, provider, signInWithPopup } from "../firebase";
import bgImage from "../Assets/backgroundimage.jpg";
import "react-toastify/dist/ReactToastify.css";

const Googlelogin = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Responsive listener
  useEffect(() => {
    const resizeHandler = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // Dynamic responsive width for login box
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
      transition: "0.3s ease-in-out",
      boxShadow: "0 4px 12px rgba(66,133,244,0.3)",
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
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log("User Logged In:", result.user);
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          login();
          navigate("/home");
        }, 1500);
      })
      .catch(error => {
        console.log(error);
        toast.error("Login failed. Please try again.");
      });
  };

  return (
    <div style={styles.background}>
      <ToastContainer theme="colored" />

      <div style={styles.card}>
        <h3 style={styles.title}>Sign In</h3>

        <button style={styles.googleBtn} onClick={handleGoogleLogin}>
          Sign In with Google
        </button>

        <Link to="/signup" style={styles.successBtn}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Googlelogin;
