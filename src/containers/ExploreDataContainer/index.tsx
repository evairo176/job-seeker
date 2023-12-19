import CompanyCard from "@/components/organism/CompanyCard";
import FormFilterDynamic from "@/components/organism/FormFilterDynamic";
import FormSearchDynamic from "@/components/organism/FormSearchDynamic";
import JobCard from "@/components/organism/JobCard";
import { filterFormType } from "@/types/clients";

import Image from "next/image";
import React from "react";

interface ExploreDataContainerInterface {
  form?: any;
  onSubmit: (val: any) => Promise<void>;
  filterForms: filterFormType[];
  loading: boolean;
  title: string;
  subtitle: string;
  data: any[];
  type: "job" | "company";
}

const ExploreDataContainer = ({
  form,
  onSubmit,
  filterForms,
  title,
  subtitle,
  loading,
  data,
  type,
}: ExploreDataContainerInterface) => {
  return (
    <>
      <div className="bg-gray-200 px-4 lg:px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mx-auto mb-5 md:mb-11 text-center flex justify-center">
            <span className="text-3xl lg:text-5xl font-semibold">
              Find your
            </span>
            <div className="relative">
              <span className="text-2xl lg:text-5xl font-semibold text-primary ml-1">
                {title}
              </span>
              <div className="absolute top-3 md:top-12 w-[7rem] lg:w-[14rem] h-10">
                <Image
                  src="/images/pattern2.png"
                  alt="/images/pattern2.png"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">{subtitle}</div>
        </div>
        <div>
          <FormSearchDynamic />
        </div>
      </div>
      <div className="mt-20 mb-16 px-4 lg:px-32 flex flex-col md:flex-row items-start gap-10">
        <FormFilterDynamic
          form={form}
          onSubmit={onSubmit}
          filterForms={filterForms}
        />
        <div className="w-full lg:w-4/5">
          <div className="mb-8">
            <div className="text-3xl font-semibold">
              All {type === "job" ? "Jobs" : "Companies"}
            </div>
            <div className="text-muted-foreground">Showing 73 Result</div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                {type === "job" ? (
                  <div className="grid grid-cols-1 gap-7">
                    {data?.map((row, key) => {
                      return (
                        <JobCard
                          key={key}
                          jobType={row.jobType}
                          location={row.location}
                          name={row.name}
                          needs={row.needs}
                          type={row.type}
                          applicants={row.applicants}
                          categories={row.categories}
                          desc={row.desc}
                          image={row.image}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {data?.map((row, key) => {
                      return <CompanyCard key={key} {...row} />;
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
