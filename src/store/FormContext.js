import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = (props) => {
  const [option, setOption] = useState(false); //if false- monthly , true - yearly
  const [selectedPlan, setSelectedPlan] = useState([]); //arcade, advanced, pro
  const [planTouched, setPlanTouched] = useState(false);
  const [onlineServiceChecked, setOnlineServiceChecked] = useState(false);
  const [largerStorageChecked, setLargerStoragCheceked] = useState(false);
  const [customizableProfileChecked, setCustomizableProfileChecked] =
    useState(false);

  const changeOption = () => {
    setOption((prevOption) => !prevOption);
    console.log(option);
  };

  return (
    <FormContext.Provider
      value={{
        option,
        changeOption,
        selectedPlan,
        setSelectedPlan,
        planTouched,
        setPlanTouched,
        onlineServiceChecked,
        setOnlineServiceChecked,
        largerStorageChecked,
        setLargerStoragCheceked,
        customizableProfileChecked,
        setCustomizableProfileChecked,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
