import React , {useState} from "react";

const WithToggle = (OriginalComponent) => {
  const NewComponent = (props) => {
    const [isShow, setIsShow] = useState(false);
    const toggleHandler = () => {
      setIsShow((prev) => !prev);
      
    };
    
    return <OriginalComponent isShow={isShow} toggleHandler={toggleHandler} {...props}/>
  };
  return NewComponent;
};

export default WithToggle;
