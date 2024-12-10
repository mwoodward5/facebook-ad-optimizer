import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import OnBoarding from "./pages/onBoarding";
import Connect from "./pages/onBoarding/connect";
import Focus from "./pages/onBoarding/focus";
import Help from "./pages/onBoarding/help";
import Budget from "./pages/onBoarding/budget";
import Dashbboard from "./pages/dashbboard";
import Campaigns from "./pages/dashbboard/campaigns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Dashbboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/onboarding" element={<OnBoarding />}>
          <Route path="connect" element={<Connect />} />
          <Route path="focus" element={<Focus />} />
          <Route path="help" element={<Help />} />
          <Route path="budget" element={<Budget />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
