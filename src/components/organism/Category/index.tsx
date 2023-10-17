import React from "react";
import TitleSection from "./components/TitleSection";
import CategoryItem from "./components/CategoryItem";

type CategoryProps = {};

const Category = (props: CategoryProps) => {
  return (
    <div className="mt-20 md:mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-flow-row md:grid-cols-4 lg:md:grid-cols-4 gap-9 mt-12">
        {[0, 1, 2, 3, 4, 5, 6].map((row, key) => {
          return (
            <CategoryItem
              key={key}
              detail={{ name: "sparta", totalJobs: 10 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
