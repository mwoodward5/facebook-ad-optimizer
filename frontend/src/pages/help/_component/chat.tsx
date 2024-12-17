import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiChatAiLine } from "react-icons/ri";
import IMAGES from "../../../assets/images";

function Chat() {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 w-full flex justify-end">
      <div
        onClick={() => setShow(!show)}
        className=" bg-primary rounded-full w-16 h-16 flex items-center justify-center "
      >
        {!show ? (
          <RiChatAiLine className="text-xl" />
        ) : (
          <IoIosArrowDown className="text-xl" />
        )}
      </div>
      {show && (
        <div className=" absolute bottom-20 right-0 flex flex-col w-full max-w-sm  justify-center rounded-3xl bg-background border border-primary border-opacity-35 overflow-hidden">
          {/* Logo */}
          <div className="bg-gradient-to-b from-orange-900 to-background p-6">
            <div className="w-full max-w-md flex justify-start mb-6">
              <img src={IMAGES.logo} alt="Logo" className="h-12" />
            </div>

            {/* Header */}
            <div className=" text-white space-y-2 mb-4">
              <h1 className="text-xl whitespace-nowrap font-bold">
                How Can We Help You Today?
              </h1>
              <p className="text-sm">
                Ask us anything, or share your feedback.
              </p>
            </div>
          </div>
          {/* Input Section */}
          <div className="flex items-center space-x-2 px-6">
            <div className="bg-orange-500 bg-opacity-20 rounded-full p-3">
              {/* Replace this icon with an actual SVG */}{" "}
              <RiChatAiLine className="text-xl" />
            </div>
            <input
              type="text"
              placeholder="Hi there, what brings you here today?"
              className="bg-[#252525] flex-1 outline-none rounded-full h-10 p-2"
            />
          </div>

          {/* Preset Buttons */}
          <div className="w-full flex flex-wrap justify-end gap-4 mt-40 p-6">
            {[
              "Track my order",
              "Update account details.",
              "Preset Question 3",
              "Preset Question 4",
            ].map((text, index) => (
              <button
                key={index}
                className="bg-[#251B14] text-white py-2 px-4 rounded-full hover:bg-orange-500 hover:text-black transition whitespace-nowrap"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
