/* eslint-disable jsx-a11y/click-events-have-key-events */
import {useMemo, useRef} from "react";
import AdaptiveInputContainer from "./AdaptiveInput.container";
import {imgProps, inputSizes} from "./AdaptiveInput.utils";

export type InputType = "switch" | "eyeGaze" | "mouse" | "touch";
export type InputSize = "sm" | "md" | "lg";

export interface AdaptiveInputProps {
  type: InputType;
  size: InputSize;
  onInput(): void;
  fixedPosition?: boolean;

  // eye gaze
  dwellTime?: number;
}

const AdaptiveInput = ({onInput, size, type, dwellTime = 1, fixedPosition}: AdaptiveInputProps) => {
  const {circle, img} = useMemo(() => inputSizes[size], [size]);
  const {src, alt} = useMemo(() => imgProps[type], [type]);
  const innerCircle = useRef<HTMLDivElement>(null);
  let timeout: any;

  const onMouseEnter = () => {
    clearTimeout(timeout);

    innerCircle!.current!.style.animation = `grow-bg ${dwellTime}s linear backwards`;
    innerCircle!.current!.style.backgroundColor = "salmon";

    timeout = setTimeout(() => {
      onInput();
    }, dwellTime * 1000);
  };

  const onMouseLeave = () => {
    clearTimeout(timeout);

    innerCircle!.current!.style.animation = "";
    innerCircle!.current!.style.backgroundColor = "";
  };

  return (
    <AdaptiveInputContainer fixedPosition={fixedPosition}>
      <div
        className="relative border-2 rounded-full flex items-center text-center mx-auto overflow-hidden"
        style={{
          width: circle,
          height: circle
        }}
        onClick={type === "mouse" || type === "touch" ? onInput : undefined}
        onMouseEnter={type === "eyeGaze" ? onMouseEnter : undefined}
        onMouseLeave={type === "eyeGaze" ? onMouseLeave : undefined}
        role={type === "mouse" || type === "touch" ? "button" : ""}
      >
        <img
          style={{width: img, height: img}}
          className="block mx-auto text-center"
          src={src}
          alt={alt}
        />
        {type === "eyeGaze" && (
          <>
            <style>
              {`
                @keyframes grow-bg {
                  from { transform: scale(0); }
                  to { transform: scale(1); }
                }
              `}
            </style>
            <div
              style={{
                width: circle,
                height: circle,
                opacity: 0.8,
                borderRadius: "50%",
                position: "absolute"
              }}
              ref={innerCircle}
            />
          </>
        )}
      </div>
    </AdaptiveInputContainer>
  );
};

export default AdaptiveInput;
