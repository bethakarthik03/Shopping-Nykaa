import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaBars, FaHeart, FaShoppingBag, FaClipboardList } from 'react-icons/fa';
import { useAuth } from './Authcontent';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/Nykaalogo.png';
import fashion from '../Assets/Nykaafashion.png';
import westernWear from '../Assets/westernwear.jpeg';
import iWear from '../Assets/indianwear.jpeg';
import men from '../Assets/men.jpeg';
import kids from '../Assets/kids.jpeg';
import bags from '../Assets/bags.jpeg';
import shoes from '../Assets/shoes.jpeg';
import styli from '../Assets/stylimendark.jpeg';
import campus from '../Assets/campussutra.jpeg';
import garge from '../Assets/gargego.jpeg';
import puma from '../Assets/puma.jpeg';
import mabli from '../Assets/Mabish.webp';
import peach from '../Assets/peachself.jpeg';
import stylum from '../Assets/stylum.webp';
import chaabra from '../Assets/chaabra.webp';
import stylobug from '../Assets/Stylobug.jpeg';
import aj from '../Assets/AjDezines.jpeg';
import bitiya from '../Assets/bitiyabhama.jpeg';
import kisah from '../Assets/Kisah.jpeg';
import babydress from '../Assets/babydress.jpg';
import kidswear from '../Assets/kidswear.jpg';
import childboy from '../Assets/childboy.jpg';
import childshirt from '../Assets/childshirt.jpg';
import lipbalm from '../Assets/lipbalm.jpg';
import perfume from '../Assets/perfume.jpg';
import shampoo from '../Assets/shampoo.jpg';
import sunscreen from '../Assets/sunscreen.jpg';
import bagsstyli from '../Assets/bagsstyli.jpeg';
import bagstommy from '../Assets/bagstommy.jpeg';
import bagszouk from '../Assets/bagszouk.jpeg';
import bagsmouchi from '../Assets/bagsmouchi.jpeg';
import shoescampus from '../Assets/shoescampus.jpeg';
import shoespuma from '../Assets/shoespuma.jpeg';
import shoesredtape from '../Assets/shoesredtape.jpeg';
import shoesreebok from '../Assets/shoesreebok.jpeg';
import shoesformal from '../Assets/fromalshoes.jpg';
import shoesrunning from '../Assets/runningshoes.jpg';
import shoesheels from '../Assets/footheels.jpg';
import shoeswomen from '../Assets/footwearwomens.jpg';
import jeans from '../Assets/jeans.jpg';
import tshirt from '../Assets/tshirt.jpg';
import formal from '../Assets/formal.jpg';
import trackpants from '../Assets/trackpants.jpg';
import shorts from '../Assets/shorts.jpg';
import casual from '../Assets/casual.jpg';
import ethnicwear from '../Assets/ethnicwear.jpg';
import westernWearImg from '../Assets/westernwear.jpg';
import dress from '../Assets/dress.jpg';
import sareewear from '../Assets/sareewear.jpg';
import { useWishlist } from './WishlistContext';
import { useCartlist } from './CartlistContext';
import Footer from './Footer';

const mensProducts = [
  { id: 'styli', img: styli, title: 'Styli', desc: 'Men Dark Blue Balloon Fit Jeans', price: '₹1,440', old: '₹1,999', link: '/styli' },
  { id: 'campus', img: campus, title: 'Campus Sutra', desc: 'Black Solid Casual Shirt', price: '₹608', old: '₹1,899', link: '/campus' },
  { id: 'garage', img: garge, title: 'Indian Garage Co.', desc: 'Multi Striped Full Shirt', price: '₹753', old: '₹1,749', link: '/garage' },
  { id: 'puma', img: puma, title: 'Puma', desc: 'Unisex White Sneakers', price: '₹1,800', old: '₹4,499', link: '/puma' },
  { id: 'jeans', img: jeans, title: 'Mast & Harbour', desc: 'Men Slim Fit Jeans', price: '₹949.99', old: '₹1,199', link: '/jeans' },
  { id: 't-shirts', img: tshirt, title: 'Mast & Harbour', desc: 'Men Cotton T-Shirt', price: '₹249.99', old: '₹399', link: '/t-shirts' },
  { id: 'casualwear', img: casual, title: 'Mast & Harbour', desc: 'Men Cotton Striped Casual Shirt', price: '₹299.99', old: '₹499', link: '/casualwear' },
  { id: 'shorts', img: shorts, title: 'Mast & Harbour', desc: 'Men Cotton Shorts', price: '₹199.99', old: '₹349', link: '/shorts' },
  { id: 'formalwear', img: formal, title: 'Mast & Harbour', desc: 'Men Formal Shirt', price: '₹499.99', old: '₹699', link: '/formalwear' },
  { id: 'trackpants', img: trackpants, title: 'Mast & Harbour', desc: 'Men Track Pants', price: '₹349.99', old: '₹499', link: '/trackpants' },
];

