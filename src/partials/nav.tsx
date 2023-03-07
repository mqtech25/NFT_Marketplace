import logo from "../logo.png";
import * as icon from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <div className="lg:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="flex justify-center  bg-slate-400">
            <img src={logo} alt="" />
            <i>{<icon.FaAd />}</i>
          </div>
          <div className=" hidden md:flex col-span-4 items-center justify-center bg-slate-500">
            Nav
          </div>
          <div className="flex justify-center  bg-slate-600">Cart</div>
        </div>
      </div>
    </>
  );
};
export default Nav;
