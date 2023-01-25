import dynamic from "next/dynamic";

import p5Types from "p5"; //Import this for typechecking and intellisense
import React from "react";
// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});

interface ComponentProps {
	//Your component props
}

let dynamicWidth = 1000;

let dynamicHeight = 600;

const YourComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
	let font: p5Types.Font;
	const preload = (p5: p5Types) => {
		font = p5.loadFont("/public/font.ttf");
	};

	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(dynamicWidth, dynamicHeight).parent(canvasParentRef);

		const points = font.textToPoints("Puneet", 100, 200, 24, {
			sampleFactor: 0.25,
			simplifyThreshold: 0,
		});

		console.log({ points });
	};

	const draw = (p5: p5Types) => {
		p5.background(0);
	};

	const windowResized = (p5: p5Types) => {
		let newWidth = window.innerWidth;
		dynamicWidth = newWidth;

		p5.resizeCanvas(dynamicWidth, dynamicHeight);
	};

	return (
		<Sketch
			setup={setup}
			draw={draw}
			windowResized={windowResized}
			preload={preload}
		/>
	);
};

export default YourComponent;
