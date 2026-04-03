import cartImage from "../../src/assets/products/shopping-cart.png";

const NavBar = ({ carts }) => {
  return (
    <div className="navbar w-[80%] mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-3xl ">
          <h1 className="text-purple-600">DigiTools</h1>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-3 px-1 text-lg">
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

      <div className="navbar-end flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={cartImage} alt="Cart" className="h-6 w-6" />
            <span className="bg-red-500 text-white w-5 h-5 rounded-full absolute -top-2 -right-2 flex items-center justify-center text-xs">
              {carts.length}
            </span>
          </div>
          <button className="px-4 py-2 bg-gray-200 rounded-full">Login</button>
        </div>

        <a className="btn bg-purple-500 rounded-full text-white px-4 py-2">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default NavBar;
