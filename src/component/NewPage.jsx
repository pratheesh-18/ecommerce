import { Search, UserRound, Heart, ShoppingCart, Menu, Laptop, Camera, Smartphone, Zap, Star, Check, ArrowUpDown, Facebook, Twitter, Share, Mail, MoveRight, Music2, Instagram } from "lucide-react";
import Mobiles from "./Mobiles";
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Head from "./Head";
import Headers from "./Header";
import Footer from "./Footer";
import Watches from "../Watches";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function NewPage() {
    let {product_Id}=useParams()
   
    // const nextData = [
    //     {
    //         imgUrl: "/phone.jpg",
    //         title: "Tablet Apple iPad",
    //         price: '$230.00',
    //         stock: '72',
    //         position: ''


    //     },
    //     {
    //         imgUrl: "/phone6.jpg",
    //         title: "iPhone 12 Pro Max",
    //         price: '$120.00',
    //         stock: '84',
    //         position: 'Sale'

    //     },
    //     {
    //         imgUrl: "/phone7.jpg",
    //         title: "Samsung Galaxy Fold",
    //         price: '$250.00',
    //         stock: '68',
    //         position: 'New'

    //     },
    //     {
    //         imgUrl: "/phone8.jpg",
    //         title: "Samsung Galaxy S21 5G",
    //         price: '$290.00',
    //         stock: '100',
    //         position: 'Sale'

    //     },
    //     {
    //         imgUrl: "/phone9.jpg",
    //         title: "Samsung S21 Ultra",
    //         price: '$230.00',
    //         stock: '76',
    //         position: 'New'

    //     },
    // ]
    const [countnumber, setcountnumber] = useState(1)
    
    function AddcountValue(){
        const Addvalue= setcountnumber(countnumber+1)
        setcountnumber([...countnumber,Addvalue])
    }
    function DeletecountValue(){
        const Deletevalue= setcountnumber(countnumber-1)
        setcountnumber([...countnumber,Deletevalue])
    }
       const BaseURL = `http://localhost:3000/products/singleProduct/${product_Id}`
       const [DetailList, setDetailList] = useState([])
       console.log(DetailList);
       useEffect(() => {
         axios.get(BaseURL).then((res) => {
                                                                            
           let detail = res.data.results[0]
           
           setDetailList(detail)
         }) 
       }, []);

       const url = 'http://localhost:3000/products?limit=6'
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
            <Head/>
           </div>
            <hr className="border border-1" />
            <section>
                <Headers/>
            </section>
            <section>
                <div className="flex lg:flex-nowrap flex-wrap ">
                    <div>
                        <div className="lg:w-[85vh] w-[40vh]">
                        <img src={`/${DetailList.Image}`} alt="" className=" lg:w-full lg:h-full  lg:mx-10 mx-20 mt-20" />
                        </div>
                        {/* <div className=" flex lg:mx-10 mx-14  lg:mt-20 mt-9">
                            <img src="/phone.jpg" alt="" className=" lg:w-36  lg:h-44 w-30  h-20 border border-solid  hover:border-black" />
                            <img src="/phones.jpg" alt="" className=" lg:w-36  lg:h-44 w-30  h-20 border border-solid hover:border-black" />
                            <img src="/phone3.jpg" alt="" className=" lg:w-36  lg:h-44 w-30  h-20 border border-solid hover:border-black" />
                            <img src="/phone4.jpg" alt="" className=" lg:w-36  lg:h-44  w-30  h-20 border border-solid hover:border-black  lg:block hidden" />
                            <img src="/phone5.jpg" alt="" className="lg:w-44     lg:h-44 w-30  h-20 border border-solid hover:border-black   lg:block hidden "/>


                        </div> */}
                    </div>
                    <div className="lg:pt-10  pt-20 lg:mx-20  w-[100vh]" >
                        <div className="lg:px-0 px-5">
                            <h1>Vendor: Isotech - Electronics Products</h1>
                            <h1 className="lg:text-4xl text-2xl lg:pt-5"><b>{DetailList.product_name}</b></h1>
                        </div>
                        <div className="flex text-yellow-700 lg:pt-5 pt-2 lg:px-0 px-5">
                            <span ><Star size={15} /></span>
                            <span><Star size={15} /></span>
                            <span><Star size={15} /></span>
                            <span><Star size={15} /></span>
                            <span><Star size={15} /></span>

                        </div>
                        <div className="lg:px-0 px-5">
                            <h1 className="text-3xl lg:pt-5 pt-2">${DetailList.Price}</h1>
                            <h1 className="text-xl lg:pt-5 pt-2">Only { DetailList.Stock} items in stock!</h1>
                            <hr className="border border-solid border-blue-700 mt-5 w-48 border-2 " />
                           
                        </div>
                        <div className="flex lg:mx-0 mx-5">
                            <div className="flex border border-solid border-black w-32 h-10 rounded-xl  mt-5">
                                <button className="mx-2" onClick={DeletecountValue}>-</button>
                                <input type="text" value={countnumber} className="w-20 px-8"  />
                                <button onClick={AddcountValue} >+</button>
                            </div>
                            <div>
                                <button className="border border-solid border-black h-10 w-32 rounded-xl mt-5 mx-8 hover:bg-black hover:text-white 
                            transition-colors duration-500 ease-in-out">Add to Cart</button>
                            </div>
                        </div>
                        <div>
                            <button className="border border-solid border-blue-700 h-10 w-72 mt-5 lg:mx-0 mx-5 bg-blue-700 text-white
                             rounded-xl overflow-hidden transition-transform duration-300 ease-in-out  hover:scale-105">Buy Now</button>
                        </div>
                        <div className="flex pt-5 lg:px-0 px-5">
                            <span className="text-lime-600"><Check /></span>
                            <h1>Pickup available at France Warehouse</h1>
                        </div>
                        <div>
                            <h1 className="text-sm pt-2 lg:px-5 px-8">Usually ready in 24 hours</h1>
                        </div>
                        <div className="flex mt-5 lg:flex-nowrap flex-wrap lg:mx-0 mx-5">

                            <button className="flex mx-3">
                                <span><Heart /></span>
                                <h1 className="px-2">Add to WishList</h1>
                            </button>
                            <button className="flex lg:mx-5 mx-3 lg:mt-0 mt-3">
                                <span><ArrowUpDown /></span>
                                <h1 className="px-2">Add to Compare</h1>
                            </button>

                        </div>
                        <div className="flex lg:px-3 px-6 pt-5">
                            <div className="flex">
                                <span><Facebook /></span>
                                <a href="#">Facebook</a>
                            </div>
                            <div className="flex px-5">
                                <span><Twitter /></span>
                                <a href="#">Twitter</a>
                            </div>
                            <div className="flex px-5">
                                <span><Share /></span>
                                <a href="#">Share</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div>
                    <h1 className="text-3xl text-center pt-20">You may also like</h1>
                </div>
                <div className="lg:flex hidden lg:px-5 mt-10 ">
                <Carousel responsive={responsive} className="lg:px-10 px-1 pt-10">
                {
                    SampleProduct.map((item)=>{
                        return <Mobiles cardDetails={item}/>
                    })
                 }
              </Carousel>;
                
                </div>
                <div className="lg:text-2xl flex lg:pt-60 pt-32 lg:px-10 px-2">
                    <h1 className="hover:text-blue-600 underline underline-offset-8">Description</h1>
                    <h1  className="hover:text-blue-600 lg:px-6 px-1"> Product Reviews</h1>
                    <h1  className="hover:text-blue-600 lg:px-5">Privacy policy</h1>
                        

                </div>
                <div className="lg:px-10 px-5 pt-10">
                    <h1>{DetailList.description}</h1>
                    <h1 className="pt-5">Here's a typical description of what you might expect:</h1>
                    <h1 className="pt-3"><b>Name: </b>iPad (10th Generation)</h1>
                    <h1 className="pt-5"><b>Design:</b></h1>
                    <ul className="lg:px-16 px-10">
                        <li>The 10th generation iPad would likely continue with a sleek and lightweight design.</li>
                        <li>It might have a 9.7-inch to 10.2-inch Retina display with improved color accuracy and brightness.</li>
                        <li>Expect a durable aluminum or glass body in a variety of color options</li>
                    </ul>
                    <h1  className="pt-5"><b>Performance:</b></h1>
                    <ul className="lg:px-16 px-10">
                        <li>The iPad would likely feature a more powerful processor than its predecessor, offering improved performance for tasks like multitasking, gaming, and content creation.</li>
                        <li>Increased RAM to handle demanding apps and multitasking seamlessly.</li>
                    </ul>
                </div>
            </section>
            <span>
                <Footer/>
            </span>
          
        </>
    )
}