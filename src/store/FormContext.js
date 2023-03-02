import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = (props) => {
  const [option, setOption] = useState(false); //if false- monthly , true - yearly
  const [plan, setPlan] = useState(""); //arcade, advanced, pro

  const changeOption = () => {
    setOption((prevOption) => !prevOption);
    console.log(option);
  };

  return (
    <FormContext.Provider value={{ option, changeOption, plan, setPlan }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
