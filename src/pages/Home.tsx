import { useState } from "react";
import Canvas from "./component/Canvas";
import InputFile from "./component/InputFile";
import image from "../image/dmitry-demidko-eBWzFKahEaU-unsplash.jpg"
export const Home = () => {

    const [imageData, setImageData] = useState("");
    const handleFileChange = (value: string) => {
        setImageData(value);
    };
    function downloadImage() {
        // Create a new anchor element
        const link = document.createElement('a');
        // Set the href attribute of the anchor element to the image URL
        link.href = image;
        // Set the download attribute of the anchor element to the file name you want to save
        link.download = 'dmitry-demidko-eBWzFKahEaU-unsplash.jpg';
        // Trigger a click event on the anchor element
        // This will automatically download the image
        link.click();
    }


    return (
        <div>
            <button onClick={downloadImage} >Download</button>
            <InputFile labelId="file" placeholderText="Choose a file" onChange={handleFileChange} />
            {imageData && <Canvas src={imageData} />}
        </div>
    );
};
