import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export default function PostTitle({children}: Props) {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left">
      {children}
    </h1>
  )
}