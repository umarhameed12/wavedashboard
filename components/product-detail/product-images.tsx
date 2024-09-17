import React, { useState, ChangeEvent, useRef } from "react";
import { Upload } from "lucide-react";

interface ImageInfo {
  id: string;
  url: string;
}

interface ProductImagesProps {
  onImageSelect: (image: ImageInfo) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({ onImageSelect }) => {
  const [images, setImages] = useState<ImageInfo[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: ImageInfo[] = Array.from(files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="">
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="hidden"
      />
      <div className="grid grid-cols-1 xss:grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 gap-4 w-full xss:w-fit">
        <button
          onClick={triggerFileInput}
          className="flex items-center justify-center w-[9rem] h-[9rem] py-2 px-4 dark:bg-black bg-[#ECECEC] shadow-md rounded-xl hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-[#000000] dark:text-white dark:opacity-[100%] opacity-[0.54]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>
        </button>
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-md overflow-hidden w-[9rem] h-[9rem] "
          >
            <img
              src={image.url}
              alt="Uploaded product"
              className="object-cover h-full w-full"
              onClick={() => onImageSelect(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
