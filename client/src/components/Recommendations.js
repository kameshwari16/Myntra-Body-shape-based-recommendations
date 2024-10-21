// import React, { useState } from 'react';
// import "../style/recommendations.css";

// const Recommendations = () => {
//   const [height, setHeight] = useState('');
//   const [bustSize, setBustSize] = useState('');
//   const [waistSize, setWaistSize] = useState('');
//   const [hipsSize, setHipsSize] = useState('');
//   const [skinTone, setSkinTone] = useState('');
//   const [occasion, setOccasion] = useState('');
//   const [priceRange, setPriceRange] = useState('');
//   const [sortBy, setSortBy] = useState('');
//   const [products, setProducts] = useState([]);
//   const [showRatingForm, setShowRatingForm] = useState(false);
//   const [noProductsMessage, setNoProductsMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const response = await fetch('http://localhost:3001/recommendations', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ height, bustSize, waistSize, hipsSize, skinTone, occasion, priceRange, sortBy }),
//     });
//     const data = await response.json();
//     setProducts(data);
//     setShowRatingForm(true);
//     if (data.length === 0) {
//       setNoProductsMessage('No available products');
//     } else {
//       setNoProductsMessage('');
//     }
//   };

//   return (
//     <div className="recommendations-container">
//       <h1>Voilaaa!</h1>
//       <h2>"Find Your Perfect Fit with Custom Recommendations!"</h2>
//       <label>
//         <input type='button' value="Check Reviews"></input>
//       </label>
//       <div className="form-container">
//         <form onSubmit={handleSubmit} className="form">
//           <h3>Enter your measurements here!</h3>
//           <label>
//             Height:
//             <input type="number" value={height} onChange={(event) => setHeight(event.target.value)} required />
//           </label>
//           <label>
//             Bust Size:
//             <input type="number" value={bustSize} onChange={(event) => setBustSize(event.target.value)} required />
//           </label>
//           <label>
//             Waist Size:
//             <input type="number" value={waistSize} onChange={(event) => setWaistSize(event.target.value)} required />
//           </label>
//           <label>
//             Hips Size:
//             <input type="number" value={hipsSize} onChange={(event) => setHipsSize(event.target.value)} required />
//           </label>
//           <h3>Choose your skinTone from below palette!</h3>
//           <label>
//             Skin Tone:
//             <div className="skin-tone-container">
//               <input
//                 type="radio"
//                 value="PORCELAIN"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="porcelain"
//               />
//               <label htmlFor="porcelain" className="skin-tone-label" style={{ backgroundColor: '#F7D2C4' }}>PORCELAIN</label>

//               <input
//                 type="radio"
//                 value="ALMOND"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="almond"
//               />
//               <label htmlFor="almond" className="skin-tone-label" style={{ backgroundColor: '#FFD7BE' }}>ALMOND</label>

//               <input
//                 type="radio"
//                 value="BEIGE"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="beige"
//               />
//               <label htmlFor="beige" className="skin-tone-label" style={{ backgroundColor: '#F5DEB3' }}>BEIGE</label>

//               <input
//                 type="radio"
//                 value="WARM BEIGE"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="warmBeige"
//               />
//               <label htmlFor="warmBeige" className="skin-tone-label" style={{ backgroundColor: '#FFD7BE' }}>WARM BEIGE</label>

//               <input
//                 type="radio"
//                 value="HONEY"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="honey"
//               />
//               <label htmlFor="honey" className="skin-tone-label" style={{ backgroundColor: '#FFC394' }}>HONEY</label>
            
//               <input
//                 type="radio"
//                 value="GOLDEN"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="golden"
//               />
//               <label htmlFor="golden" className="skin-tone-label" style={{ backgroundColor: '#F2C464' }}>GOLDEN</label>
            
//               <input
//                 type="radio"
//                 value="CHESTNUT"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="chestnut"
//               />
//               <label htmlFor="chestnut" className="skin-tone-label" style={{ backgroundColor: '#964B00' }}>CHESTNUT</label>
            
