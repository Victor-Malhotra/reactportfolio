import Image from 'next/image'
import Link from 'next/link';
import {RiMailSendLine} from "react-icons/ri"

export default function AboutMe() {
  return (
    <div className='h-full'>
      <div class="bg-gray-100">
        <div class="container mx-auto sm:px-4">
          <div class="flex flex-wrap  flex justify-center">
            <div class="md:w-4/5 pr-4 pl-4 mt-5 pt-5">
              <div class="flex flex-wrap  z-depth-3">
                <div class="sm:w-1/3 pr-4 pl-4 bg-teal-500 rounded-l">
                  <div class=" flex flex-row card-block text-center text-white">
                    <Image alt="Victor Malhotra" class="mt-5 rounded-full" height="190" width="190" src="/assets/Student_ID_Victor_Malhotra.jpg" />
                    <div>
                    <h2 class="mt-4" style={{fontWeight: 579}}>Victor Malhotra</h2>
                      <p>Web Design, Backend Development, and user testing.</p>
                      </div>
                  </div>
                </div>

                <div class="sm:w-2/3 pr-4 pl-4 bg-white rounded-r">
                  <h3 class="mt-3 text-center">Information</h3>
                  <hr class="bg-blue-500 text-white hover:bg-blue-600 mt-0 w-1/2" />
                  <div class="flex flex-wrap ">
                    <div class="sm:w-1/2 pr-4 pl-4">
                      <p>Email:</p>
                      <h6 class="text-gray-700"> <a href="mailto:victorrmalhotra@gmail.com" style={{textDecoration: "none"}}>victorrmalhotra@gmail.com </a></h6>
                    </div>
                    <div class="sm:w-1/2 pr-4 pl-4">
                      <p>Phone:</p>
                      <h6 class="text-gray-700">+1(602) 784-0144</h6>
                    </div>
                  </div>
                  <h4 class="mt-3">Projects</h4>
                  <hr class="bg-blue-600" />
                  <div class="flex flex-wrap ">
                    <div class="sm:w-1/2 pr-4 pl-4">
                      <p>Recent</p>
                      <h6><Link target="_blank" href="https://victormal001.github.io/Picture-Grid-Project/" style={{textDecoration: "none", color: "#796f4c;"}}>Picture grid project</Link></h6>
                    </div>
                    <div class="sm:w-1/2 pr-4 pl-4">
                      <p>Oldest</p>
                      <h6><Link target="_blank" href="https://victormal001.github.io/gitPagesPractice/" style={{textDecoration: "none", color: "#796f4c;"}}>Binary Hex Dec Converter</Link></h6>
                    </div>
                  </div>
                  <hr class="bg-blue-600" />
                  <h2 class="justify-center">About me</h2>
                  <p>I am known to talk a lot and loud. But when I am focused on something I will rarely talk and that project will be done fast and be better than you wanted. I am also pretty good at working in teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}