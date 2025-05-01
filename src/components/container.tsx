import clsx from "clsx";
import { JSX } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export function Container({ children, className }: Props): JSX.Element {
  return (
    <div className={clsx("m-0 md:m-auto w-full max-w-6xl px-5", className)}>
      {children}
    </div>
  );
}
