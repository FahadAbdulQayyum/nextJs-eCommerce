
var $ = require('jquery');
if (typeof window !== 'undefined') {
window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';

export const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});


// const CarouselComp = () => {
//   return (
//     <div>carousel</div>
//   )
// }

// export default CarouselComp;