import React from "react";
 import '../styles/Skills.module.css';

 function SkillsBar () {
   return (
      <div className="devdop">
        <div className="containerm">
            <h1 className="title-text">React Progress Bar</h1>

            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
       </div>
             <div>
        <main role="main ">
        <section class="py-8 px-4 md:py-16 md:px-8 mb-8 bg-gray-200 rounded text-center ">
            <div class="container mx-auto sm:px-4 ">
                <h1 class="jumbotron-heading ">My Sites</h1>
                <p class="text-xl font-light text-gray-700 ">
                    These are the sites I have made and put to Git hub. Enjoy!
                    <a href="https://github.com/Victor-Malhotra?tab=repositories">Visit My Github</a>
                </p>
            </div>
        </section>

        <div class="album py-5 bg-gray-100 ">
            <div class="container mx-auto sm:px-4 ">
                <div class="flex flex-wrap  ">
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px "  src="assets/EclipseManga.png" alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>Eclipse Manga</h2>
                                    A simple ecommerce site for a few items (built with one other person)
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://demonlord6661.github.io/Eclipse-Manga-Prime/index.html  " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/demonlord6661/Eclipse-Manga-Prime " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px "  src="assets/ChemBalance.png" alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>ChemBalance</h2>
                                    A simple API called chemestry stoichometery equation balancer
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://victor-malhotra.github.io/ChemBalance/  " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/Victor-Malhotra/ChemBalance " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px "  src="assets/PokeDex.png" alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>PokeDex</h2>
                                    A simple charmander evolution site using JSON and JS
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://victor-malhotra.github.io/JSON_PokeDex/  " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/Victor-Malhotra/JSON_PokeDex " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px "  src="assets/JSONCats.png" alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>JSON Cats</h2>
                                    A simple JSON page that loads data about cats into a slideshow
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://victor-malhotra.github.io/JSON-Cats/#carousel__slide1  " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/Victor-Malhotra/JSON-Cats " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px "  src="assets/PerfectHomepage.png" alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>Perfect Homepage</h2>
                                    A simple homepage that scrolls to the side and can be easly changed
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://victor-malhotra.github.io/PerfectHomePage/  " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/Victor-Malhotra/PerfectHomePage " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px " src="assets/Hummus.png " alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>Hummus Site</h2>
                                   A Starter project that was given in West-MEC just using CSS and HTML
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://victor-malhotra.github.io/Hummus/ " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/Victor-Malhotra/Hummus " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px " src="assets/SciFloor.png " alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>SciFloors</h2>
                                    A simple HTML and CSS Group assignment for West-MEC Coding.
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://Victor-Malhotra.github.io/sci-floors/ " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/Victor-Malhotra/sci-floors " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/3 pr-4 pl-4 ">
                        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 box-shadow ">
                            <img class="w-full rounded rounded-t " width="100px " height="225px "  src="assets/Grid.png " alt="Card image cap " />
                            <div class="flex-auto p-6 ">
                                <p class="mb-0 ">
                                    <h2>CSS Grid</h2>
                                    Sample CSS Grid alignment example for a gallery page.
                                </p>
                                <div class="flex justify-between items-center ">
                                    <div class="relative inline-flex align-middle ">
                                        <a type="button " href="https://Victor-Malhotra.github.io/Picture-Grid-Project/ " target="_blank " class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                        View
                      </a>
                                        <a type="button " href="https://github.com/Victor-Malhotra/Picture-Grid-Project " target="_blank "  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700 ">
                                            <i class="fab fa-github fa-2x text-black-50 "></i>
                      </a>
                                    </div>
                                    <small class="text-gray-700 ">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
      </div>
       </div>
    )
 }

 export default SkillsBar;