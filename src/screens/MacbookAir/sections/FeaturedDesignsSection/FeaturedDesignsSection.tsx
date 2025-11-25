import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  "For Designer",
  "Hire talent",
  "Inspiration",
  "Advertising",
  "Blog",
  "About",
  "Careers",
  "Support",
];

const socialIcons = [
  { src: "/twitter-bird.png", alt: "Twitter bird", className: "w-[25px] h-6" },
  { src: "/facebook.png", alt: "Facebook", className: "w-7 h-[29px]" },
  { src: "/instagram.png", alt: "Instagram", className: "w-8 h-[34px]" },
  { src: "/pinterest.png", alt: "Pinterest", className: "w-8 h-[31px]" },
];

export const FeaturedDesignsSection = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-between gap-[50px] px-[46px] py-4 w-full">
      <div className="flex-shrink-0">
        <img
          src="/frame-85.png"
          alt="Dribbble Logo"
          className="w-28 h-[45px] object-cover"
        />
      </div>

      <nav className="flex items-center gap-[21px] flex-1 justify-center">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="font-body-semibold-20 font-[number:var(--body-semibold-20-font-weight)] text-grey-color-black text-[length:var(--body-semibold-20-font-size)] tracking-[var(--body-semibold-20-letter-spacing)] leading-[var(--body-semibold-20-line-height)] [font-style:var(--body-semibold-20-font-style)] whitespace-nowrap hover:bg-transparent hover:opacity-70 h-auto p-0"
          >
            {item}
          </Button>
        ))}
      </nav>

      <div className="flex items-center gap-0.5 flex-shrink-0">
        {socialIcons.map((icon, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="hover:bg-transparent hover:opacity-70 h-auto w-auto p-0"
          >
            <img className={icon.className} alt={icon.alt} src={icon.src} />
          </Button>
        ))}
      </div>
    </footer>
  );
};
