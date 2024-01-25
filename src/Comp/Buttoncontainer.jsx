import React from "react";
import Style from "./Buttoncon.module.css";

const Buttoncontainer = ({onButtonClick}) => {
  const ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={Style.BTNcontiner}>
        {ButtonName.map((Item) => {
          return <button key={Item}className={Style.butom} onClick={()=>onButtonClick(Item)}>{Item}</button>;
        })}
      </div>
    </>
  );
};

export default Buttoncontainer;
