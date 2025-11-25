import { EyeIcon, HeartIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const designCards = [
  {
    id: 1,
    image: "/component-9.png",
    avatar: "/frame-68.png",
    author: "Alfrey Davilla|vaneltia",
    badge: "PRO",
    likes: "50",
    views: "7.1k",
  },
  {
    id: 2,
    image: "/component-11.png",
    avatar: "/frame-68-1.png",
    author: "Kendrick Kidd",
    badge: "PRO",
    likes: "55",
    views: "11.2k",
  },
  {
    id: 3,
    image: "/component-14.png",
    avatar: "/frame-68-2.png",
    author: "Nixtio",
    badge: "PRO",
    likes: "169",
    views: "15.2k",
  },
  {
    id: 4,
    image: "/component-4.png",
    avatar: "/frame-68-3.png",
    author: "Tubik",
    badge: "TEAM",
    likes: "67",
    views: "2.6k",
  },
  {
    id: 5,
    image: "/component-7.png",
    avatar: "/frame-68-7.png",
    author: "HALO LAB",
    badge: "PRO",
    likes: "59",
    views: "8.6k",
  },
  {
    id: 6,
    image: "/component-14-1.png",
    avatar: "/frame-68-5.png",
    author: "Tino",
    badge: "TEAM",
    likes: "106",
    views: "3.5k",
  },
  {
    id: 7,
    image: "/component-7-1.png",
    avatar: "/frame-68-6.png",
    author: "Amazing UI",
    badge: "PRO",
    likes: "133",
    views: "4.1k",
  },
  {
    id: 8,
    image: "/component-16.png",
    avatar: "/frame-68-7.png",
    author: "Josh Warren",
    badge: "PRO",
    likes: "59",
    views: "8.6k",
  },
  {
    id: 9,
    image: "/component-22.png",
    avatar: "/frame-68-8.png",
    author: "Wells Collins",
    badge: "PRO",
    likes: "35",
    views: "2.8k",
  },
  {
    id: 10,
    image: "/component-25.png",
    avatar: "/frame-68-9.png",
    author: "Dipa Inhouse",
    badge: "TEAM",
    likes: "139",
    views: "8.2k",
  },
  {
    id: 11,
    image: "/component-25-1.png",
    avatar: "/frame-68-10.png",
    author: "Samuel Oktavianus",
    badge: "PRO",
    likes: "95",
    views: "5.9k",
  },
  {
    id: 12,
    image: "/component-27.png",
    avatar: "/frame-68-11.png",
    author: "Ronas IT | UI/UX Te...",
    badge: "TEAM",
    likes: "101",
    views: "14.9k",
  },
];

export const LoadMoreSection = (): JSX.Element => {
  return (
    <section className="w-full px-8 py-[27px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[23px]">
        {designCards.map((card) => (
          <Card
            key={card.id}
            className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer hover:opacity-90 transition-opacity"
          >
            <CardContent className="p-0">
              <div className="relative w-full h-[201px] rounded-[10px] overflow-hidden mb-0">
                <div
                  className="w-full h-full rounded-[10px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              </div>

              <div className="flex items-center justify-between px-2 py-0 bg-gray-color-white">
                <div className="flex items-center gap-[5px] py-3 h-12">
                  <Avatar className="w-5 h-5">
                    <AvatarImage src={card.avatar} alt={card.author} />
                  </Avatar>

                  <div className="flex items-center justify-center gap-2">
                    <span className="font-body-medium-12 font-[number:var(--body-medium-12-font-weight)] text-grey-color-black text-[length:var(--body-medium-12-font-size)] tracking-[var(--body-medium-12-letter-spacing)] leading-[var(--body-medium-12-line-height)] [font-style:var(--body-medium-12-font-style)]">
                      {card.author}
                    </span>
                  </div>

                  <Badge className="px-[5px] py-[3px] bg-bg-color-5 rounded-[5px] hover:bg-bg-color-5 border-0">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-gray-color-white text-[10px] tracking-[0] leading-[normal]">
                      {card.badge}
                    </span>
                  </Badge>
                </div>

                <div className="flex items-center gap-0.5 py-3.5">
                  <div className="flex items-center gap-0.5 px-0 py-1">
                    <HeartIcon className="w-2 h-2 fill-current text-text-color-3" />
                    <span className="[font-family:'Inter',Helvetica] font-bold text-text-color-3 text-[10px] tracking-[0] leading-[normal]">
                      {card.likes}
                    </span>
                  </div>

                  <div className="flex items-center gap-0.5 px-px py-1">
                    <EyeIcon className="w-[11px] h-[9px] text-text-color-3" />
                    <span className="[font-family:'Inter',Helvetica] font-bold text-text-color-3 text-[10px] tracking-[0] leading-[normal]">
                      {card.views}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
