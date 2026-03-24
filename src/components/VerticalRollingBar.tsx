"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function VerticalRollingBar() {
  const SOCIAL_LINKS = [
    { icon: FaGithub, label: "GitHub" },
    { icon: FaLinkedin, label: "LinkedIn" },
    { icon: FaTwitter, label: "X" },
    { icon: FaInstagram, label: "Instagram" },
  ];

  const duplicatedLinks = [...SOCIAL_LINKS, ...SOCIAL_LINKS, ...SOCIAL_LINKS, ...SOCIAL_LINKS];

  return (
    <div className="absolute top-0 right-0 h-full w-[80px] sm:w-[120px] bg-[#FBFBFB]/50 backdrop-blur-md border-l border-black/10 overflow-hidden flex flex-col items-center py-10 z-10">
      <div className="absolute inset-0 bg-dither pointer-events-none opacity-50"></div>
      <motion.div
        className="flex flex-col items-center gap-12 sm:gap-16 relative z-10"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href="#"
              className="group p-4 rounded-full bg-transparent hover:bg-black hover:text-white transition-all duration-300 relative group cursor-pointer active:scale-95"
              aria-label={link.label}
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
