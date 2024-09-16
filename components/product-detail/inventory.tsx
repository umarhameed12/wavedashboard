import { TextField } from "@mui/material";
import React from "react";

const Inventory = () => {
  return (
    <div className="w-3/4">
      <div className="space-y-5">
        <TextField
          required
          id="outlined-required"
          label="SKU"
          defaultValue="A445BV"
          className="w-full"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          defaultValue="3"
          className="w-full"
          size="small"
        />
      </div>
    </div>
  );
};

export default Inventory;
