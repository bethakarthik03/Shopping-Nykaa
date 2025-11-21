import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimes, FaBars, FaHeart, FaShoppingBag, FaClipboardList, FaSearch } from "react-icons/fa";
import { useAuth } from "./Authcontent";
import { useWishlist } from "./WishlistContext";
import { useCartlist } from "./CartlistContext";
import logo from "../Assets/Nykaalogo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Responsive hook
const useResponsiveStyles = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet };
};

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { wishlistItems } = useWishlist();
  const { cartlistItems } = useCartlist();
  const { isMobile, isTablet } = useResponsiveStyles();

  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orderData = location.state?.orderData;
  const paymentId = location.state?.paymentId;

  const wishlistCount = wishlistItems.length;
  const cartlistCount = cartlistItems.length;

  if (!orderData) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Order Not Found</h2>
        <button onClick={() => navigate("/home")}>Go to Home</button>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer theme="colored" />

      {/* ✅ Navbar with responsiveness */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: windowWidth < 768 ? '8px 10px' : '8px 20px',
        backgroundColor: '#0077b6',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        gap: windowWidth < 768 ? '8px' : '12px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={logo} alt="logo" style={{ width: windowWidth < 768 ? '60px' : '80px', height: 'auto', borderRadius: '10px', cursor: 'pointer' }} onClick={() => navigate("/home")} />
          <button style={{ background: 'none', border: 'none', fontSize: '20px', color: 'white', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav style={{
          position: 'fixed',
          top: 0,
          left: menuOpen ? '0' : '-270px',
          width: '250px',
          height: '100vh',
          backgroundColor: '#0077b6',
          paddingTop: '70px',
          paddingLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transition: 'left 0.3s ease-in-out',
          zIndex: 1001,
        }}>
          <div
            style={{
              color: '#fff',
              fontSize: windowWidth < 768 ? '18px' : '22px',
              cursor: 'pointer',
              textAlign: 'center',
              listStyle: 'none',
            }}
            onClick={() => {
              navigate("/home");
              setMenuOpen(false);
            }}
          >
            Home
          </div>
        </nav>

        {menuOpen && <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }} onClick={() => setMenuOpen(false)}></div>}

        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <input type="text" placeholder="search products..." style={{
            padding: '8px 40px 8px 12px',
            borderRadius: '20px',
            border: 'none',
            outline: 'none',
            width: windowWidth < 768 ? '150px' : '200px',
          }} />
          <FaSearch style={{ position: 'absolute', right: '10px', color: '#0077b6', cursor: 'pointer' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: windowWidth < 768 ? '10px' : '15px' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate("/wishlist")}>
            <FaHeart style={{ fontSize: windowWidth < 768 ? '20px' : '24px', color: '#fff' }} />
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
            }}>{wishlistCount}</span>
          </div>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate("/cart")}>
            <FaShoppingBag style={{ fontSize: windowWidth < 768 ? '20px' : '24px', color: '#fff' }} />
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
            }}>{cartlistCount}</span>
          </div>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate("/orders")}>
            <FaClipboardList style={{ fontSize: windowWidth < 768 ? '20px' : '24px', color: '#fff' }} />
          </div>
        </div>
      </div>

      {/* Order Confirmation */}
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : isTablet ? "1200px" : "1400px",
          margin: "0 auto",
          padding: isMobile ? "20px 10px" : "40px 20px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            background: "white",
            borderRadius: "20px",
            padding: isMobile ? "30px 20px" : "50px 40px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <FaCheckCircle style={{ fontSize: "80px", color: "#28a745", marginBottom: "20px" }} />
          <h1 style={{ color: "#28a745", marginBottom: "10px" }}>Order Confirmed!</h1>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "15px", color: "#333" }}>Order Details</h3>
            <p><strong>Order ID:</strong> {orderData._id}</p>
            <p><strong>Payment ID:</strong> {paymentId || "N/A"}</p>
            <p><strong>Total Amount:</strong> ₹{orderData.total?.toFixed(2) || "0.00"}</p>
            <p><strong>Status:</strong> {orderData.status}</p>
          </div>

          <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "15px", color: "#333" }}>Shipping Details</h3>
            <p><strong>Name:</strong> {orderData.shippingDetails?.name}</p>
            <p><strong>Address:</strong> {orderData.shippingDetails?.address}</p>
            <p><strong>Phone:</strong> {orderData.shippingDetails?.phone}</p>
          </div>

          <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "15px", color: "#333" }}>Items Ordered</h3>
            {orderData.items?.map((item, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>{item.name} (x{item.quantity})</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/home")}
              style={{
                background: "#0077b6",
                color: "white",
                padding: "12px 30px",
                borderRadius: "25px",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Continue Shopping
            </button>
            {isAuthenticated && (
              <button
                onClick={() => navigate("/orders")}
                style={{
                  background: "#28a745",
                  color: "white",
                  padding: "12px 30px",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                View My Orders
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
