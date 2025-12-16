import { useState, useEffect } from "react";
type theme = "light" | "dark";
export default function ThemeToggle() {
  const [theme, setTheme] = useState<theme>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    document.title = `Theme: ${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="themeToggle"
      onClick={toggleTheme}
      style={{ padding: "6px 12px" }}
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
