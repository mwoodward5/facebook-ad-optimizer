import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import OnBoarding from "./pages/onBoarding";
import Connect from "./pages/onBoarding/connect";
import Focus from "./pages/onBoarding/focus";
import Budget from "./pages/onBoarding/budget";
import Dashbboard from "./pages/dashbboard";
import Campaigns from "./pages/dashbboard/campaigns";
import { CampaignProvider } from "./context/campaign";
import Detail from "./pages/dashbboard/campaigns/detail";
import Automation from "./pages/automation";
import AdsCreation from "./pages/adsCreation";
import AiGenerated from "./pages/adsCreation/aiGenerated";
import Report from "./pages/report";
import Settings from "./pages/settings";
import Profile from "./pages/settings/profile";
import Subscription from "./pages/settings/subscription";
import Notification from "./pages/settings/notification";
import Privacy from "./pages/settings/privacy";
import Assistant from "./pages/onBoarding/help";
import Help from "./pages/help";
import MainHelp from "./pages/help/help";
import Contact from "./pages/help/contact";
import Mobile from "./pages/settings/mobile";

function App() {
  return (
    <CampaignProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Dashbboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/:id" element={<Detail />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/ad-creation" element={<AdsCreation />} />
            <Route path="/ad-creation/ai" element={<AiGenerated />} />
            <Route path="/reports-analytics" element={<Report />} />
            <Route path="/settings" element={<Settings />}>
              <Route path="profile" element={<Profile />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="notification" element={<Notification />} />
              <Route path="privacy" element={<Privacy />} />
            </Route>
            <Route path="settings/mobile" element={<Mobile />} />
            <Route path="/help" element={<Help />}>
              <Route path="/help" element={<MainHelp />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/onboarding" element={<OnBoarding />}>
            <Route path="connect" element={<Connect />} />
            <Route path="focus" element={<Focus />} />
            <Route path="help" element={<Assistant />} />
            <Route path="budget" element={<Budget />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CampaignProvider>
  );
}

export default App;
