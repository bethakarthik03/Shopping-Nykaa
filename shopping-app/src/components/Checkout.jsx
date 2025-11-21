import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaTimes, FaBars, FaSearch, FaShoppingBag, FaClipboardList, FaCreditCard, FaSpinner } from "react-icons/fa";
import { useAuth } from "./Authcontent";
import { useWishlist } from "./WishlistContext";
import { useCartlist } from "./CartlistContext";
import logo from "../Assets/Nykaalogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { updatePaymentStatus } from "../api/orderApi";

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

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { wishlistItems } = useWishlist();
  const { cartlistItems, clearCart } = useCartlist();
  const { isMobile, isTablet } = useResponsiveStyles();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const orderId = location.state?.orderId;
  const items = useMemo(() => location.state?.items || [], [location.state?.items]);
  const total = location.state?.total || 0;
  const shippingDetails = location.state?.shippingDetails || {};

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please login to continue!");
      navigate("/login");
      return;
    }
    if (!orderId || items.length === 0) {
      toast.error("No order found!");
      navigate("/cart");
      return;
    }
  }, [isAuthenticated, orderId, items, navigate]);

  const wishlistCount = wishlistItems.length;
  const cartlistCount = cartlistItems.length;

  const parsePrice = (price) => {
    if (typeof price === 'string') {
      return parseFloat(price.replace(/₹|,/g, "")) || 0;
    }
    return parseFloat(price) || 0;
  };

  // Razorpay payment handler
  const handlePayment = () => {
    if (!window.Razorpay) {
      toast.error("Razorpay not loaded!");
      return;
    }

    setIsProcessing(true);

    const options = {
      key: "rzp_test_Ra2UyMQW1hLxkl", // Replace with your Razorpay key
      amount: total * 100,
      currency: "INR",
      name: "Nykaa Shopping",
      description: "Order Payment",
      image: logo,

      handler: async function (response) {
        try {
          await updatePaymentStatus(orderId, {
            paymentId: response.razorpay_payment_id,
            paid: true,
          });

          toast.success("Payment Successful!");
          clearCart();

          // Navigate to order confirmation with order details
          navigate("/order-confirmation", {
            state: {
              orderData: {
                _id: orderId,
                items: items,
                total: total,
                shippingDetails: shippingDetails,
                status: "Paid",
              },
              paymentId: response.razorpay_payment_id,
            },
          });
        } catch (error) {
          toast.error("Payment successful but failed to update order!");
        } finally {
          setIsProcessing(false);
        }
      },

      prefill: {
        name: shippingDetails.name || "Customer",
        email: "customer@gmail.com",
        contact: shippingDetails.phone || "9999999999",
      },

      theme: { color: "#0077b6" },

      modal: {
        ondismiss: function () {
          setIsProcessing(false);
          toast.info("Payment cancelled");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <ToastContainer theme="colored" />

      {/* ✅ Navbar with responsiveness */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: window.innerWidth < 768 ? '8px 10px' : '8px 20px',
        backgroundColor: '#0077b6',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        gap: window.innerWidth < 768 ? '8px' : '12px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={logo} alt="logo" style={{ width: window.innerWidth < 768 ? '60px' : '80px', height: 'auto', borderRadius: '10px', cursor: 'pointer' }} onClick={() => navigate("/home")} />
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
              fontSize: window.innerWidth < 768 ? '18px' : '22px',
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
            width: window.innerWidth < 768 ? '150px' : '200px',
          }} />
          <FaSearch style={{ position: 'absolute', right: '10px', color: '#0077b6', cursor: 'pointer' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: window.innerWidth < 768 ? '10px' : '15px' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate("/wishlist")}>
            <FaHeart style={{ fontSize: window.innerWidth < 768 ? '20px' : '24px', color: '#fff' }} />
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
            <FaShoppingBag style={{ fontSize: window.innerWidth < 768 ? '20px' : '24px', color: '#fff' }} />
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
            <FaClipboardList style={{ fontSize: window.innerWidth < 768 ? '20px' : '24px', color: '#fff' }} />
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : isTablet ? "1200px" : "1400px",
          margin: "0 auto",
          padding: isMobile ? "20px 10px" : "40px 20px",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "24px" : "32px",
            fontWeight: "700",
            marginBottom: isMobile ? "20px" : "40px",
            textAlign: "center",
            color: "#2c3e50",
          }}
        >
          Checkout
        </h1>

        <div
          style={{
            display: isMobile ? "block" : "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "30px",
          }}
        >
          {/* Order Summary */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "30px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "#333" }}>Order Summary</h2>

            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px 0",
                  borderBottom: index < items.length - 1 ? "1px solid #eee" : "none",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "10px",
                    objectFit: "cover",
                    marginRight: "15px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>{item.name}</h4>
                  <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
                    Size: {item.size || "N/A"} | Qty: {item.quantity}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: "0", fontWeight: "bold", color: "#0077b6" }}>
                    ₹{(parsePrice(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "2px solid #eee",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Subtotal:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Shipping:</span>
                <span style={{ color: "#28a745" }}>Free</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#0077b6",
                }}
              >
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "30px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              height: "fit-content",
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "#333" }}>Payment Details</h2>

            <div style={{ marginBottom: "20px" }}>
              <FaCreditCard style={{ fontSize: "40px", color: "#0077b6", marginBottom: "10px" }} />
              <p style={{ color: "#666", marginBottom: "20px" }}>
                You will be redirected to Razorpay secure payment gateway to complete your purchase.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>Shipping Address</h4>
              <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "10px" }}>
                <p style={{ margin: "0", fontWeight: "bold" }}>{shippingDetails.name}</p>
                <p style={{ margin: "5px 0", color: "#666" }}>{shippingDetails.address}</p>
                <p style={{ margin: "0", color: "#666" }}>Phone: {shippingDetails.phone}</p>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              style={{
                width: "100%",
                background: isProcessing ? "#ccc" : "#0077b6",
                color: "white",
                padding: "15px",
                borderRadius: "25px",
                fontWeight: "bold",
                border: "none",
                fontSize: "16px",
                cursor: isProcessing ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              {isProcessing ? (
                <>
                  <FaSpinner className="fa-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  <FaCreditCard />
                  Pay ₹{total.toFixed(2)}
                </>
              )}
            </button>

            <button
              onClick={() => navigate("/cart")}
              style={{
                width: "100%",
                background: "transparent",
                color: "#0077b6",
                padding: "10px",
                borderRadius: "25px",
                border: "2px solid #0077b6",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
