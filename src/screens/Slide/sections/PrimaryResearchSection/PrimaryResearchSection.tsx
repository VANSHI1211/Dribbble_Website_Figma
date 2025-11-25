import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const researchData = [
  {
    title: "DESIGN OBJECTIVE",
    content:
      "Design an inclusive campus experience that facilitates cross-cultural interactions and overcomes language and cultural barriers.",
    bgColor: "bg-light-pinkish",
    borderColor: "border-[#000000]",
    marginLeft: "ml-0",
  },
  {
    title: "RESEARCH OBJECTIVE",
    content:
      "We aim to examine how students from diverse cultures connect, the barriers to cross-cultural interaction, and the initiatives that foster lasting intercultural friendships.",
    bgColor: "bg-pinkish",
    borderColor: "border-[#bd2d00]",
    marginLeft: "ml-8",
  },
  {
    title: "INTENDED IMPACT",
    content:
      "A campus environment that feels welcoming and inclusive for all students, regardless of origin.\nStudents develop confidence to engage with peers from different cultural backgrounds.\nMutual respect and curiosity toward diverse traditions and perspectives.\nA positive, open-minded campus culture where cross-cultural friendships emerge naturally.",
    bgColor: "bg-light-pinkish",
    borderColor: "border-[#000000]",
    marginLeft: "ml-[493px]",
  },
  {
    title: "EXPECTED OUTCOME",
    content:
      "More students interacting across cultural lines in both academic and casual settings.\nA stronger sense of belonging for everyone, especially new students.\nFewer language and cultural misunderstandings.\nMore confidence for shy or less social students to join in.\nStudents knowing and appreciating more about different cultures, festivals, and traditions",
    bgColor: "bg-pinkish",
    borderColor: "border-[#bd2d00]",
    marginLeft: "ml-0",
  },
  {
    title: "CRITICAL QUESTIONS",
    content:
      "What makes students from different cultures want to connect — or not connect?\nWhich events, spaces, or activities actually help students mix and make friends?\nHow do language barriers and cultural differences affect students' confidence and willingness to join in?\nHow can we make it easier for quiet or introverted students to be part of cross-cultural bonding?\nDo these friendships survive after the first event or program ends?",
    bgColor: "bg-light-pinkish",
    borderColor: "border-[#000000]",
    marginLeft: "ml-[379px]",
  },
  {
    title: "RESEARCH APPROACH AND METHODS",
    content:
      "Approach:\nA qualitative approach focused on understanding lived experiences and perspectives of students from different cultural and regional backgrounds\n\nMethods:\nSemi-structured interviews with students to capture personal stories, challenges, and opportunities in cross-cultural campus life",
    bgColor: "bg-pinkish",
    borderColor: "border-[#bd2d00]",
    marginLeft: "ml-0",
  },
];

export const PrimaryResearchSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col py-8 px-4">
      <h2 className="text-center mb-20 [font-family:'Poppins',Helvetica] font-normal text-5xl tracking-[0] leading-[normal]">
        <span className="text-[#ff7043]">Primary </span>
        <span className="font-semibold text-[#1e1e1e]">Research Plan</span>
      </h2>

      <div className="flex flex-col gap-6 max-w-[1700px] mx-auto w-full">
        {researchData.map((item, index) => (
          <Card
            key={index}
            className={`${item.bgColor} ${item.borderColor} ${item.marginLeft} border-dashed rounded-[25px] shadow-none`}
          >
            <CardContent className="p-[25px]">
              <div className="[font-family:'Poppins',Helvetica] font-medium text-2xl tracking-[0] leading-[normal]">
                <span className="text-[#ff7043]">
                  {item.title}
                  <br />
                </span>
                <span className="text-[#000000]">
                  {item.content.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.content.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
