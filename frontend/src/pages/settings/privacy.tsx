import Switch from "../_component/switch";

function Privacy() {
  return (
    <div className="space-y-6">
      <div className="text-lg">Data Privacy</div>
      <div className="flex items-center pb-6 justify-between border-b border-[#252525]">
        <div>Allow usage data collection for analytics</div>
        <Switch />
      </div>
      <div className="flex items-center pb-6 justify-between border-b border-[#252525]">
        <div>Consent to targeted ads based on preferences</div>
        <Switch />
      </div>

      <div className={` flex gap-4 flex-col md:flex-row md:justify-end`}>
        <button className="border border-primary w-full md:w-auto text-primary font-medium px-8 py-2 rounded-full">
          Download Data Report
        </button>
        <button className="bg-primary w-full md:w-auto text-white font-medium px-8 py-2 rounded-full">
          Request Data Deletion
        </button>
      </div>
    </div>
  );
}

export default Privacy;
