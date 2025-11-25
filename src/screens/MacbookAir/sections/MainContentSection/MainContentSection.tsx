import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const categories = [
  { id: "discover", label: "Discover" },
  { id: "animation", label: "Animation" },
  { id: "branding", label: "Branding" },
  { id: "illustration", label: "Illustration" },
  { id: "mobile", label: "Mobile" },
  { id: "print", label: "Print" },
  { id: "product-design", label: "Product Design" },
  { id: "typography", label: "Typography" },
  { id: "web-design", label: "Web Design" },
];

export const MainContentSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("discover");

  return (
    <nav className="flex items-center justify-center gap-[69px] px-[37px] py-8 w-full">
      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 px-[17px] py-[13px] flex-1 bg-gray-color-white rounded-[7px] border border-solid border-stroke-2 hover:bg-gray-color-white"
      >
        <span className="font-body-medium-16 font-[number:var(--body-medium-16-font-weight)] text-grey-color-black text-[length:var(--body-medium-16-font-size)] tracking-[var(--body-medium-16-letter-spacing)] leading-[var(--body-medium-16-line-height)] [font-style:var(--body-medium-16-font-style)]">
          Following
        </span>
        <ChevronDownIcon className="w-4 h-4" />
      </Button>

      <ToggleGroup
        type="single"
        value={selectedCategory}
        onValueChange={(value) => {
          if (value) setSelectedCategory(value);
        }}
        className="flex items-center justify-center overflow-hidden"
      >
        {categories.map((category) => (
          <ToggleGroupItem
            key={category.id}
            value={category.id}
            className="inline-flex items-center justify-center gap-2 px-2 py-1.5 bg-gray-color-white data-[state=on]:bg-bg-color-2 rounded-[38px] hover:bg-bg-color-2 border-0"
          >
            <span className="font-body-medium-16 font-[number:var(--body-medium-16-font-weight)] text-grey-color-black text-[length:var(--body-medium-16-font-size)] tracking-[var(--body-medium-16-letter-spacing)] leading-[var(--body-medium-16-line-height)] whitespace-nowrap [font-style:var(--body-medium-16-font-style)]">
              {category.label}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 px-[17px] py-[13px] flex-1 bg-gray-color-white rounded-[41px] border border-solid border-stroke-2 hover:bg-gray-color-white"
      >
        <div className="relative w-[19px] h-2.5">
          <div className="absolute top-0 left-0 w-[19px] h-0.5 bg-grey-color-black" />
          <div className="absolute top-1 left-0.5 w-[15px] h-0.5 bg-grey-color-black" />
          <div className="absolute top-2 left-1 w-[11px] h-0.5 bg-grey-color-black" />
        </div>
        <span className="font-body-medium-16 font-[number:var(--body-medium-16-font-weight)] text-grey-color-black text-[length:var(--body-medium-16-font-size)] tracking-[var(--body-medium-16-letter-spacing)] leading-[var(--body-medium-16-line-height)] whitespace-nowrap [font-style:var(--body-medium-16-font-style)]">
          Filter
        </span>
      </Button>
    </nav>
  );
};
