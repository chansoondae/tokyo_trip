"use client";
import { createContext, useContext, useEffect, useState } from "react";

const STEPS = [14, 16, 18, 20, 22];
const DEFAULT = 1; // index into STEPS (16px)

const FontSizeContext = createContext({
  step: DEFAULT,
  increase: () => {},
  decrease: () => {},
});

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(DEFAULT);

  useEffect(() => {
    const saved = localStorage.getItem("fontSize");
    if (saved !== null) setStep(Number(saved));
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${STEPS[step]}px`;
    localStorage.setItem("fontSize", String(step));
  }, [step]);

  const increase = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const decrease = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <FontSizeContext.Provider value={{ step, increase, decrease }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export const useFontSize = () => useContext(FontSizeContext);
