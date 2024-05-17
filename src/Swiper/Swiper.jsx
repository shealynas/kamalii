// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

// export default function () {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="src/images/Collage/One.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="src/images/Collage/e96ekMRA 2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

//freemode
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src/images/Collage/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="two" src="src/images/Collage/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/10.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/11.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/Collage/12.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
