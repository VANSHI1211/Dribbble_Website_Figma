import React from "react";
import { Badge } from "../../components/ui/badge";
import { EmpathizeSection } from "./sections/EmpathizeSection";
import { PrimaryResearchSection } from "./sections/PrimaryResearchSection";
import { ResearchOverviewSection } from "./sections/ResearchOverviewSection";
import { ResearchPlanSection } from "./sections/ResearchPlanSection";
import { SecondaryResearchSection } from "./sections/SecondaryResearchSection";

const regionData = [
  {
    label: "East",
    bgColor: "bg-soft-powder-blue",
  },
  {
    label: "South",
    bgColor: "bg-light-blue",
  },
  {
    label: "North",
    bgColor: "bg-crown-blue",
  },
  {
    label: "North",
    bgColor: "bg-crown-blue",
  },
];

const researchThemes = [
  {
    text: "Cultural Adjustment\nHomesickness, food habits, adapting to new norms",
    bgColor: "bg-light-p",
    textColor: "text-crown-blue",
    position: "top-[3717px] left-[149px]",
    width: "w-[1120px]",
  },
  {
    text: "Communication\nLanguage barriers, accent issues, misunderstandings",
    bgColor: "bg-circle-p",
    textColor: "text-black",
    position: "top-[3892px] left-[673px]",
    width: "w-[1087px]",
  },
  {
    text: "Peer Interaction\nRole of friendships, group formation, stereotypes",
    bgColor: "bg-light-p",
    textColor: "text-crown-blue",
    position: "top-[4067px] left-[149px]",
    width: "w-[1120px]",
  },
  {
    text: "Support Systems\nOrientation programs, mentoring, counselling",
    bgColor: "bg-circle-p",
    textColor: "text-black",
    position: "top-[4242px] left-[673px]",
    width: "w-[1086px]",
  },
];

export const Slide = (): JSX.Element => {
  return (
    <div className="bg-[#f9f9f7] overflow-hidden w-full min-w-[1920px] relative">
      <ResearchOverviewSection />

      <section className="relative">
        <img
          className="top-[1214px] w-[1404px] h-px absolute left-0 object-cover"
          alt="Line"
          src="/line-96.svg"
        />

        <img
          className="absolute top-[1000px] left-0 w-[1920px] h-px object-cover"
          alt="Line"
          src="/line-94-1.svg"
        />

        <div className="absolute top-[1206px] -left-1 w-5 h-5 bg-circle-p rounded-[10px]" />

        <div className="absolute top-[855px] left-[1501px] w-[437px] h-[286px] [background:url(../frame-1618873087.png)_50%_50%_/_cover]" />

        <div className="inline-flex items-center justify-center gap-2 absolute top-[1178px] left-[1440px]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-app-primary text-5xl text-center tracking-[-0.72px] leading-[72px] whitespace-nowrap">
            Project Overview
          </h2>
        </div>

        <div className="inline-flex items-center justify-center gap-2 p-2 absolute top-[1065px] left-[57px]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-transparent text-[40px] tracking-[0] leading-[normal]">
            <span className="text-[#000000]">
              Exploring cross-cultural campus life to foster
            </span>
            <span className="text-[#ff7043]"> belonging</span>
            <span className="text-[#000000]"> and </span>
            <span className="text-[#ff7043]">inclusion</span>
            <span className="text-[#000000]">.</span>
          </h3>
        </div>

        <p className="absolute top-[1315px] left-[142px] w-[1621px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[32px] tracking-[0] leading-[normal]">
          We explored how students from different regions experience campus life
          and identified challenges such as language barriers and stereotypes.
          Our initiative focuses on reducing isolation, celebrating diversity,
          and creating opportunities that foster cross-cultural connection and
          belonging.
        </p>
      </section>

      <ResearchPlanSection />

      <section className="absolute top-[2516px] left-[94px] w-[447px] h-[150px]">
        <div className="inline-flex h-[105px] items-center justify-center gap-2 px-[30px] py-[29px] absolute top-[46px] left-[78px] bg-[#ffffff] rounded-[33px] overflow-hidden border-[3px] border-dashed border-[#ff7043]">
          <h2 className="relative w-fit mt-[-23.00px] mb-[-17.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-app-primary text-[64px] text-justify tracking-[0] leading-[normal]">
            Empathise
          </h2>
        </div>

        <Badge className="inline-flex items-center justify-center gap-2 px-[15px] py-0 absolute top-0 left-0 bg-[#ffffff] rounded-[20px] overflow-hidden border border-solid border-[#ff7043]">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-app-primary text-5xl text-justify tracking-[0] leading-[normal]">
            Phase 1
          </span>
        </Badge>
      </section>

      <EmpathizeSection />

      <section className="relative">
        <h2 className="absolute top-[3271px] left-[calc(50.00%_-_287px)] text-transparent text-[64px] [font-family:'Nunito_Sans',Helvetica] font-normal tracking-[0] leading-[normal]">
          <span className="font-bold text-[#ff7043]">Secondary</span>
          <span className="font-bold text-[#000000]">&nbsp;</span>
          <span className="font-medium text-[#000000]">Research</span>
        </h2>

        {researchThemes.map((theme, index) => (
          <div
            key={index}
            className={`flex ${theme.width} items-center justify-center gap-2 px-[81px] py-[25px] absolute ${theme.position} ${theme.bgColor} rounded-[182px] overflow-hidden shadow-box-buddy-2`}
          >
            <p
              className={`relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold ${theme.textColor} text-2xl text-center tracking-[0] leading-[normal] whitespace-pre-line`}
            >
              {theme.text}
            </p>
          </div>
        ))}
      </section>

      <SecondaryResearchSection />

      <p className="absolute top-[4462px] left-[calc(50.00%_-_849px)] [font-family:'Poppins',Helvetica] font-normal text-[#636363] text-4xl tracking-[0] leading-[54px] whitespace-nowrap">
        Together, these gave us a baseline understanding of what works and what
        challenges persist.
      </p>

      <PrimaryResearchSection />

      <section className="relative">
        <h2 className="absolute top-[6388px] left-[calc(50.00%_-_215px)] [font-family:'Poppins',Helvetica] font-normal text-transparent text-5xl tracking-[0] leading-[normal]">
          <span className="font-medium text-[#ff7043]">Primary </span>
          <span className="font-semibold text-[#1e1e1e]">Research</span>
        </h2>

        <div className="inline-flex items-center gap-[55px] absolute top-[6903px] left-[1016px]">
          {regionData.map((region, index) => (
            <div key={index} className="relative w-[134px] h-[50px]">
              <span className="absolute top-[7px] left-16 w-[68px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#000000] text-[26px] text-center tracking-[0] leading-[normal]">
                {region.label}
              </span>
              <div
                className={`w-[53px] ${region.bgColor} absolute top-0 left-0 h-[50px] rounded-[15px]`}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-[6653px] left-[167px] w-[500px] h-[500px] bg-[#ffffff] rounded-[250px] overflow-hidden">
          <img
            className="absolute top-0 left-[250px] w-[206px] h-[250px]"
            alt="Element"
            src="/5.svg"
          />
          <img
            className="absolute top-[108px] left-[190px] w-[310px] h-[392px]"
            alt="Element"
            src="/2.svg"
          />
          <img
            className="absolute top-[250px] left-[84px] w-[166px] h-[243px]"
            alt="Element"
            src="/1.svg"
          />
          <img
            className="absolute top-0 left-0 w-[250px] h-[437px]"
            alt="Element"
            src="/5-1.svg"
          />
        </div>
      </section>
    </div>
  );
};
