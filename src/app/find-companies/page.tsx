"use client";
import React from "react";
import {
  DUMMY_DATA_COMPANIES,
  FILTER_FORM_COMPANIES,
} from "@/constans/clients";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompaniesSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};

const FindCompaniesPage = (props: Props) => {
  const form = useForm<z.infer<typeof formFilterCompaniesSchema>>({
    resolver: zodResolver(formFilterCompaniesSchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterCompaniesSchema>) => {
    console.log(val);
  };
  return (
    <ExploreDataContainer
      form={form}
      onSubmit={onSubmit}
      filterForms={FILTER_FORM_COMPANIES}
      title="dream companies"
      subtitle="Find the dream companies you dream work for"
      loading={false}
      data={DUMMY_DATA_COMPANIES}
      type="company"
    />
  );
};

export default FindCompaniesPage;
