import KeyWords from './KeyWords';
import DisplayMessage from './DisplayMessage';
import style from './App.module.css';
import { useState } from 'react';
// import './App.css'

function App() { 

  const [calVal, setcalVal] = useState("use me!");
  //  const onButtonClick = (event)=>console.log(event.target.firstChild.data)
   const onButtonClick = (buttonText)=>{
   
    if(buttonText==="C"){
       setcalVal ("");

    }else if(buttonText==='='){
        const result = eval(calVal);
        setcalVal(result);

    }else{
      if (calVal === "use me!") {
      setcalVal(buttonText);
    } else {
      setcalVal(calVal + buttonText);
    }
  
        //  let newDisplayValue = calVal + buttonText;
        //  setcalVal(newDisplayValue);
    }
   }

  return (
    <>
         <div className={style.container}>
            <DisplayMessage displayValue={calVal}> </DisplayMessage >
            <KeyWords onButtonClick={onButtonClick}></KeyWords>             
         </div>
    </>
  )
}

export default App
