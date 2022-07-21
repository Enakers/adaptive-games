import eyeSymbol from "./assets/eye.png";
import mouseSymbol from "./assets/mouse.png";
import switchSymbol from "./assets/switch.png";
import touchSymbol from "./assets/touch.png";

export const imgProps = {
  switch: {
    src: switchSymbol,
    alt: "Switch symbol"
  },
  touch: {
    src: touchSymbol,
    alt: "Touch symbol"
  },
  mouse: {
    src: mouseSymbol,
    alt: "Mouse symbol"
  },
  eyeGaze: {
    src: eyeSymbol,
    alt: "Eye symbol"
  }
};

export const inputSizes = {
  sm: {circle: "6rem", img: "3rem"},
  md: {circle: "10rem", img: "5rem"},
  lg: {circle: "14rem", img: "7rem"}
};

export const getRandomNumber = (min: number, max: number) => Math.random() * (max - min);
