import { Facebook, Instagram, Mail, MoveRight, Music2, Twitter } from "lucide-react";




export default function Footer(){
    return(
        <>
         <section className="border border-2 border-solid  border-t-stone-300 ">
        <div className="flex lg:justify-between pt-10 mb-5 lg:flex-row flex-col ">
          <div className="lg:px-10 px-3">
            <div>
              <h1 className=" text-xl"><b>About us</b></h1>
              <p className="pt-5 text-lg lg:block hidden">The exciting contemporary brand <br /> Suruchi is known for its attention to <br /> detail and premium graphics.</p>
            </div>
            <div className=" pt-5 lg:flex hidden">
              <span><Twitter /></span>
              <span><Facebook /></span>
              <span><Instagram /></span>
              <span><Music2 /></span>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl lg:px-0 px-3 lg:pt-0 pt-3"><b>Quick Links</b></h1>
            </div>
            <ul className="pt-5 lg:block hidden">
              <li className="text-lg pt-2 hover:text-blue-700"><a href="#">FAQ</a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">Find store location </a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">Privacy policy</a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">Refund policy</a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">Term of service</a></li>
            </ul>
          </div>
          <div>
            <div>
              <h1 className="text-xl lg:px-0 px-3 lg:pt-0 pt-3"><b>Company</b></h1>
            </div>
            <div>
            <ul className="pt-5 lg:block hidden">
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">Wishlist</a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">My accound</a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">Product compare</a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">Cart</a></li>
              <li  className="text-lg pt-2 hover:text-blue-700"><a href="#">About us</a></li>
            </ul>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl lg:px-0 px-3 lg:pt-0 pt-3"><b>Newsletter</b></h1>
              <p className="pt-5 text-lg lg:block hidden">Write your email first to know about any <br /> information</p>
            </div>
            <div className=" pt-5 lg:flex hidden">
              <span><Mail /></span>
              <input type="email" placeholder="Entre your email" />
              <span><MoveRight /></span>
            </div>
          </div>
        </div>
        <div className="flex mb-5 border border-2 border-solid border-t-stone-300 lg:flex-nowrap flex-wrap ">
          <div className="px-10 mt-5 lg:block flex" >
          <select >
            <option value="Australia USD$">Australia USD$</option>
            <option value="Emerati arabi uniti$">Emerati arabi uniti$</option>
            <option value="Regno Unito USD$"> Regno Unito USD$</option>
            <option value="Stati Uniti USD$">Stati Uniti USD$</option>


           </select>
           <select >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Deutsch"> Deutsch</option>
            <option value="Itlain">Itlain</option>


           </select>
          </div>
          <div className="lg:px-48 px-8 mt-5">
            <h1 >© 2024,
            Powered by HookThemes</h1>
          </div>
          <div className="w-[10vh]  h-[5vh] flex lg:mx-36 mx-14 mt-3 ">
            <img src="/visa.png" alt="" className="w-full h-full" />
            <img src="/master.png" alt="" className="w-full h-full" />
            <img src="/paypal.png" alt="" className="w-full h-full " />
            <img src="/discover.png" alt="" className="w-full h-full " />
          </div>
        </div>

      </section>
        </>
    )
}