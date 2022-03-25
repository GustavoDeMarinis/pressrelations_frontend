import { Input, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const CreateNewsForm = () => {
  const newsForm = useForm({
    defaultValues: {
      headline: "",
      text: "",
      date: "",
      publication: "",
      tags: [],
    },
  });
  const { register } = newsForm;

  return (
    <FormProvider {...newsForm}>
      <SimpleGrid columns={1} spacing={5}>
        <Input
          placeholder="Headline"
          {...register("headline", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <Input
          placeholder="Text"
          {...register("text", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <Input
          placeholder="Date"
          {...register("date", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <Input
          placeholder="Publication"
          {...register("publication", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
      </SimpleGrid>
    </FormProvider>
  );
};

export default CreateNewsForm;
