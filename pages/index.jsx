import CarouselComp from '../components/CarouselComp';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import {data} from '../assets/carouselData';

export default function Home() {
   const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  return (
    <div>
      <div  >
        <CarouselComp />
      </div>

    </div>
  )
}
