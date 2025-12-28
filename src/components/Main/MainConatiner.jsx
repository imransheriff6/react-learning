
import { useEffect, useState } from "react";
import PhotoList from "../List/PhotoList"
import "./main.css"
import axios from "axios";
const PhotoGallery = () => {
    const [count, setCount] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data)
                setCount(res.data);
            })
            .catch()
    },[]);
    return <>
        {
            count.map((ele)=>{
                return <p>{ele.name}</p>
            })
        }
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
    </>
}
export default PhotoGallery