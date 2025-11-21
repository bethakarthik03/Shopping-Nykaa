import React from 'react'
import { Link } from 'react-router-dom'
const Footer = ({ scrollToSection }) => {
  return (
    <div>
        <footer style={{backgroundColor: '#333', color: '#fff', padding: '50px 20px', fontFamily: 'Arial, sans-serif', boxSizing: 'border-box'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', gap: '40px'}}>
                <div style={{flex: 1, minWidth: '250px', maxWidth: '300px', marginBottom: '30px', padding: '0 10px'}}>
                    <h3 style={{marginBottom: '20px', fontSize: '20px', color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>About Us</h3>
                    <p style={{margin: 0, lineHeight: '1.7', fontSize: '14px'}}>We provide the best products at the most affordable prices. Your satisfaction is our top priority.</p>
                </div>
                <div style={{flex: 1, minWidth: '250px', maxWidth: '300px', marginBottom: '30px', padding: '0 10px'}}>
                    <h3 style={{marginBottom: '20px', fontSize: '20px', color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>Quick Links</h3>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                        <li style={{marginBottom: '12px'}}><a href="#mens-section" onClick={(e) => { e.preventDefault(); scrollToSection('mens-section'); }} style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Men</a></li>
                        <li style={{marginBottom: '12px'}}><a href="#women-section" onClick={(e) => { e.preventDefault(); scrollToSection('women-section'); }} style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Women</a></li>
                        <li style={{marginBottom: '12px'}}><a href="#kids-section" onClick={(e) => { e.preventDefault(); scrollToSection('kids-section'); }} style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Kids</a></li>
                        <li style={{marginBottom: '12px'}}><a href="#lipsticks-section" onClick={(e) => { e.preventDefault(); scrollToSection('lipsticks-section'); }} style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Lipsticks</a></li>
                        <li style={{marginBottom: '12px'}}><a href="#bags-section" onClick={(e) => { e.preventDefault(); scrollToSection('bags-section'); }} style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Bag</a></li>
                        <li style={{marginBottom: '12px'}}><a href="#shoes-section" onClick={(e) => { e.preventDefault(); scrollToSection('shoes-section'); }} style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Shoes</a></li>
                    </ul>
                </div>
                <div style={{flex: 1, minWidth: '250px', maxWidth: '300px', marginBottom: '30px', padding: '0 10px'}}>
                <h3 style={{marginBottom: '20px', fontSize: '20px', color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>Customer Service</h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    <li style={{marginBottom: '12px'}}><Link to="/help" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Help & FAQs</Link></li>
                    <li style={{marginBottom: '12px'}}><Link to="/shipping" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Shipping</Link></li>
                    <li style={{marginBottom: '12px'}}><Link to="/returns" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Returns</Link></li>
                    <li style={{marginBottom: '12px'}}><Link to="/privacy" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease, transform 0.2s ease', fontSize: '14px', display: 'inline-block'}} onMouseEnter={(e) => {e.target.style.color = '#ffd166'; e.target.style.transform = 'translateX(5px)';}} onMouseLeave={(e) => {e.target.style.color = '#fff'; e.target.style.transform = 'translateX(0)';}}>Privacy Policy</Link></li>
                </ul>
            </div>
            <div style={{flex: 1, minWidth: '250px', maxWidth: '300px', marginBottom: '30px', padding: '0 10px'}}>
                <h3 style={{marginBottom: '20px', fontSize: '20px', color: '#fff', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>Contact Us</h3>
                <p style={{margin: 0, lineHeight: '1.7', fontSize: '14px'}}>Email: Nykaa@shopping.com</p>
                <p style={{margin: 0, lineHeight: '1.7', fontSize: '14px'}}>Phone: +91 98745 43910</p>
                <p style={{margin: 0, lineHeight: '1.7', fontSize: '14px'}}>Address: Hyderabad, India</p>
            </div>
        </div>
        <div style={{textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #555', marginTop: '40px', color: '#ccc', fontSize: '14px'}}>
            <p>© 2025 NykaaShopping. All rights reserved.</p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
