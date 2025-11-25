import React from "react";

const processSteps = [
  {
    title: "Empathize",
    image: "/frame-1618873092.png",
    items: ["Secondary Research", "Sampling", "Interviews", "Non-Judgemental"],
  },
  {
    title: "Define",
    image: "/frame-1618873093.png",
    items: [
      "Coding",
      "Affinity Mapping",
      "Thematic Analysis",
      "Framing Insights",
      "User Personas",
      "User Journey Maps",
    ],
  },
  {
    title: "Ideate",
    image: "/frame-1618873094.png",
    items: ["Ideations Brainstorming"],
  },
  {
    title: "Prototype",
    image: "/frame-1618873095.png",
    items: [
      "Concept Generation",
      "Storyboard",
      "Paper Wireframes",
      "Low Fidelity Wireframes",
      "High Fidelity Mockups",
      "Prototype",
    ],
  },
  {
    title: "Test",
    image: "/frame-1618873095-1.png",
    items: ["Check Visibility", "Good Feedbacks"],
  },
];

export const ResearchPlanSection = (): JSX.Element => {
  return (
    <section className="w-full bg-light-p py-16 px-4 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-center justify-center gap-2 p-2 mb-6">
          <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#000000] text-[26px] text-justify tracking-[0] leading-[normal]">
            We have followed this process throughout
          </p>
        </div>

        <h2 className="text-center [font-family:'Nunito_Sans',Helvetica] font-black text-app-primary text-[41px] tracking-[0] leading-[normal] mb-12">
          Design Thinking Process
        </h2>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 xl:gap-16 mb-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[77px] w-full sm:w-[279px]"
            >
              <div className="relative w-[250px] h-[250px] bg-circle-p rounded-[125px] shadow-[0px_2px_10px_#0000001a] flex items-center justify-center">
                <div
                  className="w-[134px] h-[124px] shadow-[4px_4px_22px_#00000040]"
                  style={{
                    background: `url(${step.image}) 50% 50% / cover`,
                  }}
                />
              </div>

              <div className="flex flex-col items-center gap-px w-full">
                <h3 className="[font-family:'Nunito_Sans',Helvetica] font-medium text-[#000000] text-[34px] text-center tracking-[0] leading-[normal] mb-1">
                  {step.title}
                </h3>

                <div className="flex items-center justify-center w-full">
                  <p className="text-[#000000] text-2xl text-center [font-family:'Nunito_Sans',Helvetica] font-normal tracking-[0] leading-[normal]">
                    {step.items.map((item, itemIndex) => (
                      <React.Fragment key={itemIndex}>
                        {item}
                        {itemIndex < step.items.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            className="w-full max-w-[1640px] h-0.5"
            alt="Line"
            src="/line-179.svg"
          />
        </div>
      </div>
    </section>
  );
};
