/* eslint-disable no-param-reassign */
import {ReactNode, useCallback, useMemo} from "react";
import {getRandomNumber} from "./AdaptiveInput.utils";

interface Props {
  children: ReactNode;
  fixedPosition?: boolean;
}

const AdaptiveInputContainer = ({children, fixedPosition}: Props) => {
  const containerClass = useMemo(
    () => (fixedPosition ? "flex h-screen items-center" : "absolute"),
    [fixedPosition]
  );

  const randomisePosition = useCallback((node: HTMLDivElement) => {
    if (!node) return;

    const container: HTMLDivElement = document.querySelector("#inputContainer")!;

    const left = getRandomNumber(node.clientWidth, container.clientWidth);
    const top = getRandomNumber(node.clientHeight, container.clientHeight);

    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
  }, []);

  return (
    <div id="inputContainer" className="w-screen h-screen">
      <div className={containerClass} ref={fixedPosition ? null : randomisePosition}>
        {children}
      </div>
    </div>
  );
};

export default AdaptiveInputContainer;
