"use client";
import { useReveal } from "./reveal";

export function RevealProvider({ children }: { children: React.ReactNode }) {
  const ref = useReveal();
  return <div ref={ref} className="w-full">{children}</div>;
}
