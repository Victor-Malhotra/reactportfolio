import {data} from '../assets/carouselData';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import { useHorizontalScroll } from "../components/useSideScroll";



export default function CarouselComp() {
 const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const scrollRef = useHorizontalScroll();
  return (
    <div>
      <main>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
             ref={scrollRef} style={{ overflow: "auto" }}
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer scale-90 hover:scale-100 ease-in-out duration-300'
              src={item.img}
              alt='/'
              key={item.id}
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
        </main>
    </div>
  );
}