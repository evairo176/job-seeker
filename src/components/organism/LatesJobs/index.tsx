import React from "react";
import TitleSection from "../Category/components/TitleSection";
import JobItem from "./JobItem";

type Props = {};

const LatesJobs = (props: Props) => {
  return (
    <div className="mt-20 md:mt-32 mb-8">
      <TitleSection word1="Lates" word2="Jobs open" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[0, 1, 2].map((row, key) => {
          return (
            <JobItem
              key={key}
              image="/images/company2.png"
              name="Social Media Assistant"
              type="Agency"
              location="Paris, France"
              jobType="Full-Time"
              categories={["Marketing", "Design"]}
              desc="Description"
              applicants={0}
              needs={0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatesJobs;
