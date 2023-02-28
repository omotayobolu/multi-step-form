import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = (props) => {
  const [option, setOption] = useState(true); //if true- monthly , false - yearly

  const changeOption = () => {
    setOption((prevOption) => !prevOption);
    console.log(option);
  };

  return (
    <FormContext.Provider value={{ option, changeOption }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
