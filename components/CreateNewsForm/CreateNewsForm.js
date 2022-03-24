import { Box } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../Atoms/Input/Input";
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
  return (
    <FormProvider {...newsForm}>
      <Box m={5}>
        <Input name="headline" placeholder="headline" />
        <Input name="text" placeholder="text" />
        <Input name="date" placeholder="date" />
        <Input name="publication" placeholder="publication" />
      </Box>
    </FormProvider>
  );
};

export default CreateNewsForm;
