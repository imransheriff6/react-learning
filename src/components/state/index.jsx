import { useState } from "react"

function Counter() {
   const [count,setCount] = useState(0);
   const increment = () =>{
    setCount(count + 1)
   }
    return <div>
        <p>{count}</p>
        <button onClick={increment}>Increase</button>
    </div>
}
export default Counter