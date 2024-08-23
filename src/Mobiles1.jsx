import { Dot, Eye, Heart, Star, GitCompareArrows, ShoppingCart } from "lucide-react";

export default function Mobiles1(props) {
  const { imgUrl, title, price, stock, position } = props
  return (
    <>
      <div className="mobile group lg:w-full w-[30vh]">
        <div className="relative">
          <img src={imgUrl} alt="" className="lg:w-56 lg:h-56 " />
          <h3 className={`absolute top-5 lg:left-8 left-24 border border-solid border-1 border-black rounded-tl-lg rounded-br-lg 
            w-12 px-1 bg-black text-white ${position=='New'?'bg-blue-800 border-blue-700':'bg-black'} ${position==''?'hidden':'block'} `}>{position}</h3>
          <div className="absolute top-8 left-44 px-3 lg:block hidden  ">
            <span >< Heart className="border border-solid border-2 border-gray-400" /></span>
            <span ><GitCompareArrows  className="border border-solid border-2 border-gray-400 mt-2" /></span>
            <span ><Eye   className="border border-solid border-2 border-gray-400 mt-2"/></span>
          </div>
          <div className="absolute bottom-2  lg:block hidden " >
            <button className="flex border border-solid border-2 pt-2 px-10 text-white  bg-blue-800 h-10  w-52 rounded-lg 
              hover:bg-black ">
              <span className="">< ShoppingCart /></span>
              <h3 className="px-2 ">Quick Shop</h3>
            </button>
          </div>

        </div>

        <div className="px-8 lg:text-base text-sm">
          <div>
            <h1 className="hover:text-blue-600"><b>{title}</b></h1>
            <h1>{price}</h1>
          </div>
          <div className="flex text-yellow-700 ">
            <span ><Star size={15} /></span>
            <span><Star size={15} /></span>
            <span><Star size={15} /></span>
            <span><Star size={15} /></span>
            <span><Star size={15} /></span>

          </div>
          <div className="flex text-green-700">
            <span><Dot /></span>
            <h1>In stock {stock} Items</h1>
          </div>
        </div>
      </div>
    </>
  )
}