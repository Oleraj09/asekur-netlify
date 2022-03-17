import React from 'react';
import './Home.css';
import logo from "./img/logo.png";
function Home() {
  return (
    <div className="home">
        <div className="home_bg">
          <div className="header d_flex align_item_center ph_30">
            <div className="logo">
              <img src={logo} alt="Logo"/>
            </div>
            <div className="navigation ph_30">
              <ul className="navbar d_flex">
                <a href="#Home"><li className="nav_items mx_15">Home</li></a>
                <a href="#About"><li className="nav_items mx_15">About</li></a>
                <a href="#Portfolio"><li className="nav_items mx_15">Portfolio</li></a>
                <a href="#Blog"><li className="nav_items mx_15">Blog</li></a>
                <a href="#Contact"><li className="nav_items mx_15">Contact</li></a>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="home_content">
              <div className="home_meta">
                <h1 className="home_text pz_10">WELCOME TO MY WORLD!!</h1>
                <h2 className="home_text pz_10">Hi, I am Ashikur</h2>
                <h3 className="home_text sweet">EEE Graduate</h3>
                <h4 className="home_text pz_10">From Dhaka</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home