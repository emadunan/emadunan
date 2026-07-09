import { FiRepeat } from "react-icons/fi";
import "./App.css";
import logo from "./assets/logo.png";
import PlaygroundPreview from "./components/PlaygroundPreview";
import {
  Layout,
  Footer,
  Main,
  DropdownMenu,
  AppHeader,
} from "@emadunan/react-ui";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiHome } from "react-icons/bi";
import { MdOutlinePointOfSale } from "react-icons/md";

function App() {
  const navItems = [
    { to: "/", label: "Home", icon: BiHome },
    { to: "/create", label: "Create", icon: MdOutlinePointOfSale },
    { to: "/inquire", label: "Inquire", icon: FiRepeat },
  ];
  return (
    <Layout>
      <AppHeader
        logoSrc={logo}
        logoAlt="App logo"
        actions={
          <DropdownMenu
            trigger={
              <div
                style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
              >
                <IoMdArrowDropdown size={18} /> Emad Younan
              </div>
            }
          >
            <DropdownMenu.Item onClick={() => console.log("Profile")}>
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item onClick={() => console.log("Settings")}>
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onClick={() => console.log("Logout")}>
              Logout
            </DropdownMenu.Item>
          </DropdownMenu>
        }
      >
        {navItems.map(({ to, label, icon: Icon }) => (
          <a key={to} href={to}>
            <Icon size={17} aria-hidden />
            <span>{label}</span>
          </a>
        ))}
      </AppHeader>
      <Main>
        <PlaygroundPreview />
      </Main>
      <Footer>
        <p>General Administration of Information Technology.</p>
        <p>© 2025 Property Rents. All rights reserved.</p>
        <p>Contact: emadunan@moi.gov.eg</p>
      </Footer>
    </Layout>
  );
}

export default App;
