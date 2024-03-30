"use client";

import HSAccordion from "preline/dist/accordion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
      HSAccordion.autoInit();
      HSDropdown.autoInit();
    }, 100);
  }, [path]);

  return null;
}