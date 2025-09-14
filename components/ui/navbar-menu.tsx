"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[#FAF5EF] hover:opacity-[0.9] font-gobold text-lg"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-transparent backdrop-blur-md rounded-2xl overflow-hidden border border-[#781028]/30 shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-6"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-[#781028]/20 bg-transparent backdrop-blur-sm shadow-input flex justify-center space-x-8 px-8 py-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-4 p-4 rounded-lg hover:bg-[#781028]/10 transition-colors">
      <img
        src={src}
        width={120}
        height={80}
        alt={title}
        className="shrink-0 rounded-lg shadow-lg object-cover"
      />
      <div>
        <h4 className="text-lg font-bold mb-2 text-[#FAF5EF] font-gobold">
          {title}
        </h4>
        <p className="text-[#FAF5EF]/80 text-sm max-w-[12rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-[#FAF5EF] hover:text-[#FAF5EF]/80 font-medium block py-2 px-4 rounded-lg hover:bg-[#781028]/10 transition-colors"
    >
      {children}
    </a>
  );
};
