import { useEffect, useState } from "react"
import List from "../List"
import Counter from "../state"
import "./main.css"
import axios from "axios";
function Main() {
   const [data, setData] = useState([]);
   useEffect(function () {
      console.log("Inside useeffect");
      axios.get("https://jsonplaceholder.typicode.com/users")
         .then((res) => {
            console.log(res.data);
            setData(res.data);
         })
         .catch();

         return ()=>{
            console.log("un mount")
         }
   },[])
   return <main>
      {
         data.map((ele, i) => {
            return <List name={ele.name} url={ele.website} key={i} qty={1} />
         })
      }
      {/* <Counter/> */}
   </main>
}
export default Main