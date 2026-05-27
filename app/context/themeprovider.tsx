// "use client";

// import { createContext, useEffect, useState } from "react";

// type ThemeContextType = {
//   theme: "light" | "dark";
//   toggleTheme: () => void;
// };

// export const ThemeContext = createContext<ThemeContextType | null>(null);

// export function ThemeProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [theme, setTheme] = useState<"light" | "dark">("dark");

//   useEffect(() => {
//     const saved = localStorage.getItem("theme") as
//       | "light"
//       | "dark"
//       | null;

//     const initial = saved || "dark";
//     setTheme(initial);

//     document.documentElement.classList.toggle(
//       "dark",
//       initial === "dark"
//     );
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";

//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);

//     document.documentElement.classList.toggle(
//       "dark",
//       newTheme === "dark"
//     );
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }


"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemesProvider>
  );
}