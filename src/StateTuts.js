import React  from 'react';
import { useState } from 'react';



  
    const StateTuts = () =>{
    const [counter,setCounter] = useState(0);

   
    const increment =() =>{
      setCounter(counter+1);
      console.log(counter);
    };
  
    return (
     
    <div className="StateTuts">
        {counter}
      <button onClick={increment}>Increment </button>
    </div>
  );
}


export default StateTuts;