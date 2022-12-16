const ScreenSizeDetector=require('screen-size-detector');
import {useEffect, useState} from 'react';

export default function contact() {
    return (
      <div className='flex flex-col align-items-center justify-center'>
            <br />
            <br />
    <section class="form-section">
        <div class="container mx-auto sm:px-4">
            <div class="flex flex-wrap  items-center">
                <div class="md:w-1/2 pr-4 pl-4">
                    <form action="https://formsubmit.co/e37bce064f7e1870a53a7dca208f2560 " method="POST" enctype="multipart/form-data">
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-1/2 pr-4 pl-4">
                                <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="name" name="name" placeholder="Full Name *" required/>
                            </div>
                            <div class="mb-4 md:w-1/2 pr-4 pl-4">
                                <input type="email" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="email" name="email" placeholder="Email Address *" required/>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-1/2 pr-4 pl-4">
                                <input type="tel" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="phone" name="phone" placeholder="Phone Number *" required/>
                            </div>
                            <div class="mb-4 md:w-1/2 pr-4 pl-4">
                                <select class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" name="" id="">
                                    <option selected>Choose Country</option>
                                    <option>USA</option>
                                    <option>India</option>
                                    <option>England</option>
                                    <option>China</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-full pr-4 pl-4">
                                <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="subject" name="_subject" placeholder="Subject *" required />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-full pr-4 pl-4">
                                <textarea class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" rows="5" id="message" name="message" placeholder="Type your message here"></textarea>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-full pr-4 pl-4">
                                <input type="file" name="attachment" accept="image/png, image/jpeg"/>
                            </div>
                        </div>
                        <br/>
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-full pr-4 pl-4 text-center">
                                <a href="mailto:victorrmalhotra@gmail.com">
                                    <button type="submit" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"><i class="fa fa-send"></i> Send Message</button>
                                </a>
                            </div>
                            <input type="hidden" name="_cc" value="vmalho393@west-mec.org" style={{display:"none"}}/>
                            <input type="hidden" name="_autoresponse" value="You have made contact with victor please wait for at least a day for a message"/>
                                    <input type="hidden" name="_next" value="https://victormal001.github.io/My-Portfolio/contact.html" style={{display: "none"}} />
                            <input type="hidden" name="_template" value="table"/>
                            <input type="hidden " name="_url " value="https://victormal001.github.io/My-Portfolio/contact.html" style={{display: "none"}}/>
                                    <input type="text" name="_honey" style={{display: "none"}} />
                        </div>


                    </form>
                    <hr/>
                </div>
                <div class="md:w-1/2 pr-4 pl-4 address ">
                    <h5>Call Me</h5>
                    <p><a href="tel:+16027840144 "><i class="fa fa-phone-alt "></i>+1(602) 784-0144</a></p>
                    <h5>Email / Site</h5>
                    <p>
                        <a href="mailto:victorrmalhotra@gmail.com "><i class="fa fa-envelope "></i> victorrmalhotra@gmail.com</a><br/>
                        <a href="https://victormal001.github.io/My-Portfolio/ "><i class="fa fa-globe "></i>https://victormal001.github.io/My-Portfolio/</a>
                    </p>
                    <h5>Working Hours</h5>
                    <p>
                        Mon - Fri : 7:10pm - 9pm (USA-Mountain Standard Time)<br/> Sat - Sun : 9am - 8pm (USA-Mountain Standard Time)
                    </p>
                    <h5>Quick Who am I</h5>
                    <p> My Name is Victor and I am coder I can do back-end and front-end. . I am currently looking for a coding job. I am 16 and have no college degree but I got to West-MEC NEC. I made this with bootstrap</p>
                    <br/>
                    <br/>

                    <hr />
                </div>

            </div>
        </div>
    </section>
    <section>
        <div class=" flex align-items-center justify-center container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 map " id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13282.864729557932!2d-112.20263465!3d33.6645152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1633757781050!5m2!1sen!2sus " width="90% " height="400px" style={{border: 0,}} allowfullscreen=" " loading="lazy " frameborder="0 "></iframe>
        </div>

            </section>
            <br />
            <br />
            <br />
        </div>
  )
}