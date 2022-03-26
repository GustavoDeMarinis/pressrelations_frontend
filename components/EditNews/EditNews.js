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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosGet, axiosGetById, axiosUpdate } from "../../helpers/axiosCalls";

const EditNews = ({ id, onClose }) => {
  const [news, setNews] = useState({});

  useEffect(() => {
    axiosGetById("/news", id).then((res) => setNews(res.data.data));
  }, [id]);

  const editNewsForm = useForm({
    defaultValues: {
      headline: news?.headline,
      text: news?.text,
      date: news?.date,
      publication: news?.publication,
    },
  });

  const { register, setValue, getValues, control, handleSubmit } = editNewsForm;

  return (
    <form
      onSubmit={handleSubmit(
        (values) => {
          axiosUpdate("/news", formatValues(values));
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

      <Flex alignContent="end" marginTop={5} marginBottom={3}>
        <Button colorScheme="blue" marginLeft="auto" type="submit">
          SUBMIT
        </Button>
      </Flex>
    </form>
  );
};

export default EditNews;
