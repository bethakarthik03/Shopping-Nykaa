import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontent";
import backgroundImage from '../Assets/backgroundimage.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {
    const[formData,setFormData]=useState({
        newPassword:"",
        confirmPassword:"",
    })
    const navigate = useNavigate(); 

    const[error,setError]=useState("");
    const[success,setSuccess]=useState("")

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setError("");
        setSuccess("");
    };
    const { resetPassword } = useAuth();
    const handleSubmit=(e)=>{
        e.preventDefault();
        resetPassword();
        const{newPassword,confirmPassword}=formData;


        if (newPassword.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        else if (newPassword !=="" && confirmPassword!=="") {
            toast.error("Passwords do not match");
            return;
        }

        toast.success("Password reset successfully!");
        setError("");
        setSuccess("");

        console.log("New password set:", newPassword);

        setTimeout(() => {

        navigate("/");
        }, 1500);

    }
  return (
    <div style={styles.container}>
        <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnHover draggable theme="colored" />
        <div style={styles.card}>
            <h2 style={styles.heading}>Reset Password</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label htmlFor="newPassword" style={styles.label}>New Password: </label>
                <input type="password" id='newPassword' placeholder="Enter new password" value={formData.newPassword} onChange={handleChange} style={styles.input} />
                <label htmlFor="confirmPassword" style={styles.label} value={formData.confirmPassword} onChange={handleChange}>Confirm Password: </label>
                <input type="password" id='confirmPassword' placeholder="Enter new password" style={styles.input} />
                {error && <p style={styles.error}>{error}</p>}
                {success && <p style={styles.success}>{success}</p>}
                <button type="submit" style={styles.button}>Reset Password</button>
            </form>
        </div>
    </div>
  )
}

const styles={
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    card:{
        backgroundColor:"#fff",
        padding:"30px",
        borderRadius:"12px",
        boxShadow:"0px 4px 12px rgba(0,0,0,0.1)",
        width:"350px",
        textAlign:"center"
    },
    heading:{
        marginBottom:"20px",
        color:"#333",
    },
    form:{
        display:"flex",
        flexDirection:"column",
        gap:"12px",
    },
    label:{
        textAlign:"left",
        fontWeight:"bold",
        fontSize:"14px",  
    },
    input:{
        padding:"10px",
        borderRadius:"6px",
        border:"1px solid #ccc",
        fontSize:"14px",
        outline:"none",
    },
    button:{
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "14px",
        marginTop: "10px",
    },
    error:{
        color:"red",
        fontSize:"13px",
    },
    success:{
        color:"green",
        fontSize:"13px",
    },
}

export default ResetPassword