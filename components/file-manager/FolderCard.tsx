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
    <div className=" sm:p-8">
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
             marginBottom: '30px'
          }}
          className="dark:bg-dark200 dark:border-gray-800 "
        >
          <Typography className="dark:text-white" variant="h6" sx={{ marginBottom: "20px", font:"extrabold" }}>
            Folders
          </Typography>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {folderData.map((folder, index) => (
              <Card
                key={index}
                sx={{
                  width: "180px",
                  height: "140px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#FAF9F9",
                  alignItems: "center",
                  borderRadius: "8px",
                  position: "relative",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",    
                }}
               className="dark:bg-dark"
              >
                <CardContent>
                  <div
                    style={{ position: "absolute", top: "8px", right: "8px" }}
                  >
                    <IconButton className="dark:text-white" size="small">
                      <InfoIcon />
                    </IconButton>
                  </div>
                  <Typography className="dark:text-white" variant="h6" align="center">
                    {folder.name}
                  </Typography>
                  <Typography className="dark:text-white"
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


       <div
    
          className=""
        >
          <FileCards />
        </div>
      </Card>
    </div>
  );
};

export default FolderCard;
