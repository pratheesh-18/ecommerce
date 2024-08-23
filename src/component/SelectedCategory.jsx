import { Menu } from "lucide-react";
import Head from "./Head";
import Headers from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Mobiles from "./Mobiles";
import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function SelectedCategory() {
  let { category_id } = useParams();

  const url = `http://localhost:3000/category/products/${category_id}`;
  const [SampleProduct, setSampleProduct] = useState([]);

  console.log(SampleProduct);

  useEffect(() => {
    axios.get(url).then((res) => {
      let products = res.data.results;

      setSampleProduct(products);
    });
  }, []);
  return (
    <>
      <div>
        <Head />
      </div>
      <hr className="border border-1" />

      <section>
        <Headers />
      </section>
      <div className="flex justify-between mt-10 ">
        <div>
          <h1 className="text-3xl mx-10">PRODUCTS</h1>
        </div>
        <div>
          <h1 className="text-xl">Price</h1>
          <p>The highest price is:$890.00</p>
          <input type="range" className="w-48" />
          <h1>
            <b>Price:</b>
          </h1>
        </div>
        <div>
          <div className=" px-10 relative z-10">
            <button className="flex button border-solid border-4 w-48 hover:text-red-600">
              <span>
                <Menu />
              </span>
              <span className="px-2">Short</span>
            </button>
            <ul className="absolute top-8 left-10 bg-white w-48 rounded-lg hidden h-60 drop  border-solid border-4">
              <hr className="border-solid border-gray-50" />
              <li className="flex pt-2">
                <a className="px-2 ">Featured </a>
              </li>
              <hr className="border-solid border-gray-50" />
              <li className="flex pt-2">
                <a className="px-2 ">Best selling</a>
              </li>
              <hr className="border-solid border-gray-50" />
              <li className="flex pt-2">
                <span className="px-2">Alphabetically, A-Z</span>
              </li>
              <hr className="border-solid border-gray-50" />
              <li className="flex pt-2">
                <span className="px-2">Alphabetically, Z-A</span>
              </li>
              <hr className="border-solid border-gray-50" />
              <li className="flex pt-2">
                <span className="px-2">Price, low to high</span>
              </li>
              <hr className="border-solid border-gray-50" />
              <li className="flex pt-2">
                <span className="px-2">rice, high to low</span>
              </li>

              <hr className="border-solid border-gray-50" />
            </ul>
          </div>
        </div>
       
      </div>
      <div className="flex flex-wrap  w-[90%] gap-6 mt-7 mx-20">
          {SampleProduct.map((item) => {
            return <Mobiles cardDetails={item} />;
          })}
        </div>
        <span>
        <Footer />
      </span>
    </>
  );
}
