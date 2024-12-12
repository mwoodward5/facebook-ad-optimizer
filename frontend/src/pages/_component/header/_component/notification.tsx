interface Props {
  isOpen: boolean;
  onClose?: () => void;
}
function Notification({ isOpen, onClose }: Props) {
  return (
    isOpen && (
      <>
        <div className="absolute flex flex-col gap-3  top-10 right-0 z-20 bg-background w-96 p-4 rounded-lg border border-[#252525]">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-b pb-4 border-[#252525]"
            >
              <div
                className={`h-3 w-3 rounded-full ${
                  index % 2 === 0 ? "bg-red-500" : "bg-green-500"
                }`}
              />
              <div className="">
                <div className="">Campaign Budget Updated Successfully!</div>
                <div className="">Monday 4:32 PM</div>
              </div>
              <div className="text-primary font-medium">2h ago</div>
            </div>
          ))}
        </div>
        <div onClick={onClose} className="fixed inset-0 " />
      </>
    )
  );
}

export default Notification;
