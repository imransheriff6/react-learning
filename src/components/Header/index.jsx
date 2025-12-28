
import { Link } from "react-router-dom"
import "./header.css"
function Header(props){
    return <header>
        Welcome {props.username}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </header>
}
export default Header