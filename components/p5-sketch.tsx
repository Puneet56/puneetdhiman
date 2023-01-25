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

let dynamicWidth = (() => {
	if (typeof window !== "undefined") {
		let newWidth = window.innerWidth;
		if (newWidth < 768) {
			return newWidth;
		} else {
			return newWidth / 1.5;
		}
	} else {
		return 600;
	}
})();

let dynamicHeight = 600;

const YourComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(dynamicWidth, dynamicHeight).parent(canvasParentRef);
	};

	const draw = (p5: p5Types) => {
		p5.background(0);
	};

	const windowResized = (p5: p5Types) => {
		console.log("Resized");
		let newWidth = window.innerWidth;
		console.log({ newWidth });

		if (newWidth < 768) {
			dynamicWidth = newWidth;
		} else {
			dynamicWidth = newWidth / 1.5;
		}
		p5.resizeCanvas(dynamicWidth, dynamicHeight);
	};

	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default YourComponent;
