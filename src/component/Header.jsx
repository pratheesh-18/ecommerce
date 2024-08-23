import { Menu ,Laptop,Camera,Smartphone ,Zap} from "lucide-react";
import { useState,useEffect } from "react";
import axios from "axios";


export default function Headers(){
  const url = 'http://localhost:3000/category/'
  const [categorylist , setcategorylist]=useState([])
  console.log(categorylist);
  useEffect(()=>{
    axios.get(url).then((res)=>{
     console.log(res.data);
     const category =res.data.results;
     setcategorylist(category)
      

    })
  },[]);
    return(
        <>
        
        <nav className="lg:flex hidden justify-between pt-24 bg-white ">
          <div className=" px-10 relative z-10">
            <button className="flex button border-solid border-4 w-48 hover:text-red-600">
              <span>
                <Menu />
              </span>
              <span className="px-2">All Categories</span>
            </button>
            <ul className="absolute top-8 left-10 bg-white w-48 rounded-lg hidden h-48 drop  border-solid border-4">
              <hr className="border-solid border-gray-50" />
            
             
                {
                   categorylist.map((item)=>{
                    return <li className="pt-2">{item.category_name}</li>
                  })
                }
             
              <hr className="border-solid border-gray-50" />
            </ul>
          </div>
          <div>
            <ul className="flex pr-2 ">
              <li className="px-5"><a href="/Home">HOME</a></li>
              <li className="px-5">SHOP</li>
              <li className="px-5">CATEGORIES</li>
              <li className="px-5">PRODUCT</li>
              <li className="px-5">BLOG</li>
              <li className="px-5">PAGE</li>
            </ul>
          </div>
          <div className="flex pr-12">
            <Zap />
            <h3> UP TO 60% off All Items</h3>
          </div>
        </nav>
     
        
        </>
    )
}