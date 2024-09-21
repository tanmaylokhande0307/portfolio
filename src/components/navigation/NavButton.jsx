import Link from "next/link";
import React from "react";
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";

const getIcon = (icon) => {
    console.log(icon)
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{
        transform: `translate(${x},${y})`,
      }}
    >
      <Link
        className="text-foreground rounded-full flex items-center justify-center bg-background/20 border-2 border-accent/30 backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
        href={link}
        target={newTab ? "_blank" : "_self"}
        aria-label={label}
      >

        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:text-accent group-hover:pause">
        {getIcon(icon)}
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
