import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const App = () => {
  return (
    <section className="bg-white lg:p-[1%] flex lg:flex-row flex-col items-start h-screen overflow-auto">
      <div
        id="sidebar"
        className="lg:w-[50%] w-full h-full bg-Magnolia bg-SideBgMobile lg:bg-SideBgDesktop bg-no-repeat bg-cover lg:bg-left bg-top "
      >
        <div className=" w-full h-full">
          <nav className="p-[7%]">
            <ul className="flex lg:flex-col flex-row md:gap-10 gap-4 justify-center">
              <li>
                <NavLink
                  to={`/personal`}
                  className={({ isActive }) =>
                    isActive ? "active link" : "link"
                  }
                >
                  <span>1</span>
                  <div>
                    <h4>step 1</h4>
                    <h3>your info</h3>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/plans`} className="link">
                  <span>2</span>
                  <div>
                    <h4>step 2</h4>
                    <h3>select plan</h3>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/add-ons`} className="link">
                  <span>3</span>
                  <div>
                    <h4>step 3</h4>
                    <h3>add-ons</h3>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/summary`} className="link">
                  <span>4</span>
                  <div>
                    <h4>step 4</h4>
                    <h3>summary</h3>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full h-full relative lg:mx-[10%] py-[3%] lg:bg-white bg-Magnolia ">
        <Outlet />
      </div>
    </section>
  );
};

export default App;
