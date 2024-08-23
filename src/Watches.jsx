import { Dot, Eye, Heart, Star, GitCompareArrows, ShoppingCart } from "lucide-react";
// import { useNavigate, useNavigation } from "react-router-dom";


export default function Watches(props) {
  // const { imgUrl, title, price, stock, position,rating,width,id } = props
  // const navigate = useNavigate()
  const {cardDetails}=props
  
  
  return (
    <>
     
      <div className={`mobile group  transition ease-in-out delay-150  hover:-translate-y-1 
      hover:scale-110 hover: duration-300 lg:w-[35vh] w-[27vh] mx-2 lg:mb-5 border border-solid lg:border-neutral-200 border-2 rounded-xl`}>
        <div className="relative mx-5 lg:mt-3">
        <a href={`/QuickShop/${cardDetails.product_Id}`}> <img src={`/${cardDetails.Image}`} alt="" className=" lg:w-48 w-32 lg:h-52 h-32  " /></a>
        
          {/* <div className="absolute top-8 left-36 px-3  hidden lg:group-hover:block ">
            <span >< Heart className=" border border-solid border-2 border-gray-400 "  /></span>
            <span  ><GitCompareArrows  className="border border-solid border-2 border-gray-400 mt-2" /></span>
            <span  ><Eye   className="border border-solid border-2 border-gray-400 mt-2"/></span>
          </div> */}
         

        </div>
        <div className="px-8">
          <div className="lg:text-base text-sm">
            <h1 className=" lg:line-clamp-1 line-clamp-2 hover:text-blue-600"><b>{cardDetails.product_name}</b></h1>
            <h1>${cardDetails.Price}</h1>
          </div>
          <div className={`flex text-yellow-700  `}>
            <span ><Star size={15}  /></span>
            <span><Star size={15} /></span>
            <span><Star size={15} /></span>
            <span><Star size={15} /></span>
            <span><Star size={15} /></span>

          </div>
          <div className="flex text-green-700  ">
            <span><Dot /></span>
            <h3 className="text-sm lg:line-clamp-3 line-clamp-2">In stock {cardDetails.Stock} Items</h3>
          </div>
        </div>
        <div className="    mt-3 lg:mb-1 mb-5 " >
          
           <button className="lg:flex  border border-solid border-2 border-blue-800 rounded-lg  lg:pt-2 lg:px-10 px-2  lg:h-10 h-8 lg:w-52 w-36  
             hover:bg-black hover:text-white hover:transition duration-300  relative" >
             <span className="">< ShoppingCart /></span>
             <h3 className="px-2  lg:static absolute  top-0 left-8  ">Quick Shop</h3>
           </button>
          
         </div>
      </div>
      
    </>
  )
}
