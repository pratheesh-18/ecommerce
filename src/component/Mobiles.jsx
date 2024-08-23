import { Dot, Eye, Heart, Star, GitCompareArrows, ShoppingCart } from "lucide-react";
// import { useNavigate, useNavigation } from "react-router-dom";


export default function Mobiles(props) {
  // const { imgUrl, title, price, stock, position,rating,width,id } = props
  // const navigate = useNavigate()
  const {cardDetails}=props
  
  
  return (
    <>
     
      <div className={`mobile group  transition ease-in-out delay-150  hover:-translate-y-1 
      hover:scale-110 hover: duration-300 lg:w-[35vh] w-[25vh] mb-10 border border-solid lg:border-neutral-200 border-2 rounded-xl lg:mx-0 mx-3`}>
        <div className="relative  mt-3 w-full ">
         <a href={`/QuickShop/${cardDetails.product_Id}`}> <img src={`/${cardDetails.Image}`} alt="" className=" lg:w-[70vh] w-32 lg:h-[40vh] h-32 " /></a>
        
         
         

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
          <div className="flex text-green-700 ">
            <span><Dot /></span>
            <h3 className="text-sm ">In stock {cardDetails.Stock} Items</h3>
          </div>
        </div>
        <div className=" mt-3 mb-1  " >
          
           <button className="lg:flex  border border-solid border-2 border-blue-800 rounded-lg lg:pt-2 lg:px-12 px-2   lg:h-10 h-8 lg:w-52 w-32  relative
             hover:bg-black hover:text-white hover:transition duration-300  " >
             <span className="">< ShoppingCart /></span>
             <h3 className="lg:static absolute top-0 left-9  ">Quick Shop</h3>
           </button>
          
         </div>
      </div>
      
    </>
  )
}




