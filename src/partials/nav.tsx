import logo from "../logo.png";
import * as icon from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-[#242424]">
        <div className="flex justify-evenly items-center  p-3">
          <img src={logo} alt="" />
          <i className="text-white">{<icon.FaBars size={28} />}</i>
        </div>
        <div className=" col-span-2">
          <div className="grid md:grid-cols-2">
            <input
              type="text"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              name="name"
            />
            <nav className="list">
              <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex justify-center ">Cart</div>
      </div>
    </>
  );
};
export default Nav;
