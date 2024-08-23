


export default function Accessories(props){

   
    const{details}=props
    return(
        <>
          <div className="pt-10 ">
              <div>
               <a href={`/selectedCategory/${details.category_id}`}> <img src={details.image} alt="" className="h-[30vh] w-[30vh] "/></a>
         
              </div>
              <div className="px-12 tracking-wider font-sans">
              <h1 className="lg:text-xl text-base"><b>{details.category_name}</b></h1>
              {/* <h1 className="pt-1 lg:text-base  text-xs">{stock} items</h1> */}

              </div>
          </div>
   
        

          
        
        </>
    )
}