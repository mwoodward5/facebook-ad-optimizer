import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import IMAGES from "../../../../assets/images";
interface Props {
  previous: () => void;
  next: () => void;
}

const Design: React.FC<Props> = ({ next, previous }) => {
  const [_, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0]);
    }
  };

  return (
    <div className=" mt-12">
      {/* Header */}
      <h1 className="text-text mb-8">Upload Image/Video</h1>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1 p-6 rounded-lg border-2 h-96 border-dashed border-[#252525] flex flex-col items-center justify-center w-full md:w-auto">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <IoCloudUploadOutline />
            <p className="text-gray-400">
              Drag and drop file, or click to upload
            </p>
            <p className="text-sm text-gray-500 mt-1">PNG, JPG, MP4</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="flex-1  md:px-6 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Preview:</h2>
          <div className="border border-[#252525] p-3 rounded-lg w-full max-w-md text-white">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
              <div>
                <h2 className="font-semibold text-sm">Page_Name</h2>
                <p className="text-xs text-text">Sponsored ·</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400 ml-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 10l6 6 6-6"
                />
              </svg>
            </div>

            {/* Ad Text */}
            <p className="text-sm mb-3">
              This is your ad text
              <br />
              <span className="text-blue-500">
                #tagOne #tagTwo #tagThree #tagOne #tagThree #tagThree
              </span>
              <br />
              <div className="text-blue-500 hover:underline">
                https://enter-url
              </div>
            </p>

            {/* Image Section */}
            <div className="">
              <img
                src={IMAGES.background1}
                alt="Ad Preview"
                className="w-full rounded-lg"
              />
            </div>

            {/* Footer Section */}
            <div className="bg-white text-black p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  websitename.com
                </p>
                <p className="font-semibold text-sm">Headline copy here</p>
              </div>
              <button className="bg-white text-black border border-black text-sm font-semibold py-2 px-4 rounded-md">
                Learn More
              </button>
            </div>

            {/* Social Stats */}
            <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-[10px]">
                  ♥
                </div>
                <span>541</span>
              </div>
              <div>
                <span>26 Comments</span> · <span>87 Shares</span>
              </div>
            </div>

            {/* Interaction Buttons */}
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <button className="flex items-center gap-1 hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 13h10m-5-5v10"
                  />
                </svg>
                Like
              </button>
              <button className="flex items-center gap-1 hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 13h10m-5-5v10"
                  />
                </svg>
                Comment
              </button>
              <button className="flex items-center gap-1 hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 13h10m-5-5v10"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-8 flex gap-4 justify-between`}>
        <button
          onClick={previous}
          className="bg-transparent border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="bg-primary text-white font-medium px-8 py-2 rounded-full flex-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Design;
