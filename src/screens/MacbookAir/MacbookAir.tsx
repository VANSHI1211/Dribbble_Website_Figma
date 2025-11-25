import React from "react";
import { ExploreSection } from "./sections/ExploreSection";
import { FeaturedDesignsSection } from "./sections/FeaturedDesignsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { LoadMoreSection } from "./sections/LoadMoreSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { TrendingDesignersSection } from "./sections/TrendingDesignersSection";

export const MacbookAir = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-gray-color-white w-full">
      <ExploreSection />
      <HeroBannerSection />
      <NavigationSection />
      <MainContentSection />
      <LoadMoreSection />
      <FeaturedDesignsSection />
      <TrendingDesignersSection />
    </div>
  );
};
