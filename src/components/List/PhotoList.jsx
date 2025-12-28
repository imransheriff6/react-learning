import { useState } from "react";

const PhotoList = ({ title, image, available }) => {
    const imageURL = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg";
    const [url, setUrl] = useState(image);
    const handler = () => {
        // url = imageURL
        setUrl(imageURL)
    }
    return <>
        {
            <div style={{ background: available === false ? "#ff000047" : "white" }}>
                {/* <img src={url} alt="image" /> */}
                <h5>{image}</h5>
                <p>{title}</p>
                {/* <p>{available ? "In Stock" : "Out of Stock"}</p>
                <button onClick={handler}>Change</button> */}
            </div>
        }
    </>
}
export default PhotoList
