import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css'

function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav" style={{
      width:'100%',
      padding: '0.5rem',
      borderBottom: '1px solid #dee2e6',
      margin: '0rem',
     
    }}>
      <div className='navbar-container'>
        {/* Logo */}
        <div style={{fontSize:'24px',fontWeight: 'bold'}}>
          <img src={process.env.PUBLIC_URL + '/mozon.png' } className='mzn'/>
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '2rem'
        }} className="desktop-menu">
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: '#eee', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            الرئيسية
          </Link>
          <Link to="/Shop" style={{ 
            textDecoration: 'none', 
            color: '#eee', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            المتجر
          </Link>
          <Link to="/Connect" style={{ 
            textDecoration: 'none', 
            color: '#eee', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            الباقات و الاشتراكات
          </Link>
          <Link to="/Contact" style={{ 
            textDecoration: 'none', 
            color: '#eee', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            اتصل بنا
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#eee'
          }}
          className="mobile-menu-btn"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }} className="mobile-menu">
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            الرئيسية
          </Link>
          <Link 
            to="/shop" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            المتجر
          </Link>
          <Link 
            to="/Connect" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
الباقات والاشتراكات          </Link>
          <Link 
            to="/contact" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            اتصل بنا
          </Link>
        </div>
      )}

      {/* CSS للـ Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
