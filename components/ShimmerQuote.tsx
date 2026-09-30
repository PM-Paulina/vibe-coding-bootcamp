"use client";

import { useEffect, useState } from "react";

export default function ShimmerQuote({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, [text]);

  const done = shown.length === text.length;

  return (
    <div className="text-center max-w-4xl">
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="shimmer-text">
          &bdquo;{shown}
          {done && "\u201C"}
        </span>
        <span className="animate-pulse" style={{ color: "#E8503E" }}>
          |
        </span>
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}