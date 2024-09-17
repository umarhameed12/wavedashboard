import { TextField } from "@mui/material";
import { useTheme } from "next-themes";
import React from "react";

const Inventory = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";
  return (
    <div className="lg:w-3/4 w-full">
      <div className="space-y-5">
        <TextField
          required
          id="outlined-required"
          label="SKU"
          defaultValue="A445BV"
          className="w-full"
          size="small"
          InputProps={{
            style: {
              color: isDarkMode ? "white" : "black",
              borderColor: isDarkMode ? "gray" : "black",
            },
          }}
          InputLabelProps={{
            style: {
              color: isDarkMode ? "gray" : "black",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: isDarkMode ? "gray" : "black",
              },
              "&:hover fieldset": {
                borderColor: isDarkMode ? "white" : "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: isDarkMode ? "white" : "black",
              },
            },
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          defaultValue="3"
          className="w-full"
          size="small"
          InputProps={{
            style: {
              color: isDarkMode ? "white" : "black",
              borderColor: isDarkMode ? "gray" : "black",
            },
          }}
          InputLabelProps={{
            style: {
              color: isDarkMode ? "gray" : "black",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: isDarkMode ? "gray" : "black",
              },
              "&:hover fieldset": {
                borderColor: isDarkMode ? "white" : "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: isDarkMode ? "white" : "black",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Inventory;
