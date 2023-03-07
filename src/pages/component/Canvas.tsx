// Canvas 用來顯示圖片
import { useRef, useEffect } from "react";

export default function Canvas(props: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }
        const img = new Image();
        img.src = props.src;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, [props.src]);

    return <canvas ref={canvasRef} />;
}