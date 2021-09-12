import { useState } from "react";
import Form from "../Shared/Form";
import Input from "../Shared/Input";
import Button from "../Shared/Button";

const subscribeUser = ({ name, setName, submitName }) => {
  return (
    <Form onSubmit={submitName}>
      <Input
        name="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <Button type="submit" fullWidth>
        Submit
      </Button>
    </Form>
  );
};

export default subscribeUser;
