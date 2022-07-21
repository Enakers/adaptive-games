import {ReactNode, useState} from "react";
import {BsMoonFill, BsSunFill} from "react-icons/bs";

interface Props {
  children: ReactNode;
}

const StorybookThemeToggle = ({children}: Props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen" data-theme={theme}>
      <div className="flex justify-end">
        <button type="button" onClick={toggleTheme} className="btn btn-ghost text-xl mr-2">
          {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default StorybookThemeToggle;
