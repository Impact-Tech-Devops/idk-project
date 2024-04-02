"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import HSAccordion from "preline/dist/accordion";
import { IStaticMethods, HSDropdown } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.HSStaticMethods.autoInit();
        HSAccordion.autoInit();
        HSDropdown.autoInit();
      }
    }, 100);
  }, [path]);

  return null;
}
