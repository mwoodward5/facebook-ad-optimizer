import { Outlet } from "react-router";
import Header from "./_component/header";
import Hint from "./_component/hint";
import DrawerModal from "./_component/drawerModal";
import CampaignModal from "./_component/campaignModal";
import { useCampaign } from "../context/campaign";

function Main() {
  const { showModal, setShowModal } = useCampaign();
  return (
    <div className="bg-background text-white min-h-screen text-sm">
      <Header />
      <Outlet />
      <Hint />
      <DrawerModal
        isOpen={!!showModal}
        size="w-full md:w-2/5"
        onClose={() => setShowModal(null)}
      >
        <CampaignModal></CampaignModal>
      </DrawerModal>
    </div>
  );
}

export default Main;
