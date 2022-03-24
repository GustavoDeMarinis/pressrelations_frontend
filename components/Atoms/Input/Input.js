import { Input } from "@chakra-ui/react";
import React from "react";

const InputField = ({ name, placeholder }) => {
  return <Input name={name} placeholder={placeholder} marginBottom={4} />;
};

export default InputField;
