import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const CreateNewsForm = ({ tags, onClose }) => {
  const newsForm = useForm({
    defaultValues: {
      headline: "",
      text: "",
      date: "",
      publication: "",
      tags: [],
      newTags: [],
    },
  });
  const { register, setValue, getValues, control, handleSubmit, formState } =
    newsForm;

  const checkboxHandler = (isChecked, value) => {
    const tagsValues = getValues("tags");
    if (isChecked) {
      setValue("tags", [...tagsValues, value]);
    } else {
      setValue(
        "tags",
        tagsValues.filter((tag) => tag !== value)
      );
    }
  };

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "newTags", // unique name for your Field Array
  });

  return (
    <form
      onSubmit={handleSubmit(
        (values) => {
          console.log(format(new Date(values.date), "dd-MM-yyyy HH:mm:ssx"));
        },
        (errors) => {
          console.log(errors);
        }
      )}
    >
      <Stack spacing={[1, 5]} direction={["column"]} marginBottom={5}>
        <Input
          placeholder="Headline"
          {...register("headline", {
            required: "this field is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <Input
          placeholder="Text"
          {...register("text", {
            required: "this field is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <Input
          placeholder="Date"
          type="datetime-local"
          {...register("date", {
            required: "this field is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <Input
          placeholder="Publication"
          {...register("publication", {
            required: "this field is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
      </Stack>
      <CheckboxGroup>
        <Heading as="h2" size="md" color="#474747">
          Tags:
        </Heading>
        <SimpleGrid columns={5} spacing={2} margin={2}>
          {tags.map((tag) => {
            return (
              <Checkbox
                key={tag.id}
                color="#474747"
                onChange={(e) => checkboxHandler(e.target.checked, tag.name)}
              >
                {tag.name}
              </Checkbox>
            );
          })}
        </SimpleGrid>
        <Button
          leftIcon={<AddIcon w={4} h={4} />}
          onClick={() => {
            append("");
          }}
        >
          Create Tag
        </Button>

        {fields.map((item, index) => {
          return (
            <Flex marginTop={5} justify="space-between" w={255} key={index}>
              <Input
                w={200}
                placeholder="Create Tag"
                key={item.id}
                {...register(`newTags.${index}.value`)}
              />
              <Button onClick={() => remove(index)}>
                <CloseIcon w={4} h={4} />
              </Button>
            </Flex>
          );
        })}
      </CheckboxGroup>
      <Flex alignContent="end" marginTop={5} marginBottom={3}>
        <Button colorScheme="blue" marginLeft="auto" type="submit">
          SUBMIT
        </Button>
      </Flex>
    </form>
  );
};

export default CreateNewsForm;
