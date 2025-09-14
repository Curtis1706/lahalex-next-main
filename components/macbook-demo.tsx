"use client";
import React from "react";
import { MacbookScroll } from "@/components/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <MacbookScroll
        title={
          <span className="text-[#FAF5EF] font-gobold">
            Découvrez Lahalex en action <br />
            Interface moderne et intuitive
          </span>
        }
        badge={
          <div className="h-10 w-10 -rotate-12 transform rounded-full bg-gradient-to-br from-[#781028] to-[#5a0a1f] flex items-center justify-center">
            <span className="text-[#FAF5EF] font-gobold text-sm">L</span>
          </div>
        }
        src="/screen.jpg"
        showGradient={false}
      />
    </div>
  );
}
