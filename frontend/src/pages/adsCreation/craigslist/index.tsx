import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import IMAGES from "../../../assets/images";
import Modal from "../../_component/modal";
import SchedulePost from "./_component/schedulePost";

interface AdRow {
  id: number;
  title: string;
  description: string;
  price: string;
  image: File | null;
}

function Craigslist() {
  const [show, setShow] = useState(false);

  const [ads, setAds] = useState<AdRow[]>([
    { id: 1, title: "", description: "", price: "", image: null },
    { id: 2, title: "", description: "", price: "", image: null },
    { id: 3, title: "", description: "", price: "", image: null },
    { id: 4, title: "", description: "", price: "", image: null },
    { id: 5, title: "", description: "", price: "", image: null },
  ]);

  // Handle Input Changes
  const handleChange = (id: number, field: string, value: any) => {
    const updatedAds = ads.map((ad) =>
      ad.id === id ? { ...ad, [field]: value } : ad
    );
    setAds(updatedAds);
  };

  const addNewRow = () => {
    const newRow: AdRow = {
      id: ads.length + 1,
      title: "",
      description: "",
      price: "",
      image: null,
    };
    setAds([...ads, newRow]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-medium">Upload your inventory</h1>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <button
            onClick={() => setShow(true)}
            className="flex items-center justify-center gap-2 border border-primary bg-transparent text-sm text-primary px-4 py-2 rounded-full "
          >
            <IoMdTime className="text-lg" />
            Schedule Post
          </button>
          <button className="flex items-center justify-center gap-2 border border-primary text-sm text-white px-4 py-2 rounded-full bg-primary">
            <FaPlus />
            Post Ad
          </button>
        </div>
      </div>
      <div className="rounded-3xl border border-[#252525] overflow-hidden ">
        <table className="w-full border-collapse">
          <thead className="bg-[#1B1B1B]">
            <tr className="text-center">
              <th className="py-4 px-4 border border-collapse border-[#252525]">
                Ad Title
              </th>
              <th className="py-4 px-4 border border-collapse border-[#252525]">
                Description
              </th>
              <th className="py-4 px-4 border border-collapse border-[#252525]">
                Price
              </th>
              <th className="py-4 px-4 border border-collapse border-[#252525]">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad) => (
              <tr key={ad.id} className="border border-[#252525]">
                {/* Checkbox */}
                <td className="py-3 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent p-2 rounded border border-[#252525] "
                    placeholder="Enter title"
                    value={ad.title}
                    onChange={(e) =>
                      handleChange(ad.id, "title", e.target.value)
                    }
                  />
                </td>

                {/* Description */}
                <td className="py-3 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent p-2 rounded border border-[#252525] "
                    placeholder="Enter description"
                    value={ad.description}
                    onChange={(e) =>
                      handleChange(ad.id, "description", e.target.value)
                    }
                  />
                </td>

                {/* Price */}
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-1">$</span>
                    <input
                      type="text"
                      className="w-full bg-transparent p-2 rounded border border-[#252525] "
                      placeholder="0.00"
                      value={ad.price}
                      onChange={(e) =>
                        handleChange(ad.id, "price", e.target.value)
                      }
                    />
                  </div>
                </td>

                {/* Image Upload */}
                <td className="py-2 px-4">
                  {ad.image ? (
                    <img
                      src={URL.createObjectURL(ad.image)}
                      alt="Uploaded"
                      className="w-16 h-16 rounded object-cover"
                    />
                  ) : (
                    <label className="bg-[#252525] p-2 rounded-full cursor-pointer text-center block text-sm">
                      Upload File
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) =>
                          handleChange(
                            ad.id,
                            "image",
                            e.target.files ? e.target.files[0] : null
                          )
                        }
                      />
                    </label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={addNewRow}
        className="mt-4 text-primary flex items-center gap-4 "
      >
        Add Inventory Row
        <FaPlus />
      </button>
      <div className=" md:w-3/5 mt-8">
        <div className="mb-6">Your adsPreview:</div>
        <div className="space-y-5 bg-[#111010] rounded-xl p-4">
          <div className="text-xl font-medium">Ad Post Title</div>
          <img className="rounded" src={IMAGES.background1} />
          <div className="flex gap-2">
            {[1, 2, 3].map((_, index) => (
              <img
                key={index}
                className="rounded w-1/4"
                src={IMAGES.background1}
              />
            ))}
          </div>
          <div className="text-sm opacity-50 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis felis sed feugiat consectetur. Nam blandit tempor
            sollicitudin. Aliquam pretium sapien eget tincidunt sodales.
            Suspendisse potenti. Integer justo elit, lacinia sed sollicitudin
            ut, egestas quis arcu. Suspendisse in velit lobortis, molestie orci
            at, gravida sem. In fringilla dolor elit. Donec a vulputate nunc.
            Nulla facilisi. Sed ultrices vestibulum libero, a dapibus enim.
          </div>
        </div>
      </div>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <SchedulePost />
      </Modal>
    </div>
  );
}

export default Craigslist;
