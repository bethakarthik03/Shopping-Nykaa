import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes, FaBars, FaHeart, FaShoppingBag, FaClipboardList } from "react-icons/fa";
import { useAuth } from "./Authcontent";
import { useWishlist } from "./WishlistContext";
import { useCartlist } from "./CartlistContext";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Nykaalogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = ({
  product,
  mainImage,
  thumbnails = [],
  tag,
  title,
  rating,
  reviews,
  price,
  discount,
  sizes = [],
}) => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
  const { addToWishlist, wishlistItems } = useWishlist();
  const { addToCartlist, cartlistItems } = useCartlist();

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentMainImage, setCurrentMainImage] = useState(mainImage);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const wishlistCount = wishlistItems.length;
  const cartlistCount = cartlistItems.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Toast and action handlers
  const handleAddToWishlist = () => {
    if (sizes.length > 0 && !selectedSize) {
      toast.error("Please select a size before adding to wishlist.");
      return;
    }
    const itemWithSize = sizes.length > 0 ? { ...product, selectedSize } : product;
    addToWishlist(itemWithSize);
    navigate("/wishlist");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    login();
    navigate("/");
  };

  // ✅ Inline styles with responsiveness
  const styles = {
    header: {
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
    },
    logoContainer: { display: 'flex', alignItems: 'center', gap: '8px' },
    logo: { width: windowWidth < 768 ? '60px' : '80px', height: 'auto', borderRadius: '10px', cursor: 'pointer' },
    menuBtn: { background: 'none', border: 'none', fontSize: '20px', color: 'white', cursor: 'pointer' },
    nav: {
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
    },
    navItem: {
      color: '#fff',
      fontSize: windowWidth < 768 ? '18px' : '22px',
      cursor: 'pointer',
      textAlign: 'center',
      listStyle: 'none',
    },
    loginBtn: {
      backgroundColor: '#fff',
      color: '#0077b6',
      border: 'none',
      padding: windowWidth < 768 ? '8px' : '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      margin: '5px 0',
    },
    signupBtn: {
      backgroundColor: '#ffd166',
      color: 'black',
      border: 'none',
      padding: windowWidth < 768 ? '8px' : '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      margin: '5px 0',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    searchContainer: { display: 'flex', alignItems: 'center', position: 'relative' },
    searchInput: {
      padding: '8px 40px 8px 12px',
      borderRadius: '20px',
      border: 'none',
      outline: 'none',
      width: windowWidth < 768 ? '150px' : '200px',
    },
    searchIcon: { position: 'absolute', right: '10px', color: '#0077b6', cursor: 'pointer' },
    iconsContainer: { display: 'flex', alignItems: 'center', gap: windowWidth < 768 ? '10px' : '15px' },
    icon: { fontSize: windowWidth < 768 ? '20px' : '24px', color: '#fff' },
    badge: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '12px',
    },
    relative: { position: 'relative', cursor: 'pointer' },
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable theme="colored" />

      {/* ✅ Navbar identical to Home.jsx */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="logo" style={styles.logo} onClick={() => navigate("/home")} />
          <button style={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav style={styles.nav}>
          <div
            style={styles.navItem}
            onClick={() => {
              navigate("/home");
              setMenuOpen(false);
            }}
          >
            Home
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                style={styles.loginBtn}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  style={styles.loginBtn}
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  style={styles.signupBtn}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </nav>

        {menuOpen && <div style={styles.overlay} onClick={() => setMenuOpen(false)}></div>}

        <div style={styles.searchContainer}>
          <input type="text" placeholder="search products..." style={styles.searchInput} />
          <FaSearch style={styles.searchIcon} />
        </div>

        <div style={styles.iconsContainer}>
          <div style={styles.relative} onClick={() => navigate("/wishlist")}>
            <FaHeart style={styles.icon} />
            <span style={styles.badge}>{wishlistCount}</span>
          </div>
          <div style={styles.relative} onClick={() => navigate("/cart")}>
            <FaShoppingBag style={styles.icon} />
            <span style={styles.badge}>{cartlistCount}</span>
          </div>
          <div style={styles.relative} onClick={() => navigate("/orders")}>
            <FaClipboardList style={styles.icon} />
            
          </div>
        </div>
      </div>

      {/* ✅ Product details section */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "40px", margin: "50px 20px", flexWrap: "wrap" }}>
        {/* Left images */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={title}
                onClick={() => setCurrentMainImage(thumb)}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: currentMainImage === thumb ? "2px solid #0077b6" : "1px solid #ccc",
                }}
              />
            ))}
          </div>
          <img src={currentMainImage} alt={title} style={{ width: "350px", height: "auto", borderRadius: "10px" }} />
        </div>

        {/* Product Info */}
        <div style={{ maxWidth: "450px" }}>
          <p style={{ color: "#0077b6", fontWeight: "bold" }}>{tag}</p>
          <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>{title}</h2>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ color: "#f4a261", fontWeight: "bold" }}>{rating}★</span> &nbsp;
            <span style={{ color: "#888" }}>{reviews}</span>
          </div>

          <div style={{ fontSize: "20px", marginBottom: "15px" }}>
            <span style={{ color: "#0077b6", fontWeight: "bold" }}>{price}</span> &nbsp;
            <span style={{ textDecoration: "line-through", color: "#999" }}>{discount}</span>
          </div>

          {sizes.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h4>Select Size</h4>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: selectedSize === size ? "2px solid #0077b6" : "1px solid #ccc",
                      backgroundColor: selectedSize === size ? "#e0f7ff" : "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#0077b6",
                border: "2px solid #0077b6",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
              onClick={handleAddToWishlist}
            >
              ♡ Add to Wishlist
            </button>

            <button
              style={{
                backgroundColor: "#0077b6",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
              onClick={() => {
                if (sizes.length > 0 && !selectedSize) {
                  toast.error("Please select a size before adding to cart.");
                  return;
                }
                const itemWithSize = sizes.length > 0 ? { ...product, selectedSize } : product;
                addToCartlist(itemWithSize);
                toast.success("Added to Cart!");
                navigate("/cart");
              }}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;