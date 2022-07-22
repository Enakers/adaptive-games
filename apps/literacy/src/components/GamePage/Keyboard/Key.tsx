import {useMemo} from "react";
import {BsBackspace, BsShift} from "react-icons/bs";

interface Props {
  code: string;
  handleClick: (code: string) => void;
  shift: boolean;
}

const getCode = (code: string) => {
  switch (code) {
    case "{backspace}":
      return <BsBackspace />;
    case "{shift}":
      return <BsShift />;
    case "{space}":
      return "space";
    default:
      return code;
  }
};

const Key = ({code, handleClick, shift}: Props) => {
  const label = useMemo(() => {
    const rgx = code.match(/{([^}]+)}/);
    return rgx ? rgx[1] : undefined;
  }, [code]);

  return (
    <button
      type="button"
      aria-label={label}
      className={`btn btn-outline btn-xs-custom sm:btn-sm md:btn-md lg:btn-lg 2xl:btn-xl 
    flex grow justify-center ${shift ? "" : "normal-case"}`}
      onClick={() => handleClick(shift ? code.toUpperCase() : code)}
    >
      {getCode(code)}
    </button>
  );
};

export default Key;
