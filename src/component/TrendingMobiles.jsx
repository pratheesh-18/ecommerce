
import Mobiles from "./Mobiles"
import { useState,useEffect } from "react";
import axios from "axios";


export default function TrendingMobiles(){
  
  const[ selectedCategory,setselectedCategory]=useState(1)
  console.log(selectedCategory);
     const url = `http://localhost:3000/category/products/${selectedCategory}`
  const [SampleProduct, setSampleProduct]=useState([])
  
 
  
console.log(SampleProduct);

  useEffect(() => {
    axios.get(url).then((res) => {
    let products = res.data.results
  
    setSampleProduct(products)
    
    })
  }, [selectedCategory]);

  const BaseUrl ='http://localhost:3000/category/'
  const [categorieslist,setcategorylist]=useState([])
  console.log(categorieslist);
  
  useEffect(() => {
    axios.get(BaseUrl).then((res) => {
    let categories = res.data.results
  
    setcategorylist(categories)
    
    })
  }, []);
    return(
        <>
         <div>
          <h1 className="lg:text-3xl text-2xl lg:pt-20 pt-10 lg:px-10 px-5 tracking-wider font-sans  "><b>Trending products</b></h1>
        </div>
        <div className="max-w-96 lg:overflow-visible overflow-hidden">
          <ul className="flex justify-around  w-2/5 mx-5 lg:mt-8 mt-3 lg:text-xl text-lg font-sans">
          {
            categorieslist.map((item)=>{
              return  <li className="hover:text-blue-600 px-5 cursor-pointer" key={item.category_id} onClick={()=>setselectedCategory(item.category_id)}>{item.category_name}</li>
            })
          }
            
          </ul>
        </div>
        <div className="flex  flex-wrap lg:mx-10  mt-10 lg:justify-around justify-normal">


          {
            SampleProduct.map((item) => {
              return <Mobiles cardDetails={item} />
            })
          }



      
        </div>
        </>
    )
}