import "./App.css";
import logo from "./assets/logo.png";
import PlaygroundPreview from "./components/PlaygroundPreview";
import {
  Layout,
  Footer,
  Header,
  Main,
  Navbar,
  Logo,
  DropdownMenu,
} from "@emadunan/react-ui";
import { IoMdArrowDropdown } from "react-icons/io";

function App() {
  return (
    <Layout>
      <Header
        title="Property Rents"
        logo={
          <Logo>
            <img src={logo} alt="App logo" />
          </Logo>
        }
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
        nav={
          <Navbar>
            <a href="/">Home</a>
            <a href="/create">Create</a>
            <a href="/inquire" className="active">
              Inquire
            </a>
          </Navbar>
        }
      />
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
