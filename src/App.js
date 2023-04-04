import DashboardHeader from "./Components/DashboardHeader";
import Feed from "./Components/Feed";
import SideBar from "./Components/SideBar";
import { React, useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-screen">
      <DashboardHeader open={open} setOpen={setOpen} />
      <div className="flex h-full">
        <SideBar open={open} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
