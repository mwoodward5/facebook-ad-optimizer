import Switch from "../_component/switch";
import Checkbox from "../onBoarding/_component/checkbox";

function Notification() {
  return (
    <div className="space-y-6">
      <div className="text-lg">Notification Settings</div>
      <div className="flex items-center pb-6 justify-between border-b border-[#252525]">
        <div>Receive Email Notifications</div>
        <Switch />
      </div>
      <div className="flex items-center pb-6 justify-between border-b border-[#252525]">
        <div>Enable SMS Alerts</div>
        <Switch />
      </div>
      <div className="flex items-center pb-6 justify-between border-b border-[#252525]">
        <div>Push Notifications for Important Updates</div>
        <Switch />
      </div>

      {["Promotional Offers", "System Updates", "Usage Alert"].map((value) => (
        <Checkbox label={value} checked={true} onChange={() => {}} />
      ))}
    </div>
  );
}

export default Notification;
