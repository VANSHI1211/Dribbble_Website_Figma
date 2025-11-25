import React from "react";

export const SecondaryResearchSection = (): JSX.Element => {
  return (
    <section className="flex items-start gap-[153px] w-full">
      <div className="flex w-[1074px] items-center justify-center gap-2 px-[21px] py-[18px]">
        <p className="flex-1 [font-family:'Poppins',Helvetica] font-medium text-[#000000] text-4xl text-justify tracking-[0] leading-[normal]">
          Our research paper focused on cross-cultural campus life and how
          students navigate friendships across regional and cultural boundaries.
        </p>
      </div>

      <div className="flex flex-col w-[405px] items-center">
        <div className="self-stretch [font-family:'Poppins',Helvetica] font-semibold text-primary-1 text-8xl text-center tracking-[0] leading-[normal]">
          6
        </div>

        <div className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[32px] tracking-[0] leading-[normal] text-center">
          Research Paper | Regions
        </div>
      </div>
    </section>
  );
};
