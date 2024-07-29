import { useState } from "react";

const ButtonExample = () => {
    const [data , setData] = useState("")
    return(
        <div>
           <h1>Hello Click Button Below</h1>
           <br/>
           <button  onClick={(e)=>{setData("Button Clicked")}}>Click Me</button>
           <br/>
           <br/>
           <br/>
           {data}
        </div>
    )

}
export default ButtonExample;