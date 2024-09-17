import { InputAdornment, TextField } from "@mui/material";
import { useTheme } from "next-themes";
import React from "react";

const Shipping = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <div className="lg:w-3/4 w-full">
      <div className="space-y-5">
        <div className="flex gap-3 sm:flex-row flex-col">
          <TextField
            required
            id="outlined-required"
            label="Width"
            defaultValue="22cm"
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
            label="Height"
            defaultValue="24cm"
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
            label="Depth"
            defaultValue="15cm"
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
        <TextField
          required
          id="outlined-required"
          label="Weight"
          defaultValue="3kg"
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
          type="number"
          label="Extra Shipping Fee"
          defaultValue="3"
          className="w-full"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span style={{ color: isDarkMode ? "white" : "black" }}>$</span>
              </InputAdornment>
            ),
            style: {
              color: isDarkMode ? "white" : "black",
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

export default Shipping;
