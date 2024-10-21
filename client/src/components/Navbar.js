// import { Link } from 'react-router-dom';
// import logo from '../images/myntra/myntra.png';
// import '../style/Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-1 fixed-top bg-white">
//       <div className="container-fluid">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <Link to="/" className="navbar-brand">
//           <img src={logo} alt="logo" style={{ width: '38px' }} />
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/recommendations" className="nav-link">Recommendations</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/cart" className="nav-link">Cart</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/checkout" className="nav-link">Checkout</Link>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//           </form>
//           <div className="userOptions ms-5">
//             <Link to="/signin">
//               <i className="bi bi-person"></i>
//             </Link>
//             <Link to="/checkout">
//               <i className="bi bi-heart"></i>
//             </Link>
//             <Link to="/cart">
//               <i className="bi bi-bag"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/myntra/myntra.png';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>HOME</Link>
        <Link to="/home" onClick={toggleMenu}>MEN</Link>
        <Link to="/home" onClick={toggleMenu}>WOMEN</Link>
        <Link to="/contact" onClick={toggleMenu}>BEAUTY</Link>
        <Link to="/contact" onClick={toggleMenu}> KIDS</Link>
        <Link to="/recommendations" onClick={toggleMenu} className="recommendations-link">RECOMMENDATIONS</Link>
      </div>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input className='sb'
          type="text"
          placeholder="Search for products,brands"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="navbar-icons">
      <Link to="/profile"><FaHeart />Wishlist</Link>
        <Link to="/cart"><FaShoppingCart />Cart</Link>
        <Link to="/profile"><FaUser />Profile</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