const womensProducts = [
  { id: 'mabish', img: mabli, title: 'Mabish By Sonal', desc: 'Maroon Printed Crop Top', price: '₹1,976', old: '₹5,199', link: '/mabish' },
  { id: 'libas', img: peach, title: 'Libas', desc: 'Embroidered Peach Kurta & Pant', price: '₹4,880', old: '₹7,999', link: '/libas' },
  { id: 'stylum', img: stylum, title: 'Stylum', desc: 'Blue Ajrakh Printed Kurta', price: '₹1,334', old: '₹4,599', link: '/stylum' },
  { id: 'chaabra', img: chaabra, title: 'Chhabra 555', desc: 'Cream Embroidered Crop Top', price: '₹3,920', old: '₹11,200', link: '/chaabra' },
  { id: 'ethnicwear', img: ethnicwear, title: 'Ethnic Wear', desc: 'Women Embroidered Kurti', price: '₹499.99', old: '₹699', link: '/ethnicwear' },
  { id: 'westernwear', img: westernWearImg, title: 'Western Wear', desc: 'Women Floral Print Top', price: '₹399.99', old: '₹599', link: '/westernwear' },
  { id: 'dress', img: dress, title: 'Dress', desc: 'Women Casual Dress', price: '₹599.99', old: '₹799', link: '/dress' },
  { id: 'sareewear', img: sareewear, title: 'Saree Wear', desc: 'Women Traditional Saree', price: '₹799.99', old: '₹1,599', link: '/sareewear' },
];

const kidsProducts = [
  { id: 'kidsstylo', img: stylobug, title: 'Stylo Bug', desc: 'Girls Kurta & Pant Yellow', price: '₹1,440', old: '₹3,599', link: '/kidsstylo' },
  { id: 'kidsaj', img: aj, title: 'AJ Dezines', desc: 'Foil Printed Sleeveless Kurta', price: '₹1,800', old: '₹3,999', link: '/kidsaj' },
  { id: 'kidsbitiya', img: bitiya, title: 'Bitiya By Bhama', desc: 'Ethnic Yellow Floral Kurta', price: '₹1,350', old: '₹4,499', link: '/kidsbitiya' },
  { id: 'kidskisah', img: kisah, title: 'Kisah', desc: 'Cream Nehru Jacket', price: '₹1,499', old: '₹3,399', link: '/kidskisah' },
  { id: 'babydress', img: babydress, title: 'Baby Dress', desc: 'Pink cotton romper', price: '₹199', old: '₹299', link: '/babydress' },
  { id: 'childboywear', img: childboy, title: 'Child Boy Wear', desc: 'Blue denim jacket', price: '₹349', old: '₹499', link: '/childboywear' },
  { id: 'childdress', img: childshirt, title: 'Child Shirt', desc: 'Blue party shirt', price: '₹299', old: '₹399', link: '/childdress' },
  { id: 'kidswear', img: kidswear, title: 'Kids Wear', desc: 'Green cotton T-shirt with matching shorts', price: '₹249.99', old: '₹399', link: '/kidswear' },
];

const bagsProducts = [
  { id: 'bagsstyli', img: bagsstyli, title: 'Styli Bag', desc: 'Print Flap Handbag', price: '₹1,332', old: '₹2,049', link: '/bagsstyli' },
  { id: 'bagstommy', img: bagstommy, title: 'Tommy Hilfiger', desc: 'Solid Navy PU Handbag', price: '₹4,200', old: '₹5,999', link: '/bagstommy' },
  { id: 'bagszouk', img: bagszouk, title: 'Zouk', desc: 'Office Bag - Jet Black', price: '₹4,000', old: '₹11,420', link: '/bagszouk' },
  { id: 'bagsmouchi', img: bagsmouchi, title: 'Mochi', desc: 'Brown Leather Shoulder Bag', price: '₹3,894', old: '₹6,490', link: '/bagsmouchi' },
];

