import React from "react";

export const EmpathizeSection = (): JSX.Element => {
  const researchMethods = [
    {
      label: "SECONDARY RESEARCH",
      position: "left",
    },
    {
      label: "PRIMARY RESEARCH",
      position: "right",
    },
  ];

  return (
    <section className="relative w-full py-16">
      <div className="relative w-full max-w-[2086px] mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="bg-bg px-[60px] py-[17px]">
            <h2 className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#000000] text-[64px] text-center tracking-[0] leading-[normal]">
              Data Collection Methods
            </h2>
          </div>
        </div>

        <div className="relative flex items-center justify-between gap-8 mt-20">
          <div className="flex-1 flex justify-center">
            <div className="inline-flex items-center justify-center px-[74px] py-[71px] bg-app-primary rounded-[182px] overflow-hidden h-[150px]">
              <span className="[font-family:'Nunito_Sans',Helvetica] font-black text-white text-[41px] tracking-[0] leading-[normal]">
                {researchMethods[0].label}
              </span>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[864px] h-[210px] rounded-[98px] border-t-[3px] [border-top-style:dashed] border-b-[3px] [border-bottom-style:dashed] border-[#ff7043] rotate-180 pointer-events-none" />

          <div className="flex-1 flex justify-center">
            <div className="inline-flex items-center justify-center px-[119px] py-[94px] bg-app-primary rounded-[182px] overflow-hidden h-[150px]">
              <span className="[font-family:'Nunito_Sans',Helvetica] font-black text-white text-[41px] tracking-[0] leading-[normal]">
                {researchMethods[1].label}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-[271px] left-0 w-full max-w-[1600px] h-[210px] rounded-[90px] border-b-[3px] [border-bottom-style:dashed] border-[#ff7043] rotate-180 pointer-events-none" />

        <div className="absolute top-[59px] right-0 w-[486px] h-[210px] rounded-[90px] border-t-[3px] [border-top-style:dashed] border-[#ff7043] rotate-180 pointer-events-none" />
      </div>
    </section>
  );
};
