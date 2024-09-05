"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import imageIcon from "@/assets/icons/image.svg";
import { useDropzone } from "react-dropzone";

export default function UploadImage() {
  // const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  // const handleDrop = () => {
  //   setFiles(files);
  // };
  return (
    <div
      {...getRootProps({
        className:
          "bg-blue-50 flex flex-col justify-center items-center gap-8 p-8 cursor-pointer border-red-500 border-dashed border-4 rounded-lg dark:bg-button ",
      })}
    >
      <Image src={imageIcon} alt="Upload image" />
      <input {...getInputProps()} />

      {isDragActive ? (
        <p className="capitalize">Release to drop the files</p>
      ) : (
        <p className="capitalize">
          drop photo here or
          <span className="text-blue-600 ml-3 border-blue-600 border-b-2">
            Click to upload
          </span>
        </p>
      )}
    </div>
  );
}
