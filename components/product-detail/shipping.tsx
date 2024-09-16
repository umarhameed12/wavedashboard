import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const Shipping = () => {
  return (
    <div className="w-3/4">
      <div className="space-y-5">
        <div className="flex gap-3">
          <TextField
            required
            id="outlined-required"
            label="Width"
            defaultValue="22cm"
            className="w-full"
            size="small"
          />
          <TextField
            required
            id="outlined-required"
            label="Height"
            defaultValue="24cm"
            className="w-full"
            size="small"
          />
          <TextField
            required
            id="outlined-required"
            label="Depth"
            defaultValue="15cm"
            className="w-full"
            size="small"
          />
        </div>
        <TextField
          required
          id="outlined-required"
          label="Weight"
          defaultValue="3kg"
          className="w-full"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Extra Shipping Fee"
          defaultValue="3"
          className="w-full"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  );
};

export default Shipping;
