import React from "react";
import TitleSection from "../Category/components/TitleSection";
import FeaturedJobItem from "./components/FeaturedJobItem";

type FeaturedJobsProps = {};

const FeaturedJobs = (props: FeaturedJobsProps) => {
  return (
    <div className="mt-20 md:mt-32 mb-8">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 content-center gap-8 mt-12">
        {[0, 1, 2].map((row, key) => {
          return (
            <FeaturedJobItem
              image="/images/company.png"
              jobType="Full-Time"
              name="Email Marketing"
              type="agency"
              location="paris, france"
              desc="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem id, porro est expedita harum cum impedit hic quaerat dolores, provident praesentium exercitationem nihil nisi voluptatum accusantium ut voluptates quae officiis? Similique sequi cum impedit illum numquam sit magnam obcaecati laudantium, voluptates excepturi expedita quam eligendi pariatur ducimus quae nam blanditiis."
              categories={[
                "Marketing",
                "Design",
                "Full-Stack",
                "Editing Image",
              ]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedJobs;
