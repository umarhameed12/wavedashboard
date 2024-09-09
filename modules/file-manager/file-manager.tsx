import FileHeader from '@/components/file-manager/file-header'
import FolderCard from '@/components/file-manager/FolderCard'
import React from 'react'

const FileManager = () => {
  return (
    <div>
      <FileHeader/> 
      <FolderCard/> 
    </div>
  )
}

export default FileManager