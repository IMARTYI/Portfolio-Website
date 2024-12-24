import React, { useEffect } from "react";
import Header from "./header";
import AboutMe from "./about";
import swiper from "swiper";
import Pastprojects from "./port";

function Intro() {

  return (

    <html lang="en" className="!scroll-smooth">
      <div lang="en" className="!scroll-smooth font-sans antialiased">
        <Header />
        <section className="flex flex-col xl:flex-row items-center justify-center">
  <div className="container transition-opacity flex flex-col xl:flex-row xl:pl-20">
    {/* Text Section */}
    <div className="pt-16 px-4 text-center xl:text-left bg-gray-200">
      <p className="text-gray-300 font-serif text-xl md:text-4xl mt-4">
        Hello, My name is
      </p>
      <h1 className="text-white font-bold font-serif text-4xl md:text-9xl mb-8">
        David Martin.
      </h1>
      <p className="text-gray-300 text-lg md:text-2xl">
        I'm an aspiring Software Engineer passionate about exploring and
        building with the latest technologies.
      </p>

      {/* Social Links */}
      <div className="pt-5 text-xl md:text-4xl">
        <ul className="flex justify-center xl:justify-start space-x-10">
          <li className="text-white hover:text-green-600">
            <a href="mailto:david2020martin@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li className="text-white hover:text-green-600">
            <a href="https://github.com/IMARTYI">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>

          <li className="text-white hover:text-green-600">
            <a href="https://www.linkedin.com/in/david-martin-a65351243/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Image Section */}
    <div className="flex justify-center  bg-slate-50">
      <img
        className="rounded-full w-1/2 h-3/4 object-cover xl:w-3/4 xl:h-3/4 xl:aspect-auto aspect-square"
        src="../IMG_0772.jpg"
        alt="A picture of David Martin"
      />
    </div>
  </div>
</section>

<section className=" bg-cyan-100 w-full mb-44">
  <AboutMe />
</section>
        
        <div class="container my-24 mx-auto md:px-6 bg">
          <section class="mb-32">
            <h2 class="mb-12 text-center text-3xl font-bold text-white">
              Past Projects
            </h2>
            <section className=" flex justify-center w-1/2 items-center">
              <Pastprojects />
            </section>

            {/* <div class="grid gap-6 lg:grid-cols-3">
                <div
                  class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  <img
                    src="https://wcs.uwo.ca/upload/CE0060b.png"
                    class="w-full align-middle transition duration-300 ease-linear"
                  />
                  <a href="https://cosc.brocku.ca/~dm20zo/A5/tbrht/index.html">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                      <div class="flex h-full items-end justify-start">
                        <h5 class="m-6 text-lg font-bold text-white">
                          Full Stack Webpage
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                    </div>
                  </a>
                </div>

                <div
                  class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  <img
                    src="data:image/png;base64,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"
                    class="w-full align-middle transition duration-300 ease-linear"
                  />
                  <a href="https://github.com/IMARTYI/BasicsnakeGame">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                      <div class="flex h-full items-end justify-start">
                        <h5 class="m-6 text-lg font-bold text-white">
                          Basic Snake Game
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                    </div>
                  </a>
                </div>

                <div
                  class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  <img
                    src="https://www.thoughtco.com/thmb/U7ds6jA3MPQSVi6DzezZswcI5mY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/world-currency-rates-483658563-16daf393a06a43b88198cc0098af9fa9.jpg"
                    class="w-full align-middle transition duration-300 ease-linear"
                  />
                  <a href=" https://github.com/IMARTYI/CurrencyExchange">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                      <div class="flex h-full items-end justify-start">
                        <h5 class="m-6 text-lg font-bold text-white">
                          Currency Exchange
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                    </div>
                  </a>
                </div>

                <div
                  class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    class="w-full align-middle transition duration-300 ease-linear"
                  />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                      <div class="flex h-full items-end justify-start">
                        <h5 class="m-6 text-lg font-bold text-white">
                          {" "}
                          TCP Chat (Python)
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                    </div>
                  </a>
                </div>
                <div
                  class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgo 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"
                    class="w-full align-middle transition duration-300 ease-linear"
                  />
                  <a href="#!">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                      <div class="flex h-full items-end justify-start">
                        <h5 class="m-6 text-lg font-bold text-white">
                          {" "}
                          PSQl Database/ PSQL Triggers
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                    </div>
                  </a>
                </div>
                <div
                  class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  <img
                    src="data:image/png;base64,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"
                    class="w-full align-middle transition duration-300 ease-linear"
                  />
                  <a href="https://github.com/Bfernandez02/Translator-App">
                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                      <div class="flex h-full items-end justify-start">
                        <h5 class="m-6 text-lg font-bold text-white">
                          {" "}
                          Talk2Me Translation App
                        </h5>
                      </div>
                    </div>

                    <div>
                      <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                    </div>
                  </a>
                </div>
              </div> */}
          </section>
        </div>
      </div>
    </html>
  );
}
export default Intro;
