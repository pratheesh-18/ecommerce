 



 export default function ShowProduct(){
    return(
        <>
          <div className="flex flex-wrap lg:flex-nowrap  justify-around pt-5 relative lg:mt-0 mt-56">
          <img
            src="/5.jpg"
            alt=""
            className="rounded-lg lg:w-[60vh] w-[55vh] overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105"
          />
          <div className="absolute lg:left-20 left-8 lg:top-20 top-16 text-white">
            <h1 className="text-xl">Home pad Speaker</h1>
            <a href="#">Shop now</a>
          </div>
          <img
            src="/mobile.jpg"
            alt=""
            className="rounded-lg lg:w-96 w-72 lg:pt-0 pt-5 border-solid border-4 overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105"
          />
          <div className="absolute lg:top-20 top-48 lg:left-[85vh] left-[6vh]">
            <h1 className="text-xl">Apple ipad</h1>
            <a href="#">Shop now</a>
          </div>
          <img
            src="/cam.jpg"
            alt=""
            className="rounded-lg lg:w-96 w-72 lg:pt-0 pt-5 overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105 "
          />
          <div className="absolute lg:top-20 top-80 lg:right-60 right-44 text-white">
            <h1 className="text-xl ">Hero camera</h1>
            <a href="#">Shop now</a>
          </div>
        </div>
        </>
    )
 }