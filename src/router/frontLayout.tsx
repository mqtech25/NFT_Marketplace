import { Outlet } from "react-router-dom";
import Nav from "../partials/nav";
const FLayout = () => {
  return (
    <>
      <header className="App-header">
        <Nav></Nav>
      </header>
      <main className="App-body">
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default FLayout;
