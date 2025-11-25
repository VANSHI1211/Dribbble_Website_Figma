import { BellIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Explore", hasDropdown: true },
  { label: "Hire a Designer", hasDropdown: true },
  { label: "Find Jobs", hasDropdown: false },
  { label: "Blogs", hasDropdown: false },
];

export const ExploreSection = (): JSX.Element => {
  return (
    <header className="w-full bg-gray-color-white">
      <div className="flex items-center justify-between px-5 py-6">
        <div className="flex items-center gap-6">
          <div className="w-[127px] h-[45px] bg-[url(/frame-3.png)] bg-cover bg-center" />

          <nav className="flex items-center gap-[15px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="inline-flex items-center gap-1 px-[3px] py-1 bg-gray-color-white hover:opacity-80 transition-opacity"
              >
                <span className="font-body-semibold-16 font-[number:var(--body-semibold-16-font-weight)] text-grey-color-black text-[length:var(--body-semibold-16-font-size)] tracking-[var(--body-semibold-16-letter-spacing)] leading-[var(--body-semibold-16-line-height)] whitespace-nowrap [font-style:var(--body-semibold-16-font-style)]">
                  {item.label}
                </span>
                {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-[43px]">
          <Button className="h-[49px] px-5 py-[15px] bg-grey-color-black hover:bg-grey-color-black/90 rounded-[27px]">
            <span className="font-body-semibold-16 font-[number:var(--body-semibold-16-font-weight)] text-gray-color-white text-[length:var(--body-semibold-16-font-size)] tracking-[var(--body-semibold-16-letter-spacing)] leading-[var(--body-semibold-16-line-height)] [font-style:var(--body-semibold-16-font-style)]">
              Upgrade to Pro
            </span>
          </Button>

          <button className="hover:opacity-80 transition-opacity">
            <SearchIcon className="w-[22px] h-[22px]" />
          </button>

          <button className="hover:opacity-80 transition-opacity">
            <BellIcon className="w-[26px] h-[26px]" />
          </button>

          <button className="hover:opacity-80 transition-opacity">
            <img
              className="w-12 h-12 rounded-full"
              alt="User profile"
              src="/group-2.png"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
