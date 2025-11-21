import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../../Assets/backgroundimage.jpg";
import { registerUser } from "../../api/userApi";

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
    width: "30%",
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "1px 1px 8px rgba(0,0,0,0.065)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "darkcyan",
    textTransform: "uppercase",
    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  label: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    backgroundColor: "#06d6a0",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
  },
  loginSection: {
    marginTop: "20px",
    textAlign: "center",
  },
  loginLink: {
    width: "100%",
    marginTop: "12px",
    padding: "12px",
    backgroundColor: "#0077b6",
    color: "white",
    borderRadius: "8px",
    display: "inline-block",
    textDecoration: "none",
    fontWeight: "600",
  },
};

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    cPass: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fname.trim()) return toast.error("First name is required");
    if (!formData.lname.trim()) return toast.error("Last name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!validateEmail(formData.email)) return toast.error("Invalid email");
    if (!formData.pass.trim()) return toast.error("Password is required");
    if (formData.pass.length < 8)
      return toast.error("Password must be at least 8 characters");
    if (!formData.cPass.trim())
      return toast.error("Confirm your password");
    if (formData.pass !== formData.cPass)
      return toast.error("Passwords do not match");

    const payload = {
      name: `${formData.fname} ${formData.lname}`,
      email: formData.email,
      password: formData.pass,
    };

    try {
      await registerUser(payload);
      toast.success("Signup Successful!");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div style={styles.background}>
      <ToastContainer theme="colored" />
      <div style={styles.card}>
        <h3 style={styles.title}>Sign Up</h3>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>First Name:</label>
            <input id="fname" value={formData.fname} onChange={handleChange} style={styles.input} />

            <label style={styles.label}>Last Name:</label>
            <input id="lname" value={formData.lname} onChange={handleChange} style={styles.input} />

            <label style={styles.label}>Email:</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} style={styles.input} />

            <label style={styles.label}>Password:</label>
            <input type="password" id="pass" value={formData.pass} onChange={handleChange} style={styles.input} />

            <label style={styles.label}>Confirm Password:</label>
            <input type="password" id="cPass" value={formData.cPass} onChange={handleChange} style={styles.input} />

            <button style={styles.button}>Sign Up</button>
          </div>
        </form>

        <div style={styles.loginSection}>
          <p>Already have an account?</p>
          <Link to="/" style={styles.loginLink}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
