"use client";
import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FileCards from "./FileCards";

const FolderCard = () => {
  interface Folder {
    name: string;
    files: number;
  }

  const folderData: Folder[] = [
    { name: "Personal", files: 57 },
    { name: "Photos", files: 907 },
    { name: "Work", files: 24 },
  ];

  return (
    <div>
      <Card
        sx={{
          width: "100%",
          padding: "20px",
          backgroundColor: "#FAF9F9",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          paddingX: "30px",
          maxWidth: "100%",
        }}
        className="dark:bg-dark"
      >
        <Card
          sx={{
            width: "100%",
            padding: "20px",
            backgroundColor: "#efefef",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
            marginBottom: "30px",
          }}
          className="dark:bg-dark200 dark:border-gray-800 "
        >
          <Typography
            className="dark:text-white"
            variant="h6"
            sx={{ marginBottom: "20px", font: "extrabold" }}
          >
            Folders
          </Typography>

          <div className="flex gap-4 flex-wrap">
            {folderData.map((folder, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#FAF9F9",
                  alignItems: "center",
                  borderRadius: "12px",
                  position: "relative",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  padding: "1.6rem",
                }}
                className="dark:bg-dark sm:w-[160px] sm:h-[160px] w-full"
              >
                <CardContent>
                  <div
                    style={{ position: "absolute", top: "8px", right: "8px" }}
                  >
                    <IconButton className="dark:text-white" size="small">
                      <InfoIcon />
                    </IconButton>
                  </div>
                  <div className="flex flex-auto w-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-[56px] w-[56px] text-[#00000042] dark:text-[#FFFFFF4D]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                  </div>
                  <Typography
                    className="dark:text-white"
                    variant="h6"
                    align="center"
                  >
                    {folder.name}
                  </Typography>
                  <Typography
                    className="dark:text-white"
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    {folder.files} files
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>

        {/*  */}

        <div className="">
          <FileCards />
        </div>
      </Card>
    </div>
  );
};

export default FolderCard;
