import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const App = () => {
  return (
    <section className="bg-white p-[1%] flex flex-row items-start h-screen">
      <div
        id="sidebar"
        className="w-[50%] h-full bg-SideBgDesktop bg-no-repeat bg-contain bg-left"
      >
        <div className=" w-full h-full">
          <nav className="p-[7%]">
            <ul className="flex flex-col gap-10">
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
      <div className="w-full h-full relative mx-[10%] py-[3%]">
        <Outlet />
      </div>
    </section>
  );
};

export default App;
