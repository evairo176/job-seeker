import React from "react";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { formFilterSchema } from "@/lib/form-schema";
import CheckboxForm from "./CheckboxForm";
import { filterFormType } from "@/types/clients";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FormFilterDynamicInterface {
  form: any;
  onSubmit: (
    val: z.infer<typeof formFilterSchema>
  ) => Promise<void> | undefined;
  filterForms: filterFormType[];
}

const FormFilterDynamic = ({
  form,
  onSubmit,
  filterForms,
}: FormFilterDynamicInterface) => {
  return (
    <div className="w-full md:w-1/5 ">
      <div className="block md:hidden">
        <Tabs defaultValue={filterForms[0].name}>
          <TabsList className="w-full flex flex-wrap h-auto">
            {filterForms?.map((row, key) => {
              return (
                <TabsTrigger key={key} value={row.name}>
                  {row.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {filterForms?.map((row, key) => {
                return (
                  <TabsContent value={row.name}>
                    <CheckboxForm
                      key={key}
                      form={form}
                      name={row.name}
                      label={row.label}
                      items={row.items}
                    />
                  </TabsContent>
                );
              })}
              <Button className="mt-5 w-full">Apply filter</Button>
              <Button variant={"outline"} className="mt-2 w-full">
                Reset filter
              </Button>
            </form>
          </Form>
        </Tabs>
      </div>
      <div className="hidden md:block">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {filterForms?.map((row, key) => {
              return (
                <CheckboxForm
                  key={key}
                  form={form}
                  name={row.name}
                  label={row.label}
                  items={row.items}
                />
              );
            })}
            <Button className="mt-5 w-full">Apply filter</Button>
            <Button variant={"outline"} className="mt-2 w-full">
              Reset filter
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormFilterDynamic;
