import { useState, useRef, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface AccordionProps {
  title: string;
  content: any; // In case we're adding elements
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <>
      <div
        onClick={toggleAccordion}
        className="accordion w-full h-[80px] flex items-center border-t border-neutral-800 transition hover:bg-neutral-950 px-4 cursor-pointer"
      >
        <div className="w-full flex justify-between">
          <p className="text-white font-light">{title}</p>

          <CiCirclePlus
            size={"30px"}
            className={`text-emerald-500 transition duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: height, opacity: open ? 1 : 0 }}
      >
        <p className="p-4 font-light text-neutral-500">{content}</p>
      </div>
    </>
  );
};

export default Accordion;
