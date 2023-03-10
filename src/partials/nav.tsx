import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import * as icon from "react-icons/fa";
// import userIcon from "../assets/user.svg";
const Nav = () => {
  return (
    <>
      <nav className="bg-secondary-color text-primary-white shadow-nav-shadow">
        <div className="flex w-11/12 mx-auto justify-between xl:gap-9 h-20">
          <div className="lg:w-1/6 brand-logo flex items-center ">
            <img src={logo} alt="" />
          </div>
          <div className="lg:w-2/3 nav hidden xl:block ">
            <div className="navbar flex items-center justify-around h-full">
              <div className="nav__icon">
                <i className="text-primary-white">
                  {<icon.FaBars size={28} />}
                </i>
              </div>
              <div className="nav__input">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 py-2 ">
                    <svg
                      className="h-5 w-5 fill-primary-white"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name=""
                    className="block w-96 rounded-full sm:text-sm sm:leading-6 border-0 py-2 pl-9 pr-3 text-primary-white bg-transparent  ring-1 ring-inset ring-primary-white focus:ring-primary-color focus:outline  focus:outline-offset-0 focus:outline-primary-shade"
                    id=""
                  />
                </label>
              </div>
              <div className="nav__links">
                <ul className="primary__nav list-none flex gap-6">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "active text-primary-color  font-[600]"
                          : "hover:text-primary-color cursor-pointer transition-all"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/rankings"
                      className={({ isActive }) =>
                        isActive
                          ? "active text-primary-color  font-[600]"
                          : "hover:text-primary-color cursor-pointer transition-all"
                      }
                    >
                      Rankings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections"
                      className={({ isActive }) =>
                        isActive
                          ? "active text-primary-color  font-[600]"
                          : "hover:text-primary-color cursor-pointer transition-all"
                      }
                    >
                      Collections
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/6 tools flex items-center justify-center">
            <ul className="flex list-none items-center gap-4">
              <li>
                <button className="bg-primary-linearColor hover:bg-primary-hoverLinearColor transition ease-in-out delay-150  hover:-translate-y-1  text-secondary-color rounded-md px-3 py-2  font-[600]">
                  Connect Wallet
                </button>
              </li>
              <li>
                <i>{<icon.FaUserAlt />}</i>
              </li>
              <li>
                <i>{<icon.FaCartPlus />}</i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
