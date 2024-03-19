import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const getThemePreference = () => {
if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
}
return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
const isDark = getThemePreference() === "dark";
document.documentElement.classList[isDark ? "add" : "remove"]("dark");

if (typeof localStorage !== "undefined") {
const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
});
}

export function LightmodeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      id="themeToggle"
      onClick={() => {
        console.log("howdy");
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      }}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
    </Button>
  );
}
