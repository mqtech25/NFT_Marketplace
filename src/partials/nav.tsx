import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import * as icon from "react-icons/fa";
const Nav = () => {
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 bg-[#242424]">
        <div className="flex justify-evenly items-center  p-3">
          <img src={logo} alt="" />
          <i className="text-white">{<icon.FaBars size={28} />}</i>
        </div>
        <div className=" col-span-2">
          <input type="text" className="px-3 py-2" name="name" />
          <nav className="list">
            <ul>
              <li>Item1</li>
              <li>Item2</li>
              <li>Item3</li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center ">Cart</div>
      </div> */}
      <nav className="bg-dark-color text-white dark-shadow">
        <div className="flex w-11/12 mx-auto justify-between  h-20">
          <div className="w-full md:w-80 brand-logo flex items-center justify-evenly">
            <img src={logo} alt="" />
          </div>
          <div className="flex-1 hidden lg:block nav ">
            <div className="navbar flex items-center justify-around h-full">
              <div className="nav__icon">
                <i className="text-white">{<icon.FaBars size={28} />}</i>
              </div>
              <div className="nav__input">
                <input type="text" name="" id="" />
              </div>
              <div className="nav__links">
                <ul className="primary__nav list-none flex gap-6">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "active text-[#dfc500]  font-[600]"
                          : "hover:text-[#dfc500] cursor-pointer transition-all"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "active text-[#dfc500]  font-[600]"
                          : "hover:text-[#dfc500] cursor-pointer transition-all"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-80 tools flex items-center justify-center">
            connect
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
