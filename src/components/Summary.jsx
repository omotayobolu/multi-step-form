import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../store/FormContext";
import PrimaryBtn from "./UI/PrimaryBtn";
import SecondaryBtn from "./UI/SecondaryBtn";

const Summary = () => {
  const { option, selectedPlan, changeOption } = useContext(FormContext);

  const total = selectedPlan[1];

  return (
    <section id="summary">
      <div>
        <h1>Finishing Up</h1>
        <p className="pt-3">
          Double-check everything looks OK before confirming
        </p>
        <div className="mt-12 bg-Alabaster p-6">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <h2>
                {selectedPlan[0]} ({option ? "Monthly" : "Yearly"})
              </h2>
              <span
                className="text-Cool_gray underline cursor-pointer"
                onClick={changeOption}
              >
                Change
              </span>
            </div>
            <h3>
              ${option ? selectedPlan[1] : selectedPlan[1] * 10}
              {option ? "/mo" : "/yr"}
            </h3>
          </div>
          <hr className="my-8" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <span className="text-lg text-Cool_gray">Online Service</span>
              <h5>+$1/mo</h5>
            </div>
            <div className="flex flex-row items-center justify-between">
              <span className="text-lg text-Cool_gray">Larger Storage</span>
              <h5>+$2/mo</h5>
            </div>
          </div>
        </div>
        <div className="mt-6 px-6 flex flex-row items-center justify-between">
          <span className="text-lg text-Cool_gray">
            Total({option ? "per month" : "per year"})
          </span>
          <h1 className="text-Purplish_blue text-3xl">
            ${total}
            {option ? "/mo" : "/yr"}
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/add-ons">
            <SecondaryBtn>Go Back</SecondaryBtn>
          </Link>
          <Link to="/summary">
            <PrimaryBtn disabled={!selectedPlan}>Confirm</PrimaryBtn>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Summary;
