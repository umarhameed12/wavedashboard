import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const Pricing = () => {
  return (
    <div className="w-3/4">
      <div className="space-y-5">
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Tax Excluded Price"
          defaultValue="9.309"
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
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Tax Included Price"
          defaultValue="10.24"
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
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Tax Rate"
          defaultValue="10"
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
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Compared Price"
          defaultValue="19.9"
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

export default Pricing;
