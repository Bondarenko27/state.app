import { useState } from "react";

const State= () => {
    const [inputValue, setInputValue] = useState('hello');

let onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
}

return(
 <div>
     <input placeholder="enter smth" onChange={onChange}/>
     {inputValue}
</div>

);
};
export default State;