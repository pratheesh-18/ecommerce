import { MoveRight } from "lucide-react";




export default function HeroBanner(){
    return(
        <>
         
        <div className="flex flex-wrap lg:flex-nowrap justify-between ">
          <div className="lg:mt-10 mt-20 lg:px-10 px-3 lg:h-[80vh] h-[50vh] lg:w-5/6 w-full lg:relative ">
            <img
              src="/BANNER.webp"
              alt=""
              className=" rounded-xl h-full w-full "
              id="img"
            />
            <div className="lg:absolute top-20 left-16 lg:text-white text-black hover:animate-pulse  ">
              <h1 className="text-5xl lg:block hidden">
                Galaxy Folding <br />
                phones
              </h1>
              <h1 className="lg:text-5xl text-2xl lg:hidden block px-5 pt-5">
                Galaxy Folding
                phones
              </h1>
              <p className="lg:pt-10 pt-2 lg:px-0 px-5 lg:text-base text-xs">
                Which can vary depending on the brand and <br /> model
                electronic device.
              </p>
              <button className="flex border-solid border-2 lg:border-white border-black rounded-lg h-12 w-40 px-4 pt-2 lg:bg-white bg-blue-700 mt-8 lg:mx-0 mx-16 ">
                <span className="text-lg lg:text-black text-white">Shop now</span>{" "}
                <span className="px-2 pt-1 lg:text-black text-white">
                  <MoveRight />
                </span>
              </button>
            </div>
          </div>
          <div className=" pt-10 pr-10 h-[45vh] relative lg:mt-0 mt-40">
            <img
              src="/3.jpg"
              alt=""
              className="lg:mx-0 mx-4 rounded-xl h-full overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105"
            />
            <div className="absolute top-14 left-5 text-white">
              <h1 className="text-xl">
                Special discound <br /> UP TO 50% offer.
              </h1>
              <a href="#">Shop now</a>
            </div>
            <img
              src="/4.jpg"
              alt=""
              className="rounded-xl lg:mx-0 mx-4 h-full mt-4 overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105"
            />
            <div className="absolute lg:top-80 top-64 left-5 text-white">
              <h1 className="text-xl">
                HOT deal <br /> UP TO 30% offer.
              </h1>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      
        </>
    )
}