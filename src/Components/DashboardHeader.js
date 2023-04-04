import { HiMenu } from "react-icons/hi";

function DashboardHeader({ open, setOpen }) {
  const HeaderMenus = [
    { title: "Dashboard" },
    { title: "Team" },
    { title: "Projects" },
  ];

  return (
    <nav className="flex w-full items-center justify-between py-1 bg-[#251749] text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="w-full container-fluid flex flex-row items-center justify-between px-6">
        <button onClick={() => setOpen(!open)}>
          <HiMenu className="text-gray-200 w-12 h-12 py-1 px-1 " />
        </button>
        <div className="flex flex-row items-center justify-between">
          <ul className="flex pl-0 list-style-none mr-auto">
            {HeaderMenus.map((menu, index) => (
              <li key={index} className="nav-item p-2">
                <button
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  {menu.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DashboardHeader;
