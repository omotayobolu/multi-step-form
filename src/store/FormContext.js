import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = (props) => {
  const [option, setOption] = useState(false); //if false- slider will be close monthly , true - slider will be close to yearly

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
