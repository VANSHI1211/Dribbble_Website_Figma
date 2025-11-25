import { SearchIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const navigationButtons = [
  {
    id: "shots",
    label: "Shots",
    icon: "/image.png",
    active: true,
  },
  {
    id: "designer",
    label: "Designer",
    icon: "/group-3.png",
    active: false,
  },
  {
    id: "services",
    label: "Services",
    icon: "/group-4.png",
    active: false,
  },
];

const popularTags = [
  "Dashboard",
  "Landing page",
  "e-commerce",
  "logo",
  "card",
  "icons",
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-11 px-[2.60%]">
        <div className="flex flex-col gap-[21px] max-w-[634px]">
          <header className="px-[15px] py-[11px]">
            <h1 className="font-body-semibold-48 font-[number:var(--body-semibold-48-font-weight)] text-grey-color-black text-[length:var(--body-semibold-48-font-size)] tracking-[var(--body-semibold-48-letter-spacing)] leading-[var(--body-semibold-48-line-height)] [font-style:var(--body-semibold-48-font-style)]">
              Discover the <br />
              World&apos;s Top Designers
            </h1>
          </header>

          <div className="px-[15px] py-0.5">
            <p className="font-body-regular-20 font-[number:var(--body-regular-20-font-weight)] text-grey-color-black text-[length:var(--body-regular-20-font-size)] tracking-[var(--body-regular-20-letter-spacing)] leading-[var(--body-regular-20-line-height)] [font-style:var(--body-regular-20-font-style)]">
              Explore work from the most talented and accomplished designers
              ready to take on your next project.
            </p>
          </div>

          <nav className="flex flex-col gap-2 px-[23px]">
            <div className="flex items-center gap-[26px] py-2">
              {navigationButtons.map((button) => (
                <Button
                  key={button.id}
                  variant={button.active ? "default" : "secondary"}
                  className={`flex items-center gap-1.5 px-[21px] py-[11px] h-auto rounded-[57px] ${
                    button.active
                      ? "bg-bg-color-4 hover:bg-bg-color-4/90"
                      : "bg-gray-color-white hover:bg-gray-color-white/90"
                  }`}
                >
                  <img
                    className={`${
                      button.id === "shots"
                        ? "w-[21px] h-[23px]"
                        : button.id === "designer"
                          ? "w-[17px] h-[17px]"
                          : "w-[15.18px] h-[16.78px]"
                    }`}
                    alt={button.label}
                    src={button.icon}
                  />
                  <span
                    className={`font-body-semibold-16 font-[number:var(--body-semibold-16-font-weight)] text-[length:var(--body-semibold-16-font-size)] tracking-[var(--body-semibold-16-letter-spacing)] leading-[var(--body-semibold-16-line-height)] [font-style:var(--body-semibold-16-font-style)] ${
                      button.active
                        ? "text-gray-color-white"
                        : "text-grey-color-black"
                    }`}
                  >
                    {button.label}
                  </span>
                </Button>
              ))}
            </div>

            <div className="flex items-center justify-between pl-[19px] pr-1.5 py-[7px] bg-bg-color-2 rounded-[60px]">
              <Input
                type="text"
                placeholder="What type of designs are you interested in?"
                className="border-0 bg-transparent font-body-regular-12 font-[number:var(--body-regular-12-font-weight)] text-text-color-1 text-[length:var(--body-regular-12-font-size)] tracking-[var(--body-regular-12-letter-spacing)] leading-[var(--body-regular-12-line-height)] [font-style:var(--body-regular-12-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-1"
              />
              <Button
                size="icon"
                className="w-[35px] h-[35px] bg-french-rose-dribbble-pink hover:bg-french-rose-dribbble-pink/90 rounded-[28px] flex-shrink-0"
              >
                <SearchIcon className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2.5 px-[9px] py-1.5 flex-wrap">
              <span className="font-body-semibold-16 font-[number:var(--body-semibold-16-font-weight)] text-grey-color-black text-[length:var(--body-semibold-16-font-size)] tracking-[var(--body-semibold-16-letter-spacing)] leading-[var(--body-semibold-16-line-height)] [font-style:var(--body-semibold-16-font-style)] py-1.5">
                Popular:
              </span>
              {popularTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-[9px] py-1.5 rounded-[17px] border-[#e1e1e1] bg-transparent hover:bg-gray-color-white cursor-pointer"
                >
                  <span className="font-body-regular-14 font-[number:var(--body-regular-14-font-weight)] text-text-color-2 text-[length:var(--body-regular-14-font-size)] tracking-[var(--body-regular-14-letter-spacing)] leading-[var(--body-regular-14-line-height)] [font-style:var(--body-regular-14-font-style)]">
                    {tag}
                  </span>
                </Badge>
              ))}
            </div>
          </nav>
        </div>

        <aside className="relative w-full max-w-[498px] h-[452px] ml-auto mt-[26px]">
          <div className="relative w-full h-full rounded-[54px] overflow-hidden [background:url(../component-2.png)_50%_50%_/_cover]">
            <div className="absolute bottom-[18px] right-[23px] inline-flex items-center gap-2 pl-[3px] pr-[11px] py-0.5 bg-gray-color-white rounded-[34px]">
              <div className="w-[27px] h-[27px] rounded-[49px] bg-[url(/frame-57.png)] bg-cover bg-[50%_50%]" />
              <span className="font-body-medium-12 font-[number:var(--body-medium-12-font-weight)] text-grey-color-black text-[length:var(--body-medium-12-font-size)] tracking-[var(--body-medium-12-letter-spacing)] leading-[var(--body-medium-12-line-height)] [font-style:var(--body-medium-12-font-style)]">
                Hitoshi Morita
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
