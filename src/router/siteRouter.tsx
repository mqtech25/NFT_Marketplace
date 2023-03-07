import { Route, Routes, BrowserRouter } from "react-router-dom";
import FLayout from "./frontLayout";
import Home from "../pages/home";
const SiteRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SiteRouter;
