import { Button, Flex, Input, Stack } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosGet, axiosGetById, axiosUpdate } from "../../helpers/axiosCalls";
import { formatValues } from "../../helpers/formHelpers";

const EditNews = ({ id, onClose, forceUpdate, setNews }) => {
  const [edit, setEdit] = useState(null);

  const editNewsForm = useForm({});

  const { register, handleSubmit, reset } = editNewsForm;

  useEffect(() => {
    axiosGetById("/news", id).then((res) => setEdit(res.data.data));
  }, [id]);

  useEffect(() => {
    reset(edit);
  }, [edit, reset]);

  return (
    <form
      onSubmit={handleSubmit(
        (values) => {
          axiosUpdate("/news", id, formatValues(values));
          axiosGet("/news").then((res) => {
            setNews([...res.data.data]);
          });
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
        <Button colorScheme="teal" marginLeft="auto" type="submit">
          Edit
        </Button>
      </Flex>
    </form>
  );
};

export default EditNews;
