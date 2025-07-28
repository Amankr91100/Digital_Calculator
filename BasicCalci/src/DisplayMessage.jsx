import { useState } from 'react';
import style from './DisplayMessage.module.css'

 function DisplayMessage({displayValue}){


return (
    <>
     <input className={style.screen} type='text' value={displayValue} readOnly/>
    </>
)

}
export default DisplayMessage;