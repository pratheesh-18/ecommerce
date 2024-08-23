



export default function ProductCard(props) {
    
   

  const {cardDetail}=props

    return (
        <>

            <div className="border border-solid border-slate-600 border-2 w-[30vh] mx-10  rounded-lg  mb-8  transition
             ease-in-out delay-150  hover:-translate-y-1 
      hover:scale-110 hover: duration-300  bg-white ">
                <div>
                    <img src={cardDetail.image} alt="" className="w-[20vh] h-[30vh] mx-6 mt-3"/>
                </div>
                <div>
                    <h1 className="text-base px-5 font-sans line-clamp-2 pt-5 ">{cardDetail.title}</h1>
                    <h1 className="px-5 text-xl pt-2 font-sans">${cardDetail.price}</h1>
                    <h1 className="px-5 text-base pt-2 font-sans">{cardDetail.category}</h1>
                    

                </div>
            </div>
        </>
    )
}