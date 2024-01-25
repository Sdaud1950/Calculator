import React from 'react'
import Style from "./Display.module.css";



const Display = ({DisplayValue}) => {
  return (
    <>
     <input className={Style.display} type="text" value={DisplayValue} readOnly/>

    </>
  )
}

export default Display