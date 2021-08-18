import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

function Nav() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="w-full tracking-wider flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="title-font font-medium px-2 text-2xl cursor-default whitespace-nowrap  text-white">
          {"E-COMMERCE </>"}
        </div>
        <div className="m-auto flex justify-center items-stretch w-6/12 rounded-full overflow-hidden">
          <input
            id="name"
            className=" bg-gray-600 w-full outline-none pl-4 text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            name="hidden"
            placeholder="Search"
            autoComplete="off"
            required
          />
          <div className="px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black bg-yellow-400 text-gray-900 inline-flex justify-center items-center">
            <BiSearchAlt />
            <button type="submit">SEARCH</button>
          </div>
        </div>
        <nav className=" flex flex-wrap justify-center items-center text-lg ">
          <Link to="/" className="px-4 py-2 hover:text-white">
            HOME
          </Link>
          <Link to="/" className=" px-4 py-2 hover:text-white">
            WISHLIST
          </Link>
          <Link to="/" className="px-4 py-2 hover:text-white">
            CART
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;

// sm:w-full xl:w-3/4 lg:w-3/4 md:w-3/4 INPUT
