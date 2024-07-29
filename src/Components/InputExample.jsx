import { useState } from "react";

const InputExample = () => {
    const [data , setData] = useState("")
    return(
        <div>
            <input type="text"
            placeholder="Enter User Name" value={data} 
            onChange={(e)=>{setData(e.target.value)}} />
            
            <input type="text"
            id="t2"
            placeholder="Enter Hobbie"/>
        </div>
    )

}
export default InputExample;