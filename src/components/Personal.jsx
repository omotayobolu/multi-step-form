import React from "react";
import Input from "./UI/Input";
import { Link } from "react-router-dom";
import PrimaryBtn from "./UI/PrimaryBtn";
import useInput from "./hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";
const emailValid = (value) => value.includes("@");

const Personal = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameIputError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValid);

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredNumberIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredEmailIsValid && !enteredEmailIsValid && !enteredNumberIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetNumberInput();
  };

  return (
    <section id="personal">
      <div className="bg-white lg:m-0 lg:p-0 lg:drop-shadow-none md:mt-[-40%] mt-[-60%] mx-[4%] p-[5%] rounded-lg drop-shadow-xl z-10">
        <h1>Personal info</h1>
        <p className="pt-3">
          Please provide your name, email address and phone number.
        </p>
        <form
          onSubmit={formSubmissionHandler}
          className="mt-10 flex flex-col gap-4"
        >
          <Input
            label="Name"
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            error={nameIputError}
            placeholder="e.g. Stephen King"
          />
          <Input
            label="Email Address"
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            error={emailInputError}
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input
            label="Phone Number"
            type="tel"
            id="phone"
            value={enteredNumber}
            onChange={numberChangeHandler}
            onBlur={numberBlurHandler}
            error={numberInputError}
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
            placeholder="e.g. +1 234 567 890"
          />
        </form>
      </div>
      <Link to="/plans">
        <PrimaryBtn className="mt-8 mr-2" disabled={!formIsValid}>
          Next Step
        </PrimaryBtn>
      </Link>
    </section>
  );
};

export default Personal;
