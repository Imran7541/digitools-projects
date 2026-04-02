import React from "react";
import cartImage from "../../src/assets/products/shopping-cart.png";
const NavBar = ({ carts }) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-3xl ">
          <h1 className="text-[#4F39F6]">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="relative">
          <img src={cartImage} />
          <span className="bg-red-500 text-white w-5 h-5 rounded-full absolute -top-4 -right-3 flex items-center justify-center">
            {carts.length}{" "}
          </span>
        </div>
        <button>Login</button>
        <a className="btn bg-blue-500 rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;
