import Mobiles from "./Mobiles"
import { useState,useEffect } from "react";
import axios from "axios";
import Watches from "../Watches";


export default function TrendingWatch(){
  const url = 'http://localhost:3000/products/limitedProduct'

const [SampleProduct, setSampleProduct]=useState([])
console.log(SampleProduct);

  useEffect(() => {
    axios.get(url).then((res) => {
    let products = res.data.results
  
    setSampleProduct(products)
    
    })
  }, []);
    return(
        <>
          <div>
          <div className="flex lg:mx-10 mx-3 lg:mt-28 mt-5 lg:flex-nowrap	 flex-wrap ">
            <div className="h-[42vh] w-[104vh]  relative">
              <img src="watch.jpg" alt="" className="w-full h-full rounded-xl 
              overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105" />
              <div className="absolute top-16 left-5 text-white ">
                <h1 className="text-3xl font-mono"><b>GoPro Omni Camera</b></h1>
                <p className="pt-3 pb-5">Pair text with an icon to focus on your store future</p>
                <a href="#" className=""> Shop now</a>
              </div>
            </div>
            <div className="lg:h-[42vh] h-[49vh] w-[104vh] relative lg:mt-0 mt-3">
              <img src="iphone.jpg" alt="" className="w-full h-full rounded-xl lg:mx-5 
              overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105" />
              <div className="absolute top-16 left-10 text-white ">
                <h1 className="text-3xl font-mono"><b>iphone 14 pro Max</b></h1>
                <p className="pt-3 pb-5 ">Pair text with an icon to focus on your store future</p>
                <a href="#"> Shop now</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="lg:text-3xl text-2xl lg:pt-16 pt-8 px-10  font-sans tracking-wider"><b>Best Deals Product</b></h1>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap">
            <div className="lg:px-10 px-3 lg:pt-10 pt-5 relative w-[122vh]">
              <img src="smart.jpg" alt="" className="rounded-2xl " />
              <div className="absolute top-14 lg:left-16 left-5 text-white">
                <h1 className="text-3xl font-sans">Hot Deal</h1>
                <p className="pt-4">Pair text with an image to focus on your <br /> chosen product,collection,or blog post</p>
                <button className="border border-2 border-solid border-black mt-4 h-16 w-28 rounded-xl
                   bg-white text-black hover:bg-black hover:text-white transition-colors duration-500 ease-in-out"><b>Shop now</b></button>
              </div>
            </div>
            <div className="lg:mt-0 mt-5">
           
              <div className="flex  flex-wrap  ">
              {
                  SampleProduct.map((pro)=>{
                    return <Watches cardDetails={pro}/>
                  })
                }

              </div>
            </div>
          </div>
        </div>
        </>
    )
}