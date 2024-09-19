import React, { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <nav className="w-screen bg-white h-20 flex items-center justify-between border-b-2">
        <h1 className=" text-3xl text-black p-5 font-semibold ml-5 font-inter">
          DotLib
        </h1>

        {/* <!-- nav list start here --> */}
        <div className="text-black hidden text-xl lg:block font-Poppins">
          <a href="#" className="mr-4 hover:text-cyan-500">
            Home
          </a>
          <a href="#" className="mr-4 hover:text-cyan-500">
            Courses
          </a>
          <a href="#" className="mr-4 hover:text-cyan-500">
            Wishlist
          </a>
          <a href="#" className="mr-4 hover:text-cyan-500">
            About us
          </a>
          <a href="#" className="mr-4 hover:text-cyan-500">
            log in
          </a>
        </div>
        {/* <!-- nav list ends here  --> */}

        {/* <!-- hamburger starts here--> */}

        <div className=" lg:hidden" onClick={()=>setShowLinks(!showLinks)}>
          <i className="fa-solid fa-bars fa-xl text-black mr-4"></i>
        </div>
        {/* <!-- hamburger ends here --> */}

        {/* <!-- create account button statrs here --> */}
        <div className="hidden lg:block bg-cyan-600 p-3 text-white rounded-lg mr-5 font-inter">
          <button>Create new account</button>
        </div>
        {/* <!-- create account button ends here --> */}

        {/* <!-- navbar for smaller devices --> */}
        {showLinks ? (
          <div
            id="toggleMenue"
            className=" bg-white fixed inset-0"
          >
            <div className="w-full h-20 bg-white  flex items-center justify-between border-b-2">
              <h1 className=" text-3xl text-black p-5 font-semibold ml-5 font-inter">
                DotLib
              </h1>
              <div className="lg:block" onClick={() => setShowLinks(!showLinks)}>
                <i className="fa-solid fa-xmark fa-xl text-black mr-4"></i>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
              >
                Home
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
              >
                Courses
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
              >
                About us
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
              >
                log in
              </a>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className=" bg-cyan-600 px-3 py-4 text-white rounded-sm font-inter w-48 ml-5 mt-6">
              <button>Create new account</button>
            </div>
          </div>
        ) : null}
        {/* <!-- navbar for smaller devices --> */}
      </nav>
      {/* <!-- navbar ends here --> */}
    </div>
  );
}

export default Navbar;
