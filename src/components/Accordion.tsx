import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && 
        <div>
          {children}
        </div>
      }
    </div>
  );
};

export default Accordion;
