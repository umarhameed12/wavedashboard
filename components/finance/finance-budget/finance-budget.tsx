import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";
import React from "react";

const FinanceBudget = () => {
  const [progress, setProgress] = React.useState(10);
  const [savingProgress, setSavingProgress] = React.useState(20);
  const [billProgress, setBillProgress] = React.useState(30);

  return (
    <div>
      <div className="flex items-center space-x-8 pb-5">
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

      <div className="flex items-center space-x-8 pb-5">
        <div className=" dark:bg-indigo-600 bg-indigo-100 dark:text-indigo-50 flex h-[3.6rem] items-center justify-center rounded text-indigo-800 w-[3.6rem] text-opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6  w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
        </div>
        <div className="w-full">
          <p className="text-[#5F6368] text-sm">Savings</p>
          <p className="font-medium text-lg">$10,974.12</p>
          <LinearProgressWithLabel2 value={savingProgress} />
        </div>
      </div>

      <div className="flex items-center space-x-8 ">
        <div className="bg-teal-100 dark:bg-teal-600 dark:text-teal-100 flex h-[3.6rem] items-center justify-center rounded text-teal-800 w-[3.6rem] text-opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
        </div>
        <div className="w-full">
          <p className="text-[#5F6368] text-sm">Bills</p>
          <p className="font-medium text-lg">$1,789.22</p>
          <LinearProgressWithLabel3 value={billProgress} />
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

function LinearProgressWithLabel2(
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
              backgroundColor: "#0A74DA", // Change this to your desired color
            },
            backgroundColor: "##A1CAF0", // Customize the track background
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
function LinearProgressWithLabel3(
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
              backgroundColor: "#00A4EF", // Change this to your desired color
            },
            backgroundColor: "#9EDCF8", // Customize the track background
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
