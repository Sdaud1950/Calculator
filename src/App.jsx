import { useState } from "react";
import Style from "./App.module.css";
import Buttoncontainer from "./Comp/Buttoncontainer";
import Display from "./Comp/Display";

function App() {
  const [calval, setcalval] = useState("");

  const OnButtonClick = (buttontext) => {
    console.log(buttontext);

    if (buttontext=== "C"){
      setcalval("")
    } else if (buttontext==="="){
      const result = eval(calval)
      setcalval(result)
    }

    else{
const newBtn= calval+buttontext
setcalval(newBtn)

    }



}

  return (
    <>
      <div className={Style.calculator}>
        <Display DisplayValue={calval} />
        <Buttoncontainer onButtonClick={OnButtonClick} />
      </div>
    </>
  );
}

export default App;
