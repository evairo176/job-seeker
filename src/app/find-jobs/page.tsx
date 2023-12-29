"use client";
import React from "react";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DUMMY_DATA, FILTER_FORM } from "@/constans/clients";

type Props = {};

const FindJobsPage = (props: Props) => {
  const form = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
      type_employe: [],
      salary: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainer
      form={form}
      onSubmit={onSubmit}
      filterForms={FILTER_FORM}
      title="dream job"
      subtitle="Find your next carrer at companies like HubSpot, Nike, and Dropbox"
      loading={false}
      data={DUMMY_DATA}
      type="job"
    />
  );
};

export default FindJobsPage;
