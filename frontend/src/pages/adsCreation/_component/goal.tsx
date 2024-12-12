import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxDragHandleDots2 } from "react-icons/rx";
interface Props {
  next: () => void;
}
function Goal({ next }: Props) {
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 44]);
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "Male",
    "Title 2",
  ]);
  const [gender, setGender] = useState<string | null>(null);

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleTagAdd = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div>
      {" "}
      <div className="mt-12">
        <label className="block mb-2 text-text">
          What is your campaign goal
        </label>
        <div className="relative">
          <select
            className="bg-[#191817] border border-[#252525] rounded-lg p-3 w-full focus:outline-none"
            defaultValue="CTR"
          >
            <option>Engagement</option>
            <option>Click</option>
          </select>
          <span className="absolute top-1/2 -translate-y-1/2 right-8 text-green-500">
            Spot on
          </span>
        </div>
      </div>
      {/* Age Range */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-text">Age range</label>
          <span className="text-red-500">Needs optimization</span>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="number"
            className="bg-[#191919] text-white p-2 w-16 rounded-lg"
            value={ageRange[0]}
            onChange={(e) => setAgeRange([+e.target.value, ageRange[1]])}
          />
          <div className="relative w-full mx-4">
            <input
              type="range"
              min="18"
              max="100"
              value={ageRange[0]}
              className="absolute w-full appearance-none bg-transparent"
              onChange={(e) => setAgeRange([+e.target.value, ageRange[1]])}
            />
            <input
              type="range"
              min="18"
              max="100"
              value={ageRange[1]}
              className="absolute w-full appearance-none bg-transparent"
              onChange={(e) => setAgeRange([ageRange[0], +e.target.value])}
            />
          </div>
          <input
            type="number"
            className="bg-[#191919] text-white p-2 w-16 rounded-lg"
            value={ageRange[1]}
            onChange={(e) => setAgeRange([ageRange[0], +e.target.value])}
          />
        </div>
      </div>
      {/* Audience Tags */}
      <div className="mt-6">
        <label className="block mb-2 text-text">Audience</label>
        <div className="flex justify-between border border-[#252525] p-2 rounded">
          <div className="flex flex-wrap items-center gap-2">
            {selectedTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center bg-[#252525] border border-[#543924] text-white px-3 py-1 rounded-full"
              >
                <RxDragHandleDots2 />
                <span>{tag}</span>
                <IoMdClose
                  onClick={() => handleTagRemove(tag)}
                  className="ml-2 cursor-pointer"
                />
              </div>
            ))}
          </div>
          <span className="text-yellow-400">Almost there!</span>
        </div>
      </div>
      {/* Gender Selection */}
      <div className="mt-6 flex items-center">
        <label className="block mb-2 w-20">Gender:</label>
        <div className="flex gap-4 flex-1">
          {["Male", "Female"].map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                gender === g ? "bg-primary text-white" : "bg-[#252525]"
              }`}
            >
              <RxDragHandleDots2 />
              {g}
            </button>
          ))}
        </div>
      </div>
      {/* Type Selection */}
      <div className="mt-6 flex items-center">
        <label className="block mb-2 w-20">Type 1:</label>
        <div className="flex gap-4 flex-wrap flex-1">
          {["Title 1", "Title 2", "Title 3", "Title 4"].map((type) => (
            <button
              key={type}
              onClick={() => handleTagAdd(type)}
              className={`flex items-center gap-2  px-4 py-2 rounded-lg ${
                selectedTags.includes(type)
                  ? "bg-primary text-white"
                  : "bg-[#252525]"
              }`}
            >
              <RxDragHandleDots2 />
              {type}
            </button>
          ))}
        </div>
      </div>
      {/* Type Selection */}
      <div className="mt-6 flex items-center">
        <label className="block mb-2 w-20">Type 2:</label>
        <div className="flex gap-4 flex-wrap flex-1">
          {["Title 1", "Title 2", "Title 3", "Title 4"].map((type) => (
            <button
              key={type}
              onClick={() => handleTagAdd(type)}
              className={`flex items-center gap-2  px-4 py-2 rounded-lg ${
                selectedTags.includes(type)
                  ? "bg-primary text-white"
                  : "bg-[#252525]"
              }`}
            >
              <RxDragHandleDots2 />
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className={`mt-8 flex md:justify-end`}>
        <button
          onClick={next}
          className="bg-primary w-full md:w-auto text-white font-medium px-8 py-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Goal;
