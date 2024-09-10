import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";
import React from "react";

const FinanceBudget = () => {
  const [progress, setProgress] = React.useState(10);
  
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="bg-[#FFCDD2] dark:bg-red dark:text-white flex h-[3.6rem] items-center justify-center rounded text-[#C62828] w-[3.6rem] text-opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-5 h-5
            "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </div>
        <div className="w-full">
          <p className="text-[#5F6368] text-sm">Expenses</p>
          <p className="font-medium text-lg">$11,763.34</p>
          <LinearProgressWithLabel value={progress} />
        </div>
      </div>
    </div>
  );
};

export default FinanceBudget;

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ED6C02", // Change this to your desired color
            },
            backgroundColor: "#F8C79E", // Customize the track background
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
