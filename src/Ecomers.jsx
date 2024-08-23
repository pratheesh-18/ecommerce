
import Mobiles from "./component/Mobiles";

import Accessories from "./component/Accesory";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./API/product";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Head from "./component/Head";
import Headers from "./component/Header";
import HeroBanner from "./component/HeroBanner";
import ShowProduct from "./component/ShowProduct";
import TrendingMobiles from "./component/TrendingMobiles";
import TrendingWatch from "./component/TrendingWatch";
import Brand from "./component/Brand";
import Footer from "./component/Footer";
import ProductCard from "./API/product";
import Watches from "./Watches";



export default function Ecomers() {
  const Baseurl = 'http://localhost:3000/category/'
  const [categorylist , setcategorylist]=useState([])
  console.log(categorylist);
  useEffect(()=>{
    axios.get(Baseurl).then((res)=>{
     console.log(res.data);
     const category =res.data.results;
     setcategorylist(category)
      

    })
  },[]);

  const url = 'http://localhost:3000/products'

const [SampleProduct, setSampleProduct]=useState([])
console.log(SampleProduct);

  useEffect(() => {
    axios.get(url).then((res) => {
    let products = res.data.results
  
    setSampleProduct(products)
    
    })
  }, []);
  




  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };



  return (
    <>

      <div>
        <Head />
      </div>
      <hr className="border border-1" />

      <section>
        <Headers />
      </section>

      <section>
        <HeroBanner />
      </section>
      <section>
        <ShowProduct />
      </section>
      <section>
        <TrendingMobiles />
      </section>
      <section>
        <TrendingWatch />
      </section>
      <section>
        <div>
          <div>
            <h1 className="lg:text-3xl text-2xl lg:px-10 px-16 pt-10"><b>Collection list</b></h1>
          </div>
          <Carousel responsive={responsive} className="lg:px-10 px-1 z-0">
           
            {
              categorylist.map((item)=>{
                return <Accessories details={item}/>
              })
            }
          
          </Carousel>;

        </div>
        <div>
          <h1 className="lg:text-3xl text-2xl px-10 pt-10"><b>Trending This Week</b></h1>
        </div>
        <Carousel responsive={responsive} className="lg:px-10 px-1 pt-10">
          {
            SampleProduct.map((item) => {
              return <Mobiles cardDetails={item} />
            })
          }
        </Carousel>;
      </section>
      <section>

        <Brand />

      </section >
      <span>
        <Footer />
      </span>

     

    






    </>
  );
}
