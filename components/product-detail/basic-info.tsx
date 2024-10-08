"use client";
import {
  Autocomplete,
  Chip,
  createFilterOptions,
  TextField,
} from "@mui/material";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

interface TagOption {
  inputValue?: string;
  label: string;
}

const filter = createFilterOptions<TagOption>();

const BasicInfo = () => {
  // Separate states for each autocomplete
  const [categories, setCategories] = useState<TagOption[]>([]);
  const [tags, setTags] = useState<TagOption[]>([]);

  // Handle change for categories
  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: (string | TagOption)[]
  ) => {
    if (newValue && newValue.length > 0) {
      const lastValue = newValue[newValue.length - 1];
      if (typeof lastValue === "object" && "inputValue" in lastValue) {
        setCategories([
          ...categories,
          { label: lastValue.inputValue as string },
        ]);
      } else {
        setCategories(newValue as TagOption[]);
      }
    } else {
      setCategories([]);
    }
  };

  // Handle change for tags
  const handleTagChange = (
    event: React.SyntheticEvent,
    newValue: (string | TagOption)[]
  ) => {
    if (newValue && newValue.length > 0) {
      const lastValue = newValue[newValue.length - 1];
      if (typeof lastValue === "object" && "inputValue" in lastValue) {
        setTags([...tags, { label: lastValue.inputValue as string }]);
      } else {
        setTags(newValue as TagOption[]);
      }
    } else {
      setTags([]);
    }
  };

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <div className={`lg:w-3/4 w-full`}>
      <div className="space-y-5">
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="A Walk Amongst Friends - Canvas Print"
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
          id="description-input"
          label="Description"
          multiline
          rows={4}
          fullWidth
          defaultValue="Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco."
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
        {/* Autocomplete for Categories */}
        <Autocomplete
          multiple
          id="categories-autocomplete"
          value={categories}
          onChange={handleCategoryChange}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            const isExisting = options.some(
              (option) => inputValue === option.label
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                label: `Add "${inputValue}"`,
              });
            }
            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={categories}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.label;
          }}
          renderOption={(props, option) => <li {...props}>{option.label}</li>}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select multiple categories"
              variant="outlined"
              fullWidth
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
          )}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                label={option.label}
                {...getTagProps({ index })}
                sx={{ backgroundColor: "#e0e0e0", margin: "2px" }}
              />
            ))
          }
        />

        {/* Autocomplete for Tags */}
        <Autocomplete
          multiple
          id="tags-autocomplete"
          value={tags}
          onChange={handleTagChange}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            const isExisting = options.some(
              (option) => inputValue === option.label
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                label: `Add "${inputValue}"`,
              });
            }
            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={tags}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.label;
          }}
          renderOption={(props, option) => <li {...props}>{option.label}</li>}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select multiple tags"
              variant="outlined"
              fullWidth
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
          )}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                label={option.label}
                {...getTagProps({ index })}
                sx={{ backgroundColor: "#e0e0e0", margin: "2px" }}
              />
            ))
          }
        />
      </div>
    </div>
  );
};

export default BasicInfo;
