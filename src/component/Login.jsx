import Footer from "./Footer";
import Head from "./Head";
import Headers from "./Header";

export default function Login() {
  return (
    <>
      <div>
        <Head />
      </div>
      <hr className="border border-1" />

      <section>
        <Headers />
      </section>
      <div className="text-center">
           <div>
             <h1 className="text-4xl pt-10 pb-10">Login</h1>
             
           </div>
           <div>
                <h1 className="pr-[24%] text-xl pb-4">Email</h1>
                <input type="email" placeholder="Email" className="w-96 h-10 border border-solid border-black rounded-md px-2 mb-5"/>
            </div>
            <div>
                <h1 className="pr-[22%] text-xl pb-4">password</h1>
                <input type="password"  placeholder="password" className="w-96 h-10 border border-solid border-black rounded-md px-2"/>
            </div>
            <div className="pt-10 text-xl">
                <a href="#">Forget password?</a>
            </div>
            <div>
                <button  className="border border-solid border-black w-32 h-10 rounded-xl mt-5 text-white bg-blue-800">Sign in</button>
            </div>
      </div>
      <div className="mt-20" >
        <Footer />
      </div>
    </>
  );
}
