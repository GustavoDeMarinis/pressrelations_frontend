import {
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
import { axiosGet, axiosPost } from "../../helpers/axiosCalls";

const CreateNewsForm = ({ tags, onClose, setNews }) => {
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
  const { register, setValue, getValues, control, handleSubmit } = newsForm;

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
    control,
    name: "newTags",
  });

  const formatValues = (values) => {
    return {
      news: {
        headline: values.headline,
        date: format(new Date(values.date), "yyyy-MM-dd HH:mm:ssx"),
        tags: values.tags.concat(values.newTags),
        publication: values.publication,
        text: values.text,
      },
    };
  };
  return (
    <form
      onSubmit={handleSubmit(
        (values) => {
          axiosPost("/news", formatValues(values));
          axiosGet("/news").then((res) => setNews(res.data.data));
          onClose();
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
          type="datetime-local"
          {...register("date", {
            required: "this field is required",
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
                {...register(`newTags.${index}`)}
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
