import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../reducer";

const About = () =>{
  const state = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return <>
  <p>{state.value}</p>
  <button onClick={()=>dispatch(increment())}>Add</button>
  <button onClick={()=>dispatch(decrement())}>Sub</button>
  </>
}
export default About