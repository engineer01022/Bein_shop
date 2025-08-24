/*import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';
import { Link } from 'react-router-dom';

const tags = ['الرئيسية', 'المتجر', 'الاشتراكات والباقات', 'تواصل بنا'];
const routes = ['/', '/shop', '/subscriptions', '/contact']; // Fixed route paths

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbaro" : "navbar"}>
      <div className="logo">
        <img src="mozon.png" alt="image" />
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {tags.map((tag, index) => (
          <Link 
            to={routes[index]} 
            key={index} 
            onClick={() => setMenuOpen(false)} 
            className="nav-link"
          >
            {tag}
          </Link>
        ))}
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Header;


/*import React,{Component} from "react";
import './App.css';

class Header extends Component{
    render(){
        return(
            <div className="header fixed-top">
         
         <div className="logo float-left">
         <img style={{height:'50px', borderRadius:'5px', marginRight:'2rem'}} src="mozon.png" alt="image" />
            
          </div>
    <nav className="nav">
  
        <li className="active"><a href="#header">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#faq">Solutions</a></li>
          <li><a href="#team">Our Clients</a></li>
        <li><a href="#contact">Contact Us</a></li>
       
          
    </nav>
            </div>
        );
    }
}
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <div  className="">
             <img style={{height:'50px', borderRadius:'5px', marginRight:'2rem'}} src="mozon.png" alt="image" />
            
          </div>    <button className="navbar-toggler" type="button" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item mr-3"  >
          <a className="nav-link " aria-current="page" href="#" >الرئيسية</a>
        </li>
        <li className="nav-item mr-3">
          <a className="nav-link" href="#">المتجر</a>
        </li>
        <li className="nav-item mr-3">
          <a className="nav-link" href="#">الاشتراكات والباقات</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">تواصل بنا</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
export default Header;*/
import React, {useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';
import { Link } from 'react-router-dom';

const tags = ['الرئيسية', 'المتجر', 'الاشتراكات والباقات', 'تواصل بنا'];
const refes= ['/App.js','/','/','/'];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100); // Change value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={scrolled ? "navbaro" : "navbar"}>
      <div className="logo"><img src="mozon.png" alt="image" /></div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>

        {tags.map((tag, index) => (
          <a href={`${refes[index]}`} key={index} onClick={()=>setMenuOpen(!menuOpen)} className="nav-link" >
            {tag}
          </a>
        ))}
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Header;
       /*<div className="header">
          <nav className="navbar" >
  
          <div  >
             <img style={{height:'50px', borderRadius:'5px', marginRight:'2rem'}} src="mozon.png" alt="image" />  
          </div>
    <div>
        <li>
          <a  className="active" href="/" >الرئيسية</a>
        </li>
        <li >
          <a href="#">المتجر</a>
        </li>
        <li >
          <a href="#">الاشتراكات والباقات</a>
        </li>
        <li >
          <a href="#">تواصل بنا</a>
        </li>
    </div>
  </nav>
            </div>*/
       
/*  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <div  className="">
             <img style={{height:'50px', borderRadius:'5px', marginRight:'2rem'}} src="mozon.png" alt="image" />
            
          </div>    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mr-3" style={{color:'white'}}>
          <a className="nav-link active" aria-current="page" href="#">الرئيسية</a>
        </li>
        <li className="nav-item mr-3">
          <a className="nav-link" href="#">المتجر</a>
        </li>
        <li className="nav-item mr-3">
          <a className="nav-link" href="#">الاشتراكات والباقات</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">تواصل بنا</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';
import Shop from './Shop';

// Dummy components for each page
const Home = () => <div>الرئيسية Page</div>;
const Store = () => <div>المتجر Page</div>;
const Subscriptions = () => <div>الاشتراكات والباقات Page</div>;
const ContactUs = () => <div>تواصل بنا Page</div>;

// Header Component
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100); // Change value as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'navbaro' : 'navbar'}>
      <div className="logo">
        <img src="mozon.png" alt="Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['الرئيسية', 'المتجر', 'الاشتراكات والباقات', 'تواصل بنا'].map((tag, index) => (
          <a
            href={`/${tag.toLowerCase()}`}  // Make each link point to the respective route
            key={index}
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-link"
          >
            {tag}
          </a>
        ))}
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/Shop" component={Home} />
        <Route path="/المتجر" component={Store} />
        <Route path="/الاشتراكات والباقات" component={Subscriptions} />
        <Route path="/تواصل بنا" component={ContactUs} />
      </Switch>
    </Router>
  );
};

export default Header;*/