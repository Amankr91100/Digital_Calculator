import style from './KeyWords.module.css'

 const nums = ['1','2','3','+','4','5','6','-','7','8','9','*','0','/','=','C'];
 

function KeyWords({onButtonClick}){
    return (
    
        <div className={style.keys}>
                {nums.map((num) => (
                   <button type="button" 
                    key={num}
                    className={`btn btn-outline-info ${style.btn}`}
                    onClick={()=>onButtonClick(num)}
                    // onClick={()=>console.log(`${num} is click`)}
                    >
                    {num}</button>
                 ))}
</div>
    
    )
}
export default KeyWords;