import {RefObject, useState} from "react";
import Key from "./Key";

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const row3 = ["{shift}", "z", "x", "c", "b", "n", "m", "{backspace}"];
const rows = [nums, row1, row2, row3];

interface Props {
  value: string;
  setValue: (value: string) => void;
  inputRef: RefObject<HTMLInputElement>;
}

const Keyboard = ({inputRef, setValue, value}: Props) => {
  const [shift, setShift] = useState(false);

  const handleClick = (code: string) => {
    inputRef.current?.focus();
    if (shift) setShift(false);

    switch (code.toLowerCase()) {
      case "{space}": {
        setValue(`${value} `);
        break;
      }
      case "{backspace}": {
        setValue(value.slice(0, -1));
        break;
      }
      case "{shift}": {
        setShift(!shift);
        break;
      }
      default: {
        setValue(value + code);
        break;
      }
    }
  };

  return (
    <div className="w-full rounded-xl bg-base-200 p-2 md:p-4">
      <div className="gap-2 flex-col grow">
        {rows.map((row, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="flex gap-2 mb-2" key={index}>
            {row.map(key => (
              <Key code={key} key={key} handleClick={handleClick} shift={shift} />
            ))}
          </div>
        ))}

        <div className="flex gap-2">
          <Key code="{space}" handleClick={handleClick} shift={shift} />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
