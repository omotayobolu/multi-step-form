import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import SecondaryBtn from "./UI/SecondaryBtn";
import PrimaryBtn from "./UI/PrimaryBtn";
import FormContext from "../store/FormContext";

const Plan = () => {
  const { option, changeOption } = useContext(FormContext);
  return (
    <section id="plans">
      <div>
        <h1>Select your plan</h1>
        <p className="pt-3">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mt-12 flex flex-row gap-8">
          <button className="select-plan">
            <img src={Arcade} alt="" />
            <div className="mt-12 flex flex-col gap-1">
              <h2>Arcade</h2>
              <span>$90/yr</span>
              {option && <h5>2 months free</h5>}
            </div>
          </button>
          <button className="select-plan">
            <img src={Advanced} alt="" />
            <div className="mt-12 flex flex-col gap-1">
              <h2>Advanced</h2>
              <span>$120/yr</span>
              {option && <h5>2 months free</h5>}
            </div>
          </button>
          <button className="select-plan">
            <img src={Pro} alt="" />
            <div className="mt-12 flex flex-col gap-1">
              <h2>Pro</h2>
              <span>$150/yr</span>
              {option && <h5>2 months free</h5>}
            </div>
          </button>
        </div>
        <div className="w-full bg-Alabaster py-4 rounded-md flex flex-row gap-8 justify-center items-center mt-12">
          <h2
            className={`cursor-pointer ${option && "text-Cool_gray"}`}
            onClick={changeOption}
          >
            Monthly
          </h2>

          <div
            className={`w-[40px] h-[20px] bg-Marine_blue flex  
            ${!option ? "justify-start" : "justify-end"}
             items-center cursor-pointer rounded-full p-1`}
            onClick={changeOption}
          >
            <div className="bg-white rounded-[50%] h-[13px] w-[13px]"></div>
          </div>
          <h2
            className={`text-Cool_gray ${
              option && "text-Marine_blue"
            } cursor-pointer`}
            onClick={changeOption}
          >
            Yearly
          </h2>
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/personal">
            <SecondaryBtn>Go Back</SecondaryBtn>
          </Link>
          <Link to="/add-ons">
            <PrimaryBtn>Next Step</PrimaryBtn>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Plan;
