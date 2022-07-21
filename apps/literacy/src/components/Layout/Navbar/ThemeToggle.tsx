import {useTheme} from "next-themes";
import {useMemo} from "react";
import {BsMoonFill, BsSunFill} from "react-icons/bs";

const ThemeToggle = () => {
  const {theme, systemTheme, setTheme} = useTheme();
  const currentTheme = useMemo(
    () => (theme === "system" ? systemTheme : theme),
    [theme, systemTheme]
  );

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Theme toggle"
      type="button"
      onClick={toggleTheme}
      className="btn btn-ghost text-lg mr-2"
    >
      {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};

export default ThemeToggle;
