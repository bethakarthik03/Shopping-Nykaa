import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTimes, FaBars, FaSearch, FaShoppingBag, FaClipboardList, FaTrash, FaSpinner } from "react-icons/fa";
import { useAuth } from "./Authcontent";
import { useWishlist } from "./WishlistContext";
import { useCartlist } from "./CartlistContext";
import logo from "../Assets/Nykaalogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrder } from "../api/orderApi";
const Cart = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { wishlistItems } = useWishlist();
  const { cartlistItems, removeFromCartlist, updateQuantity, clearCart, getTotalPrice } = useCartlist();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wishlistCount = wishlistItems.length;
  const cartlistCount = cartlistItems.length;

  const parsePrice = (price) => {
    if (typeof price === 'string') {
      return parseFloat(price.replace(/₹|,/g, "")) || 0;
    }
    return parseFloat(price) || 0;
  };

  const handleQuantityChange = (id, selectedSize, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(id, selectedSize, newQuantity);
  };

  const handleRemoveItem = (id, selectedSize) => {
    removeFromCartlist(id, selectedSize);
    toast.success("Item removed from cart");
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      clearCart();
      toast.success("Cart cleared");
    }
  };
  // Checkout → Backend order create
  const handleCheckout = async () => {
    if (cartlistItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    if (!isAuthenticated) {
      toast.error("Please login to proceed with checkout!");
      navigate("/login");
      return;
    }
    setIsLoading(true);
    const items = cartlistItems.map((item) => ({
      productId: String(item._id || item.id),
      name: item.title || item.name,
      price: parseFloat(item.price.replace(/[₹,]/g, "")),
      quantity: item.quantity || 1,
      image: item.img,
      size: item.selectedSize || null,
    }));
    const total = getTotalPrice();
    const shippingDetails = {
      name: "Customer Name",
      address: "Shipping Address",
      phone: "9999999999",
    };
    try {
      const res = await createOrder({ items, total, shippingDetails });
      const orderId = res?.data?.order?._id || res?.data?.orderId;

      if (!orderId) {
        throw new Error("Order creation failed");
      }

      navigate("/checkout", {
        state: { orderId, items, total, shippingDetails },
      });
    } catch (err) {
      console.log("CHECKOUT ERROR:", err);
      toast.error("Failed to create order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const totalPrice = getTotalPrice();
  return (
    <div>
      <ToastContainer theme="colored" />
      {/* Navbar */}
      <div className="navbar-responsive">
        <div className="nav-left-responsive">
          <img src={logo} alt="logo" className="nav-logo-responsive" onClick={() => navigate("/home")} />
          <button className="hamburger-button-responsive" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav>
          <div className={`side-menu-responsive ${menuOpen ? "side-menu-open" : ""}`}>
            <div
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer", textAlign: "center" }}
              onClick={() => {
                navigate("/home");
                setMenuOpen(false);
              }}
            >
              Home
            </div>
          </div>
          {menuOpen && <div className="overlay-responsive" onClick={() => setMenuOpen(false)}></div>}
        </nav>
        <div className="nav-search-responsive">
          <input type="text" placeholder="search products..." className="nav-search-input" />
          <FaSearch style={{ color: "#0077b6" }} />
        </div>
        <div className="nav-buttons-responsive">
          <div className="nav-icon-responsive" onClick={() => navigate("/wishlist")}>
            <FaHeart style={{ fontSize: "20px", color: "white" }} />
            <span className="nav-icon-badge">{wishlistCount}</span>
          </div>
          <div className="nav-icon-responsive" onClick={() => navigate("/cart")}>
            <FaShoppingBag style={{ fontSize: "20px", color: "white" }} />
            <span className="nav-icon-badge">{cartlistCount}</span>
          </div>
          <div className="nav-icon-responsive" onClick={() => navigate("/orders")}>
            <FaClipboardList style={{ fontSize: "20px", color: "white" }} />
            
          </div>
        </div>
      </div>
      {/* Cart UI */}
      <div
        style={{
          width: "100%",
          maxWidth: windowWidth < 768 ? "100%" : windowWidth < 1024 ? "1200px" : "1400px",
          margin: "0 auto",
          padding: windowWidth < 768 ? "20px 10px" : "40px 20px",
          minHeight: "100vh",
        }}
      >
        <h2
          style={{
            fontSize: windowWidth < 768 ? "24px" : "32px",
            fontWeight: "700",
            marginBottom: windowWidth < 768 ? "20px" : "40px",
            textAlign: "center",
            color: "#2c3e50",
          }}
        >
          Your Cart
        </h2>
        {cartlistItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "50px 20px" }}>
            <FaShoppingBag size={80} color="#ccc" />
            <h3 style={{ color: "#666", marginTop: "20px" }}>Your cart is empty</h3>
            <p style={{ color: "#999", marginBottom: "30px" }}>Add some items to get started!</p>
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
          </div>
        ) : (
          <>
            {/* Clear Cart Button */}
            <div style={{ textAlign: "right", marginBottom: "20px" }}>
              <button
                onClick={handleClearCart}
                style={{
                  background: "#dc3545",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaTrash size={14} />
                Clear Cart
              </button>
            </div>
            {cartlistItems.map((item) => {
              const id = item._id || item.id;
              const quantity = item.quantity || 1;
              const itemTotal = parsePrice(item.price) * quantity;
              return (
                <div
                  key={id + "-" + item.selectedSize}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    padding: windowWidth < 768 ? "15px" : "25px",
                    display: windowWidth < 768 ? "block" : "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginBottom: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title || item.name}
                    style={{
                      width: windowWidth < 768 ? "120px" : "150px",
                      height: windowWidth < 768 ? "120px" : "150px",
                      borderRadius: "15px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: "8px", color: "#333" }}>{item.title || item.name}</h3>
                    <p style={{ color: "#666", marginBottom: "5px" }}>Size: {item.selectedSize || "N/A"}</p>
                    <p style={{ fontWeight: "bold", color: "#0077b6", marginBottom: "10px" }}>
                      Price: ₹{parsePrice(item.price).toFixed(2)}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <button
                          onClick={() => handleQuantityChange(id, item.selectedSize, quantity - 1)}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ccc",
                            background: "white",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span style={{ fontWeight: "bold", minWidth: "30px", textAlign: "center" }}>{quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(id, item.selectedSize, quantity + 1)}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ccc",
                            background: "white",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(id, item.selectedSize)}
                        style={{
                          background: "#dc3545",
                          color: "white",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <FaTrash size={12} />
                        Remove
                      </button>
                    </div>
                    <p style={{ fontWeight: "bold", color: "#28a745", fontSize: "18px" }}>
                      Total: ₹{itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* Cart Summary */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: windowWidth < 768 ? "20px" : "30px",
                marginTop: "30px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "20px", color: "#333" }}>Cart Summary</h3>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Subtotal ({cartlistItems.length} items):</span>
                <span style={{ fontWeight: "bold" }}>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>
                <span>Total:</span>
                <span style={{ color: "#0077b6" }}>₹{totalPrice.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                style={{
                  width: "100%",
                  background: isLoading ? "#ccc" : "#0077b6",
                  color: "white",
                  padding: "15px",
                  borderRadius: "25px",
                  fontWeight: "bold",
                  border: "none",
                  fontSize: "16px",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="fa-spin" />
                    Processing...
                  </>
                ) : (
                  "Proceed to Checkout"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