const beautyProducts = [
  { id: 'lipbalm', img: lipbalm, title: 'Lip Balm', desc: 'Moisturizing Lip Balm', price: '₹199', old: '₹299', link: '/lipbalm' },
  { id: 'perfume', img: perfume, title: 'Perfume', desc: 'Floral Fragrance', price: '₹499', old: '₹699', link: '/perfume' },
  { id: 'shampoo', img: shampoo, title: 'Shampoo', desc: 'Herbal Shampoo', price: '₹299', old: '₹399', link: '/shampoo' },
  { id: 'sunscreen', img: sunscreen, title: 'Sunscreen', desc: 'SPF 50 Sunscreen', price: '₹399', old: '₹499', link: '/sunscreen' },
];

const shoesProducts = [
  { id: 'shoescampus', img: shoescampus, title: 'Campus', desc: 'Comfortable Casual Shoes', price: '₹1,500', old: '₹2,000', link: '/shoescampus' },
  { id: 'shoespuma', img: shoespuma, title: 'Puma', desc: 'High-Quality Sneakers', price: '₹2,500', old: '₹3,500', link: '/shoespuma' },
  { id: 'shoesredtape', img: shoesredtape, title: 'Red Tape', desc: 'Classic Formal Shoes', price: '₹1,800', old: '₹2,500', link: '/shoesredtape' },
  { id: 'shoesreebok', img: shoesreebok, title: 'Reebok', desc: 'Running Shoes', price: '₹2,200', old: '₹3,000', link: '/shoesreebok' },
  { id: 'formalshoes', img: shoesformal, title: 'Formal Shoes', desc: 'Elegant Formal Shoes', price: '₹2,000', old: '₹3,000', link: '/formalshoes' },
  { id: 'runningshoes', img: shoesrunning, title: 'Running Shoes', desc: 'Comfortable Running Shoes', price: '₹1,800', old: '₹2,500', link: '/runningshoes' },
  { id: 'heels', img: shoesheels, title: 'High Heels', desc: 'Stylish High Heels', price: '₹1,500', old: '₹2,000', link: '/heels' },
  { id: 'womenfootwear', img: shoeswomen, title: 'Women Footwear', desc: 'Trendy Women Footwear', price: '₹1,200', old: '₹1,800', link: '/womenfootwear' }
];

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const { wishlistItems } = useWishlist();
  const { cartlistItems } = useCartlist();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const wishlistCount = wishlistItems.length;
  const cartlistCount = cartlistItems.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogin = () => {
  navigate('/');
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setIsSearching(false);
      return;
    }
    const allProducts = [
      ...mensProducts,
      ...womensProducts,
      ...kidsProducts,
      ...bagsProducts,
      ...beautyProducts,
      ...shoesProducts,
    ];
    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setIsSearching(true);
  };

  // Inline Styles object (used across the component)
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
    banner: { width: '100%', height: 'auto', display: 'block' },
    row: { display: 'flex', justifyContent: 'space-around', margin: '20px 0', flexWrap: 'wrap' },
    col3: {
      flex: '1 1 22%',
      maxWidth: '22%',
      margin: '10px',
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      cursor: 'pointer',
    },
    section: (bg = '#f9f9f9') => ({
      padding: windowWidth < 768 ? '20px 10px' : '40px 20px',
      backgroundColor: bg,
    }),
    sectionContainer: { maxWidth: windowWidth < 768 ? '100%' : '1200px', margin: '0 auto' },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: windowWidth < 768 ? '20px' : '30px',
      fontSize: windowWidth < 768 ? '24px' : '36px',
      color: '#333',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: windowWidth < 480 ? 'repeat(1, 1fr)' : windowWidth < 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: windowWidth < 768 ? '15px' : '20px',
    },
    productCard: (gray = false) => ({
      textAlign: 'center',
      backgroundColor: gray ? '#f9f9f9' : '#fff',
      padding: windowWidth < 768 ? '15px' : '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      cursor: 'pointer',
    }),
    price: { color: '#0077b6', fontWeight: 'bold' },
    del: { color: '#999' },
  };

  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="logo" style={styles.logo} onClick={() => navigate('/home')} />
          <button style={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav style={styles.nav}>
          {['Men', 'Women', 'Kids', 'Lipsticks', 'Bags', 'Shoes'].map((item, idx) => (
            <div
              key={idx}
              style={styles.navItem}
              onClick={() => {
                scrollToSection(`${item.toLowerCase()}-section`);
                setMenuOpen(false);
              }}
            >
              {item}
            </div>
          ))}

          {isAuthenticated ? (
            <div style={styles.navItem} onClick={handleLogout}>
              Logout
            </div>
          ) : (
            <>
              <button style={styles.loginBtn} onClick={handleLogin}>
                Login
              </button>
              <button style={styles.loginBtn} onClick={() => navigate('/signup')}>
                SignUp
              </button>
            </>
          )}
        </nav>

        {menuOpen && <div style={styles.overlay} onClick={() => setMenuOpen(false)} />}

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="search products..."
            style={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <FaSearch style={styles.searchIcon} onClick={handleSearch} />
        </div>

        <div style={styles.iconsContainer}>
          <div style={styles.relative} onClick={() => navigate('/wishlist')}>
            <FaHeart style={styles.icon} />
            <span style={styles.badge}>{wishlistCount}</span>
          </div>
          <div style={styles.relative} onClick={() => navigate('/cart')}>
            <FaShoppingBag style={styles.icon} />
            <span style={styles.badge}>{cartlistCount}</span>
          </div>
          <div style={styles.relative} onClick={() => navigate('/orders')}>
            <FaClipboardList style={styles.icon} />
            
          </div>
        </div>
      </div>

      {/* Banner */}
      <div>
        <img src={fashion} alt="fashion" style={styles.banner} />
      </div>

      {isSearching ? (
        <section style={styles.section('#f9f9f9')}>
          <div style={styles.sectionContainer}>
            <h1 style={styles.sectionTitle}>Search Results</h1>
            <button
              style={{
                backgroundColor: '#0077b6',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '20px',
              }}
              onClick={() => {
                setIsSearching(false);
                setSearchQuery('');
                setFilteredProducts([]);
              }}
            >
              Clear Search
            </button>
            <div style={styles.productGrid}>
              {filteredProducts.map((product, i) => (
                <div
                  key={`search-${i}`}
                  style={{
                    ...styles.productCard(),
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                  }}
                  onClick={() => navigate(product.link)}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '10px',
                      marginBottom: '10px',
                    }}
                  />
                  <h4 style={{ color: '#333', marginBottom: '8px' }}>{product.title}</h4>
                  <p style={{ color: '#666', fontSize: '14px' }}>
                    {product.desc}
                    <br />
                    <br />
                    <span style={styles.price}>
                      {product.price} &nbsp;
                      <del style={styles.del}>{product.old}</del>
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Categories */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
              padding: "20px",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {[
              { img: westernWear, label: "WesternWear", id: "women-section" },
              { img: iWear, label: "IndianWear", id: "women-section" },
              { img: men, label: "Men", id: "mens-section" },
              { img: kids, label: "Kids", id: "kids-section" },
              { img: lipbalm, label: "Lipsticks", id: "lipsticks-section" },
              { img: bags, label: "Bags", id: "bags-section" },
              { img: shoes, label: "Shoes", id: "shoes-section" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
                }}
                onClick={() => scrollToSection(item.id)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <p style={{ marginTop: "10px", fontWeight: 600, fontSize: "16px" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Men's Section - start */}
      <section id="mens-section" style={styles.section('#f9f9f9')}>
        <div style={styles.sectionContainer}>
          <h1 style={styles.sectionTitle}>Men's Collection</h1>
          <div style={styles.productGrid}>
            {mensProducts.map((item, i) => (
            <div
              key={`men-${i}`}
              style={{
                ...styles.productCard(),
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.title} style={{width: '100%',height: 'auto',borderRadius: '10px',marginBottom: '10px',}}
              />
              <h4 style={{ color: '#333', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {item.desc}
                <br />
                <br />
                <span style={styles.price}>
                  {item.price} &nbsp;
                  <del style={styles.del}>{item.old}</del>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Women's Section */}
    <section id="women-section" style={styles.section('#f9f9f9')}>
      <div style={styles.sectionContainer}>
        <h1 style={styles.sectionTitle}>Women's Collection</h1>
        <div style={styles.productGrid}>
          {womensProducts.map((item, i) => (
            <div key={`women-${i}`} style={{...styles.productCard(),transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
              <h4 style={{ color: '#333', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {item.desc}
                <br />
                <br />
                <span style={styles.price}>
                  {item.price} &nbsp;
                  <del style={styles.del}>{item.old}</del>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Kids Section */}
    <section id="kids-section" style={styles.section('#f9f9f9')}>
      <div style={styles.sectionContainer}>
        <h1 style={styles.sectionTitle}>Kids' Collection</h1>
        <div style={styles.productGrid}>
          {kidsProducts.map((item, i) => (
            <div key={`kids-${i}`} style={{...styles.productCard(),transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
              <h4 style={{ color: '#333', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {item.desc}
                <br />
                <br />
                <span style={styles.price}>
                  {item.price} &nbsp;
                  <del style={styles.del}>{item.old}</del>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Lipsticks Section */}
    <section id="lipsticks-section" style={styles.section('#f9f9f9')}>
      <div style={styles.sectionContainer}>
        <h1 style={styles.sectionTitle}>Beauty & Essentials</h1>
        <div style={styles.productGrid}>
          {[
            { img: lipbalm, title: 'Lip Balm', desc: 'Moisturizing Lip Balm', price: '₹199', old: '₹299', link: '/lipbalm' },
            { img: perfume, title: 'Perfume', desc: 'Floral Fragrance', price: '₹499', old: '₹699', link: '/perfume' },
            { img: shampoo, title: 'Shampoo', desc: 'Herbal Shampoo', price: '₹299', old: '₹399', link: '/shampoo' },
            { img: sunscreen, title: 'Sunscreen', desc: 'SPF 50 Sunscreen', price: '₹399', old: '₹499', link: '/sunscreen' },
          ].map((item, i) => (
            <div key={`beauty-${i}`} style={{...styles.productCard(),transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
              <h4 style={{ color: '#333', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {item.desc}
                <br />
                <br />
                <span style={styles.price}>
                  {item.price} &nbsp;
                  <del style={styles.del}>{item.old}</del>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bags Section */}
    <section id="bags-section" style={styles.section('#f9f9f9')}>
      <div style={styles.sectionContainer}>
        <h1 style={styles.sectionTitle}>Bags Collection</h1>
        <div style={styles.productGrid}>
          {[
            { img: bagsstyli, title: 'Styli Bag', desc: 'Print Flap Handbag', price: '₹1,332', old: '₹2,049', link: '/bagsstyli' },
            { img: bagstommy, title: 'Tommy Hilfiger', desc: 'Solid Navy PU Handbag', price: '₹4,200', old: '₹5,999', link: '/bagstommy' },
            { img: bagszouk, title: 'Zouk', desc: 'Office Bag - Jet Black', price: '₹4,000', old: '₹11,420', link: '/bagszouk' },
            { img: bagsmouchi, title: 'Mochi', desc: 'Brown Leather Shoulder Bag', price: '₹3,894', old: '₹6,490', link: '/bagsmouchi' },
          ].map((item, i) => (
        <div key={`bags-${i}`} style={{...styles.productCard(),transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
              <h4 style={{ color: '#333', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {item.desc}
                <br />
                <br />
                <span style={styles.price}>
                  {item.price} &nbsp;
                  <del style={styles.del}>{item.old}</del>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Shoes Section */}
    <section id="shoes-section" style={styles.section('#f9f9f9')}>
      <div style={styles.sectionContainer}>
        <h1 style={styles.sectionTitle}>Shoes Collection</h1>
        <div style={styles.productGrid}>
          {[
            { img: shoescampus, title: 'Campus', desc: 'Comfortable Casual Shoes', price: '₹1,500', old: '₹2,000', link: '/shoescampus' },
            { img: shoespuma, title: 'Puma', desc: 'High-Quality Sneakers', price: '₹2,500', old: '₹3,500', link: '/shoespuma' },
            { img: shoesredtape, title: 'Red Tape', desc: 'Classic Formal Shoes', price: '₹1,800', old: '₹2,500', link: '/shoesredtape' },
            { img: shoesreebok, title: 'Reebok', desc: 'Running Shoes', price: '₹2,200', old: '₹3,000', link: '/shoesreebok' },
            { img: shoesformal, title: 'Formal Shoes', desc: 'Elegant Formal Shoes', price: '₹2,000', old: '₹3,000', link: '/formalshoes' },
            { img: shoesrunning, title: 'Running Shoes', desc: 'Comfortable Running Shoes', price: '₹1,800', old: '₹2,500', link: '/runningshoes' },
            { img: shoesheels, title: 'High Heels', desc: 'Stylish High Heels', price: '₹1,500', old: '₹2,000', link: '/heels' },
            { img: shoeswomen, title: 'Women Footwear', desc: 'Trendy Women Footwear', price: '₹1,200', old: '₹1,800', link: '/womenfootwear' }
          ].map((item, i) => (
            <div key={`shoes-${i}`} style={{...styles.productCard(),transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
              <h4 style={{ color: '#333', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {item.desc}
                <br /><br />
                <span style={styles.price}>
                  {item.price} &nbsp;
                  <del style={styles.del}>{item.old}</del>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
    )}
    {/* Footer */}
    <Footer scrollToSection={scrollToSection} />
  </div>
  );
};

export default Home;