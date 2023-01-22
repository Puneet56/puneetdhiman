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

let x = 0;
let y = 0;

const YourComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(1000, 500).parent(canvasParentRef);
	};

	const draw = (p5: p5Types) => {
		p5.background(55, 65, 81);

		p5.fill(255);
		p5.stroke(255);
		p5.ellipse(210, 250, 100);
		p5.ellipse(290, 250, 100);

		p5.fill(0);

		p5.push();
		p5.translate(210, 250);
		p5.stroke(0);
		p5.line(0, 0, 20, 0);

		p5.rotate(p5.radians(p5.atan(p5.mouseX - 210 / p5.mouseY - 250)));

		p5.ellipse(20, 0, 30);
		x = p5.mouseX;
		p5.pop();

		p5.ellipse(310, 250, 30);
		console.log(p5.atan(p5.mouseX / p5.mouseY));
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default YourComponent;
