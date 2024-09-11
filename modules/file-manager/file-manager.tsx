import FileHeader from '@/components/file-manager/file-header'
import FileCards from '@/components/file-manager/FileCards'
import FolderCard from '@/components/file-manager/FolderCard'
import React from 'react'

const FileManager = () => {
  return (
    <div className='container max-w-[1120px] m-auto sm:px-10 px-5'>
      <FileHeader/> 
      <FolderCard/> 
      {/* <FileCards/> */}
    </div>
  )
}

export default FileManager