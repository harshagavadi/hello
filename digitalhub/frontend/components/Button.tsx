import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "primary" | "secondary";
};

export default function Button({ children, type = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-primary text-white hover:bg-indigo-700",
    secondary: "border border-primary text-primary",
  };

  return (
    <button className={`px-6 py-3 rounded-xl ${styles[type]}`}>
      {children}
    </button>
  );
}
