// import { useId, useRef, useState } from "react"

// const Contact = () => {
//     const [todo, settodo] = useState([]);
//     const inputref = useRef();
//     const add = () => {
//         console.log(inputref.current.value);
//         settodo(todo.concat({
//             id: todo.length + 1,
//             value: inputref.current.value
//         }));
//         inputref.current.value = "";
//         console.log(todo)
//     }
//     const deleteTodo = (id) => {
//         settodo(todo.filter((ele) => ele.id !== id))
//     }
//     const editTodo = (id, value) => {
//         console.log(id);
//         deleteTodo(id);
//         inputref.current.value = value;
//     }
//     return <>
//         <div>
//             <input ref={inputref} />
//             <button onClick={add}>Add</button>
//         </div>
//         <ul>
//             {
//                 todo.map((ele) => {
//                     return <>
//                         <li>
//                             {ele.value}
//                             <button onClick={() => deleteTodo(ele.id)}>X</button>
//                             <button onClick={() => editTodo(ele.id, ele.value)}>Edit</button>
//                         </li>

//                     </>
//                 })
//             }
//         </ul>
//     </>
// }
// export default Contact
const Contact = () =>{
    return <h1>Contact Page</h1>
}
export default Contact