import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../Assets/backgroundimage.jpg';
const Fpassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetLink = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email address");
    } else {
      toast.success(`Reset link sent to ${email}`);
      setTimeout(() => {
        navigate("/rPassword");
      }, 1500);
    }
  };

  const handleBackLink = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <div style={styles.container}>
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnHover draggable theme="colored" />
      <div style={styles.card}>
        <h2 style={styles.heading}>Forgot Password</h2>

        <div style={styles.formContainer}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleResetLink} style={styles.resetButton}>
            Send Reset Link
          </button>
          <button onClick={handleBackLink} style={styles.backButton}>Back to Login page</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "25px",
    color: "#333",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  resetButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background 0.3s",
  },
  backButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background 0.3s",
  }
};

export default Fpassword;
