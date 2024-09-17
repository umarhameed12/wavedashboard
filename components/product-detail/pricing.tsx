import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "next-themes"; // For managing dark mode dynamically

const Pricing = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <div
      className={`lg:w-3/4 w-full`}
    >
      <div className="space-y-5">
        {/* Tax Excluded Price */}
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Tax Excluded Price"
          defaultValue="9.309"
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
        {/* Tax Included Price */}
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Tax Included Price"
          defaultValue="10.24"
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
        {/* Tax Rate */}
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Tax Rate"
          defaultValue="10"
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
        {/* Compared Price */}
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Compared Price"
          defaultValue="19.9"
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

export default Pricing;
