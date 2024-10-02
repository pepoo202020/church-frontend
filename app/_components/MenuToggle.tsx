import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

type PathProps = SVGMotionProps<SVGPathElement>;

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)" // Consider using a CSS variable for better color management
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle: React.FC<{ toggle: () => void; isOpen: boolean }> = ({
  toggle,
  isOpen,
}) => {
  return (
    <button
      onClick={toggle}
      className="bg-transparent rounded-full p-4 transition-all duration-300 hover:bg-gray-200 focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"} // Improved accessibility
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial={isOpen ? "open" : "closed"}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }} // Customized duration for smoother animations
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          initial={isOpen ? "open" : "closed"}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial={isOpen ? "open" : "closed"}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }} // Customized duration for smoother animations
        />
      </svg>
    </button>
  );
};
