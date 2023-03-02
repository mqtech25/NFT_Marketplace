import { Route, Routes } from "react-router-dom";
import FLayout from "./frontLayout";
import Home from "../pages/home";
const SiteRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<FLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default SiteRouter;
