import { useState } from "react";
import Canvas from "./component/Canvas";
import InputFile from "./component/InputFile";
export const Home = () => {

    const [imageData, setImageData] = useState("");
    const handleFileChange = (value: string) => {
        setImageData(value);
    };
    return (
        <div>
            <InputFile labelId="file" placeholderText="Choose a file" onChange={handleFileChange} />
            {imageData && <Canvas src={imageData} />}
        </div>
    );
};
