import { useState } from "react";

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((p) => !p);
    //setOpen(!open);
  };

  return { open, toggle };
};
