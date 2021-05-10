import { useState, useRef, useEffect, Fragment } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"} `}>
      submenu
    </aside>
  );
};

export default Submenu;
