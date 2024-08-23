import { Search ,UserRound,Heart,ShoppingCart} from "lucide-react";




export default function Head(){
    return(
        <>
              <div className="flex lg:justify-between justify-normal pt-5 fixed top-0 left-0 right-0 bg-white z-20 ">
        <div className="lg:px-8 px-3">
          <img src="/logo.webp" alt="" />
        </div>
        <div className="flex lg:mr-20 mr-5 h-10">
          <select className="border border-2 border-neutral-950 w-32 rounded-l-lg border-r-neutral-200 lg:block hidden ">
            <option value="All tags">All tag</option>
            <option value="Air pods">Air pods</option>
            <option value="Budds">Budds</option>
            <option value="Camera">Camera</option>
            <option value="Laptop">Laptop</option>
            <option value="Mobile">Mobile</option>
          </select>
          <div className="lg:flex hidden">
            <input
              type="text"
              placeholder="Search our store"
              className="border border-2 border-neutral-950 w-80 border-r-neutral-200 px-2"
            />
            <button className="border border-2 border-neutral-950 w-15 px-2 rounded-r-lg bg-indigo-800 text-slate-50 ">
              <Search />
            </button>
          </div>
        </div>

        <div className="flex pt-3 mr-10">
          <span className="pr-3">
            <a href="/login">
            {" "}
            <UserRound />
            </a>
          </span>
          <span className="pr-3">
            {" "}
            <Heart />
          </span>
          <span className="pr-3">
            <ShoppingCart />
            
          </span>
        </div>
       
      </div>
        </>
    )
}