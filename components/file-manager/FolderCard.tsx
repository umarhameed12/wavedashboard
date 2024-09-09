"use client"
import React from 'react'
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';



const FolderCard = () => {
    interface Folder {
        name: string;
        files: number;
      }
      
      const folderData: Folder[] = [
        { name: 'Personal', files: 57 },
        { name: 'Photos', files: 907 },
        { name: 'Work', files: 24 }
      ];
      
  return (
    <div className=" container p-8">
    <Card
      sx={{
        width: '100%',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        Folders
      </Typography>

      <div style={{ display: 'flex', gap: '20px' }}>
        {folderData.map((folder, index) => (
          <Card
            key={index}
            sx={{
              width: '180px',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              position: 'relative',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardContent>
              <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
                <IconButton size="small">
                  <InfoIcon />
                </IconButton>
              </div>
              <Typography variant="h6" align="center">
                {folder.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {folder.files} files
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
    </div>
  )
}

export default FolderCard