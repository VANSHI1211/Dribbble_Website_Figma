import React from "react";

const leftLinks = [{ text: "Terms" }, { text: "Privacy" }, { text: "Cookies" }];

const rightLinks = [
  { text: "Jobs" },
  { text: "Designers" },
  { text: "Freelancers" },
  { text: "Tags" },
  { text: "Places" },
  { text: "Resources" },
];

export const TrendingDesignersSection = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center gap-[200px] w-full">
      <nav className="inline-flex h-[76px] items-center justify-center gap-[13px] px-[27px] py-[19px]">
        <div className="inline-flex items-center gap-1">
          <img
            className="w-[22px] h-[22px]"
            alt="Circled c"
            src="/circled-c.png"
          />
          <div className="[font-family:'Instrument_Sans',Helvetica] font-medium text-text-color-4 text-[15px] whitespace-nowrap">
            2025 Dribbble
          </div>
        </div>

        {leftLinks.map((link, index) => (
          <div
            key={`left-link-${index}`}
            className="inline-flex items-center gap-1"
          >
            <div className="font-body-medium-15 font-[number:var(--body-medium-15-font-weight)] text-text-color-4 text-[length:var(--body-medium-15-font-size)] tracking-[var(--body-medium-15-letter-spacing)] leading-[var(--body-medium-15-line-height)] whitespace-nowrap [font-style:var(--body-medium-15-font-style)]">
              {link.text}
            </div>
          </div>
        ))}
      </nav>

      <nav className="inline-flex items-center gap-[7px] px-[11px] py-[29px]">
        {rightLinks.map((link, index) => (
          <div
            key={`right-link-${index}`}
            className="inline-flex items-center gap-1"
          >
            <div className="font-body-medium-15 font-[number:var(--body-medium-15-font-weight)] text-text-color-4 text-[length:var(--body-medium-15-font-size)] tracking-[var(--body-medium-15-letter-spacing)] leading-[var(--body-medium-15-line-height)] whitespace-nowrap [font-style:var(--body-medium-15-font-style)]">
              {link.text}
            </div>
          </div>
        ))}
      </nav>
    </footer>
  );
};
