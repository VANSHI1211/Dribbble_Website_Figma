import React from "react";
import { Badge } from "../../../../components/ui/badge";

const lineImages = [
  {
    src: "/line-76.svg",
    className: "absolute top-0 left-0 w-[409px] h-[327px] object-cover",
  },
  {
    src: "/line-77.svg",
    className: "absolute top-0 left-0 w-[505px] h-[539px] object-cover",
  },
  {
    src: "/line-78.svg",
    className: "absolute top-0 left-0 w-[769px] h-[756px] object-cover",
  },
  {
    src: "/line-86.svg",
    className: "absolute top-0 left-0 w-[970px] h-[985px] object-cover",
  },
  {
    src: "/line-86.svg",
    className: "absolute top-0 left-40 w-[984px] h-[1000px] object-cover",
  },
  {
    src: "/line-86.svg",
    className: "absolute top-0 left-[342px] w-[984px] h-[1000px] object-cover",
  },
  {
    src: "/line-86.svg",
    className: "absolute top-0 left-[557px] w-[984px] h-[1000px] object-cover",
  },
  {
    src: "/line-86.svg",
    className: "absolute top-0 left-[793px] w-[984px] h-[1000px] object-cover",
  },
  {
    src: "/line-86.svg",
    className:
      "absolute top-[11px] left-[969px] w-[951px] h-[989px] object-cover",
  },
  {
    src: "/line-86.svg",
    className:
      "absolute top-[66px] left-[1126px] w-[794px] h-[934px] object-cover",
  },
  {
    src: "/line-86.svg",
    className:
      "absolute top-[150px] left-[1255px] w-[665px] h-[850px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[1041px] w-[879px] h-[1000px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[1356px] w-[564px] h-[678px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[1237px] w-[683px] h-[779px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[1127px] w-[793px] h-[881px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[844px] w-[984px] h-[1000px] object-cover",
  },
  {
    src: "/line-97-1.svg",
    className: "absolute top-[893px] left-0 w-[65px] h-[107px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[579px] w-[984px] h-[985px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[377px] w-[984px] h-[1000px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-[214px] w-[984px] h-[1000px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-0 left-0 w-[960px] h-[1000px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-[91px] left-0 w-[819px] h-[909px] object-cover",
  },
  {
    src: "/line-86.svg",
    className:
      "absolute top-[217px] left-[1408px] w-[512px] h-[783px] object-cover",
  },
  {
    src: "/line-96.svg",
    className: "top-[172px] w-[682px] h-[828px] absolute left-0 object-cover",
  },
  {
    src: "/line-96.svg",
    className: "absolute top-[246px] left-0 w-[521px] h-[754px] object-cover",
  },
];

const circleDots = [
  {
    className:
      "absolute top-3.5 left-[1723px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[132px] left-[552px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[13px] left-[653px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[23px] left-[866px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[13px] left-[1079px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[13px] left-[1297px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[13px] left-[1504px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-32 left-[1826px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[353px] left-[1823px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[243px] left-[1719px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[353px] left-[1616px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[462px] left-[1719px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[574px] left-[1823px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[806px] left-[1823px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[692px] left-[1714px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[582px] left-[1610px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[812px] left-[1603px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-32 left-[1611px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[23px] left-[235px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[127px] left-[333px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[13px] left-[438px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "top-[919px] left-[1501px] absolute w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "top-[925px] left-[1289px] absolute w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[812px] left-[1186px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[812px] left-[974px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[949px] left-[638px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[245px] left-[445px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[244px] left-[653px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[241px] left-[869px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[248px] left-[1074px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[243px] left-[1296px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[124px] left-[1404px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[238px] left-[1508px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[132px] left-[970px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[835px] left-[529px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[355px] left-[1399px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[361px] left-[1181px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[584px] left-[1190px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[470px] left-[1084px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[584px] left-[975px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[355px] left-[975px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[357px] left-[760px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[357px] left-[551px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[372px] left-[322px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[489px] left-[431px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[474px] left-[1508px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[609px] left-[317px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[835px] left-[317px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[925px] left-[1074px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[957px] left-[199px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[845px] left-[97px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[723px] left-[209px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[723px] left-[209px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[609px] left-[102px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[731px] -left-2 w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[490px] -left-1 w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[271px] left-[3px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[378px] left-[101px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-64 left-[215px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[494px] left-[209px] w-5 h-5 bg-circle-p rounded-[10px]",
  },
  {
    className:
      "absolute top-[957px] -left-2.5 w-5 h-5 bg-circle-p rounded-[10px]",
  },
];

export const ResearchOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1000px] bg-[#ffdfd5] overflow-hidden">
      {lineImages.map((line, index) => (
        <img
          key={`line-${index}`}
          className={line.className}
          alt="Line"
          src={line.src}
        />
      ))}

      {circleDots.map((dot, index) => (
        <div key={`dot-${index}`} className={dot.className} />
      ))}

      <div className="absolute top-[-50px] left-[1593px] w-[237px] h-[213px] rounded-[200px] rotate-[84.98deg] bg-[url(/frame-1618873088.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[355px] left-[300px] w-[1319px] h-[645px] bg-[url(/frame-1618873084.png)] bg-cover bg-[50%_50%]" />

      <header className="absolute top-[67px] left-[438px] w-[1044px] h-72 flex items-center justify-center">
        <h1 className="w-[1044px] h-72 [font-family:'Poppins',Helvetica] font-bold text-app-primary text-8xl text-center tracking-[-1.44px] leading-[144px]">
          CROSS-CULTURAL CAMPUS LIFE
        </h1>
      </header>

      <div className="absolute top-[778px] left-[49px] w-[148px] h-[149px] rotate-[84.98deg] bg-[url(/frame-1618873089.png)] bg-cover bg-[50%_50%]" />

      <Badge className="absolute top-[66px] left-[-111px] w-96 h-[162px] flex items-center justify-end bg-app-primary rounded-[143px] overflow-hidden px-[141px] py-[26px] hover:bg-app-primary">
        <span className="w-[205px] h-[110px] [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#ffffff] text-[40px] tracking-[0] leading-[normal]">
          Design Thinking
        </span>
      </Badge>
    </section>
  );
};
