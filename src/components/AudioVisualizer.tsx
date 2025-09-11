import { useEffect, useRef } from "react";
import { SoundManager } from "../utils/SoundManager";

interface Props {
	muted: boolean;
	sensitivity?: number;
}

export default function AudioVisualizer({ muted, sensitivity = 1.4 }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const analyser = SoundManager.getAnalyser();
		const bufferLength = analyser.fftSize;
		const dataArray = new Uint8Array(bufferLength);

		const canvas = canvasRef.current!;
		const ctx = canvas.getContext("2d")!;

		const draw = () => {
			requestAnimationFrame(draw);

			analyser.getByteTimeDomainData(dataArray);

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.beginPath();
			ctx.lineWidth = 2;

			ctx.shadowColor = muted ? "#444" : "#00ff00";
			ctx.shadowBlur = muted ? 2 : 8;
			ctx.strokeStyle = muted ? "#555" : "#00ff00";

			const sliceWidth = canvas.width / bufferLength;
			let x = 0;

			for (let i = 0; i < bufferLength; i++) {
				const v = (dataArray[i] - 128) / 128;
				const y =
					canvas.height / 2 +
					v * (canvas.height / 2) * (muted ? 0.4 : sensitivity);

				if (i === 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}

				x += sliceWidth;
			}

			ctx.stroke();
		};

		requestAnimationFrame(draw);
	}, [muted, sensitivity]);

	return <canvas ref={canvasRef} width={220} height={60} />;
}
