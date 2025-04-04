"use client";

import React from "react";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time> <a className="no-underline">holyfata</a>
      <span className="float-right">
        All rights reserved.
      </span>
    </small>
  );
}
