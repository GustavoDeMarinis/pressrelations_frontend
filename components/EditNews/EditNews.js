import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosGet, axiosGetById, axiosUpdate } from "../../helpers/axiosCalls";
import { editStringDate, formatValues } from "../../helpers/formHelpers";
import Error from "../Error/Error";

const EditNews = ({ id, onClose, forceUpdate, setNews }) => {
  const [edit, setEdit] = useState(null);
  const [typeDate, setTypeDate] = useState(false);

  const editNewsForm = useForm({});

  const dateInput = document.getElementById("date");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, dirtyFields },
  } = editNewsForm;

  useEffect(() => {
    axiosGetById("/news", id).then((res) => setEdit(res.data.data));
  }, [id]);

  useEffect(() => {
    reset({
      ...edit,
      date: edit ? format(new Date(edit.date), "dd/MM/yyyy, hh:mm a") : null,
    });
  }, [edit, reset]);

  useEffect(() => {
    if (dateInput) {
      dateInput.onblur = () => {
        if (!dirtyFields.date) {
          setTypeDate(false);
          setValue("date", format(new Date(edit.date), "dd/MM/yyyy, hh:mm a"));
        }
      };
    }
  }, [dateInput, dirtyFields]);

  return (
    <form
      onSubmit={handleSubmit(
        (values) => {
          axiosUpdate(
            "/news",
            id,
            formatValues({
              ...values,
              date: !typeDate ? editStringDate(values.date) : values.date,
            })
          );
          axiosGet("/news").then((res) => {
            setNews([...res.data.data]);
          });
          forceUpdate();
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
        {errors.headline && <Error>{errors.headline.message}</Error>}
        <Input
          placeholder="Text"
          {...register("text", {
            required: "this field is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        {errors.text && <Error>{errors.text.message}</Error>}

        <Input
          id="date"
          onFocus={() => setTypeDate(true)}
          type={typeDate ? "datetime-local" : "text"}
          {...register("date", {
            required: "this field is required",
          })}
        />
        {errors.date && <Error>{errors.date.message}</Error>}
        <Input
          placeholder="Publication"
          {...register("publication", {
            required: "this field is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        {errors.publication && <Error>{errors.publication.message}</Error>}
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
