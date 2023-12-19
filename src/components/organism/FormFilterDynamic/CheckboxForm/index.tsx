import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
import { ITEMS_CHECKBOX } from "@/constans/clients";
import { formFilterSchema } from "@/lib/form-schema";
import { z } from "zod";

interface CheckboxFormInterface {
  form: any;
  items: any[];
  name: string;
  label: string;
}

const CheckboxForm = ({ form, items, name, label }: CheckboxFormInterface) => {
  return (
    <Accordion
      defaultValue={name}
      className="border-none mt-0"
      type="single"
      collapsible
    >
      <AccordionItem value={name}>
        <AccordionTrigger className="font-semibold">{label}</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={name}
            render={() => (
              <FormItem>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name={name}
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0 text-gray-500"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: any) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CheckboxForm;
