import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = (props) => {
  const [option, setOption] = useState(false); //if false- monthly , true - yearly
  const [selectedPlan, setSelectedPlan] = useState([]); //arcade, advanced, pro

  const changeOption = () => {
    setOption((prevOption) => !prevOption);
    console.log(option);
  };

  // const plans = [
  //   { name: "Arcade", price: 9 },
  //   { name: "Advanced", price: 12 },
  //   { name: "Pro", price: 15 },
  // ];

  return (
    <FormContext.Provider
      value={{ option, changeOption, selectedPlan, setSelectedPlan }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