//               <input
//                 type="radio"
//                 value="ESPRESSO"
//                 name="skinTone"
//                 onChange={(event) => setSkinTone(event.target.value)}
//                 required
//                 id="espresso"
//               />
//               <label htmlFor="espresso" className="skin-tone-label" style={{ backgroundColor: '#663300' }}>ESPRESSO</label>
//             </div>
//           </label>
//           <button type="submit">Get Recommendations</button>
//         </form>
//       </div>
//       {products.length > 0 && (
//         <div className="recommendations-list">
//           <h1>Yourr Fits!!!</h1>
//           <div className="filter-container">
//             <label>
//               Filter by Occasion:
//               <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
//                 <option value="">Select Occasion</option>
//                 <option value="casual">Casual</option>
//                 <option value="formal">Formal</option>
//                 <option value="party">Party</option>
//                 <option value="sports">Sports</option>
//               </select>
//             </label>
//             <label>
//               Choose Price Range:
//               <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
//                 <option value="">Select Price Range</option>
//                 <option value="0-50">$199 - $550</option>
//                 <option value="51-100">$551 - $1000</option>
//                 <option value="101-200">$1001 - $2000</option>
//                 <option value="201-500">$2001 - $5000</option>
//                 <option value="501+">$5001+</option>
//               </select>
//             </label>
//             <label>
//               Sort By:
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//                 <option value="">Sort By</option>
//                 <option value="price-asc">Price (Low to High)</option>
//                 <option value="price-desc">Price (High to Low)</option>
//                 <option value="popularity">Popularity</option>
//                 <option value="newest">Newest</option>
//               </select>
//             </label>
//           </div>
//           {noProductsMessage ? (
//             <p>{noProductsMessage}</p>
//           ) : (
//             <ul>
//               {products.map((product) => (
//                 <li key={product.productId}>
//                   <img src={product.productImage} alt={product.productName} />
//                   <p>{product.productName}</p>
//                   <p className="product-price">{product.productColor}</p>
//                   <p>{product.productPrice}</p>
//                   <p>{product.productBrand}</p>
//                   <button>Add to Bag</button>
//                 </li>
//               ))}
//             </ul>
//           )}
//           {showRatingForm && products.length > 0 && (
//             <div>
//               <h3>Rate our quality of recommendations</h3>
//               <form>
//                 <label>
//                   Rating:
//                   <input type="number" />
//                 </label>
//                 <label>
//                   Comment:
//                   <input type="text" />
//                 </label>
//                 <button type="submit">Submit Review</button>
//               </form>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Recommendations;



import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/recommendations.css";

const Recommendations = () => {
  const [height, setHeight] = useState('');
  const [bustSize, setBustSize] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [hipsSize, setHipsSize] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [noProductsMessage, setNoProductsMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height, bustSize, waistSize, hipsSize, skinTone }),
    });
    const data = await response.json();
    if (data.length === 0) {
      setNoProductsMessage('No available products');
    } else {
      setNoProductsMessage('');
      navigate('/results', { state: { products: data } });
    }
  };

  return (
    <div className="recommendations-container">
      <h1>Voilaaa!</h1>
      <div className="recommendation-header">
        <h2>"Find Your Perfect Fit with Custom Recommendations!"</h2>
        <button className="check-reviews-button">Check Reviews</button>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h3 className="centered">Enter your measurements here!</h3>
          <label>
            Height (in centimeters):
            <input type="number" value={height} onChange={(event) => setHeight(event.target.value)} required />
          </label>
          <label>
            Bust Size (in centimeters):
            <input type="number" value={bustSize} onChange={(event) => setBustSize(event.target.value)} required />
          </label>
          <label>
            Waist Size (in centimeters):
            <input type="number" value={waistSize} onChange={(event) => setWaistSize(event.target.value)} required />
          </label>
          <label>
            Hips Size (in centimeters):
            <input type="number" value={hipsSize} onChange={(event) => setHipsSize(event.target.value)} required />
          </label>
          <h3 className="centered">Choose your skinTone from below palette!</h3>
          <label>
            <div className="skin-tone-container">
              <input
                type="radio"
                value="PORCELAIN"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="porcelain"
              />
              <label htmlFor="porcelain" className="skin-tone-label" style={{ backgroundColor: '#F7D2C4' }}>PORCELAIN</label>

              <input
                type="radio"
                value="ALMOND"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="almond"
              />
              <label htmlFor="almond" className="skin-tone-label" style={{ backgroundColor: '#FFD7BE' }}>ALMOND</label>

              <input
                type="radio"
                value="BEIGE"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="beige"
              />
              <label htmlFor="beige" className="skin-tone-label" style={{ backgroundColor: '#F5DEB3' }}>BEIGE</label>

              <input
                type="radio"
                value="WARM BEIGE"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="warmBeige"
              />
              <label htmlFor="warmBeige" className="skin-tone-label" style={{ backgroundColor: '#FFD7BE' }}>WARM BEIGE</label>

              <input
                type="radio"
                value="HONEY"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="honey"
              />
              <label htmlFor="honey" className="skin-tone-label" style={{ backgroundColor: '#FFC394' }}>HONEY</label>

              <input
                type="radio"
                value="GOLDEN"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="golden"
              />
              <label htmlFor="golden" className="skin-tone-label" style={{ backgroundColor: '#F2C464' }}>GOLDEN</label>

              <input
                type="radio"
                value="CHESTNUT"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="chestnut"
              />
              <label htmlFor="chestnut" className="skin-tone-label" style={{ backgroundColor: '#964B00' }}>CHESTNUT</label>

              <input
                type="radio"
                value="ESPRESSO"
                name="skinTone"
                onChange={(event) => setSkinTone(event.target.value)}
                required
                id="espresso"
              />
              <label htmlFor="espresso" className="skin-tone-label" style={{ backgroundColor: '#663300' }}>ESPRESSO</label>
            </div>
          </label>
          <button type="submit">Get Recommendations</button>
        </form>
      </div>
      {noProductsMessage && <p>{noProductsMessage}</p>}
    </div>
  );
};

export default Recommendations;