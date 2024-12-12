function Subscription() {
  return (
    <div className="space-y-8">
      <div className="text-lg">Subscription Details</div>
      <div className="bg-primary rounded-3xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="">Base</div>
            <div className="text-xl font-medium">$25/month.</div>
          </div>
          <div>This is your current plan</div>
        </div>

        <ul className="mt-2 space-y-2 ml-4 list-disc">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <div>Next payment due: March 15, 2024.</div>
      </div>

      <div className="bg-[#1B1B1B] rounded-3xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="">Premium</div>
            <div className="text-xl font-medium">$50/month.</div>
          </div>
          {/* <div>This is your current plan</div> */}
        </div>

        <ul className="mt-2 space-y-2 ml-4 list-disc">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <div className={` flex border-t border-[#252525] py-4`}>
          <button className="border border-white text-center w-full  text-white font-medium px-8 py-2 rounded-full">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
