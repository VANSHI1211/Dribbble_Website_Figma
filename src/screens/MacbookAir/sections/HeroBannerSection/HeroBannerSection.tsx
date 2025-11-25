import { ArrowRightIcon, XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-bg-color-1 rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-2.5 px-5 py-5">
        <div className="flex items-center gap-2.5 flex-1">
          <Badge className="bg-grey-color-black text-gray-color-white hover:bg-grey-color-black rounded-[5px] px-[5px] py-[3px] font-body-bold-12 font-[number:var(--body-bold-12-font-weight)] text-[length:var(--body-bold-12-font-size)] tracking-[var(--body-bold-12-letter-spacing)] leading-[var(--body-bold-12-line-height)] [font-style:var(--body-bold-12-font-style)]">
            PRO
          </Badge>

          <p className="font-body-regular-16 font-[number:var(--body-regular-16-font-weight)] text-grey-color-black text-[length:var(--body-regular-16-font-size)] tracking-[var(--body-regular-16-letter-spacing)] leading-[var(--body-regular-16-line-height)] [font-style:var(--body-regular-16-font-style)]">
            Pro Designers get 10x more leads and pay no fees when they transact
            on Dribble.
          </p>

          <Button
            variant="link"
            className="inline-flex items-center gap-1.5 px-0 py-0 h-auto font-body-bold-16 font-[number:var(--body-bold-16-font-weight)] text-grey-color-black text-[length:var(--body-bold-16-font-size)] tracking-[var(--body-bold-16-letter-spacing)] leading-[var(--body-bold-16-line-height)] [font-style:var(--body-bold-16-font-style)] hover:no-underline"
          >
            Upgrade to Pro now
            <ArrowRightIcon className="w-[14.52px] h-[15.77px]" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="flex-shrink-0 w-[25px] h-[25px] p-0 hover:bg-transparent"
        >
          <XIcon className="w-[25px] h-[25px]" />
        </Button>
      </div>
    </section>
  );
};
