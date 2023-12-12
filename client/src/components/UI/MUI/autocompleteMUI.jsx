import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// const options = ['Value 1', 'Value 2'];

// Creating the manageable states
export default function ManageableStates({
  options,
  inputValue,
  setInputValue,
  ...props
}) {
  return (
    <div>
      <Autocomplete
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue, reason: "clear") => {
        //   setInputValue(newInputValue);
        // }}
        id="manageable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label="Manage State" />}
        {...props}
      />
    </div>
  );
}
