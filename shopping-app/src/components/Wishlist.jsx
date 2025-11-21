import React, { useState, useEffect } from "react";
import { useAuth } from "./Authcontent";
import { useWishlist } from "./WishlistContext";
import { useCartlist } from "./CartlistContext";
import { FaTimes, FaBars, FaSearch, FaHeart, FaClipboardList, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Nykaalogo.png";

const Wishlist = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { cartlistItems, addToCartlist } = useCartlist();

  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    login();
    navigate("/");
  };

  const wishlistCount = wishlistItems.length;
  const cartlistCount = cartlistItems.length;

  return (
    <div>
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

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "#fff",
                  color: "#0077b6",
                  border: "none",
                  padding: windowWidth < 768 ? '8px' : '10px',
                  borderRadius: '5px',
                  cursor: "pointer",
                  fontWeight: "bold",
                  margin: '5px 0',
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  style={{
                    backgroundColor: "#fff",
                    color: "#0077b6",
                    border: "none",
                    padding: windowWidth < 768 ? '8px' : '10px',
                    borderRadius: '5px',
                    cursor: "pointer",
                    fontWeight: "bold",
                    margin: '5px 0',
                  }}
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  style={{
                    backgroundColor: "#ffd166",
                    color: "black",
                    border: "none",
                    padding: windowWidth < 768 ? '8px' : '10px',
                    borderRadius: '5px',
                    cursor: "pointer",
                    fontWeight: "bold",
                    margin: '5px 0',
                  }}
                >
                  Sign Up
                </button>
              </>
            )}
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

      {/* --- WISHLIST CONTENT --- */}
      <div className="wishlist-content-responsive">
        <h2 className="wishlist-title-responsive">Your WishList</h2>

        {wishlistItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "50px 20px" }}>
            <FaHeart size={80} color="#ccc" />
            <h3 style={{ color: "#666", marginTop: "20px" }}>Your wishlist is empty</h3>
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
          <div className="wishlist-grid-responsive">
            {wishlistItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="wishlist-item-responsive">
                <img src={item.img} alt={item.name} className="wishlist-item-img" />

                <h3 className="wishlist-item-name">{item.name}</h3>
                <p className="wishlist-item-size">Size: {item.selectedSize}</p>

                <button
                  className="wishlist-item-btn"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={() => {
                    addToCartlist(item);
                    removeFromWishlist(item.id);
                    navigate("/cart");
                  }}
                >
                  Move to Cart
                </button>

                <button
                  className="wishlist-item-btn"
                  style={{ backgroundColor: "#ff4b4b", color: "white" }}
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;