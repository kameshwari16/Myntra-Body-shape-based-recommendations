// import React from 'react';
// import bann from '../images/banners/banner.jpg';
// import "../style/Banner.css";

// function Banner() {
//   const styles = {
//     img: {
//       height: "500px",
//       width: "100%",
//     }
//   };

//   return (
//     <div className='i'>
//       <div className='position-relative'>
//         <img src={bann} alt="banner" className='w-100 mx-auto d-block' style={styles.img} />
//       </div>
//     </div>
//   );
// }

// export default Banner;

import React from 'react';
import Slider from 'react-slick';
import bann1 from '../images/banners/banner.jpg';
import bann2 from '../images/banners/banner2.jpg';
import bann3 from '../images/banners/banner3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../style/Banner.css";

function Banner() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    fade: true,
    dots: false,
  };

  return (
    <div className='i'>
      <Slider {...settings}>
        <div>
          <img src={bann1} alt="banner1" className='w-100 mx-auto d-block' />
        </div>
        <div>
          <img src={bann2} alt="banner2" className='w-100 mx-auto d-block' />
        </div>
        <div>
          <img src={bann3} alt="banner3" className='w-100 mx-auto d-block' />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;

