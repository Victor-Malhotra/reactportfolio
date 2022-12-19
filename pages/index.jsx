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
      <div className=' flex justify-center align-items-center flex-row'>
        <div className="container mx-auto flex justify-center align-items-center flex-row sm:px-4 marketing  " id="marketing">
                        <br/>
                        <hr className="featurette-divider" id="marketing-divider" />
                        <div className="flex flex-wrap ">
                            <div className="lg:w-1/3 pr-4 pl-4">
                                <div>
                                    <img className="rounded-full" src="assets/Book.jpg" alt="My Books being read" width="140" height="140"/>
                                </div>
                                <div className="module container mx-auto sm:px-4">
                                    <h2>Hobby-1: <strong>Reading</strong></h2>

                                    <p className="collapseExample" id="collapseExample_2" aria-expanded="false">
                                        I like to read Fantasy books and books that have to do with mythology in my free time.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/3 pr-4 pl-4">
                                <div>
                                    <img className="rounded-full" src="assets/Code.jpg" alt="My Code For Index.html" width="140" height="140"/>
                                </div>
                                <div className="module container mx-auto sm:px-4">
                                    <h2>Hobby-2: <strong>Coding</strong></h2>

                                    <p className="collapseExample" id="collapseExample_1" aria-expanded="false">
                                        I like coding mainly because it is fun and because with code you can relax while making money. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I also like coding because with code you can do anything from making a page to creating an OS. You can also use coding to make
                                        robots that do simple th9ngs like clean or cook for you.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/3 pr-4 pl-4">
                                <div>
                                    <img className="rounded-full" src="assets/Lego.jpg" alt="Lego stack Made Because of this asignment" width="140" height="140"/>
                                </div>

                                <div className="module container mx-auto sm:px-4">
                                    <h2>Hobby-3: <strong>Legos</strong></h2>

                                    <p className="collapseExample" id="collapseExample_3" aria-expanded="false">
                                        I like Legos becasue it allows me to build cities and movie sets to each small detail. I also like legos becasue you can combine many sets and make something that is a mix of all sets. It is also a great way to waste time.
                                    </p>
                                </div>


                            </div>
                        </div>

                    </div>
      </div>
    </div>
  )
}
