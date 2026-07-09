import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import {
  Layout,
  Footer,
  Header,
  Main,
  Navbar,
  Logo,
  DropdownMenu,
  Button,
} from "@emadunan/react-ui";
import { IoMdArrowDropdown } from "react-icons/io";

function App() {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
        <section className="playground-shell" aria-label="Component playground">
          <div className="playground-toolbar">
            <div>
              <p className="playground-eyebrow">React UI Playground</p>
              <h2>Component Preview</h2>
            </div>
            <div className="playground-meta" aria-label="Preview controls">
              <div className="segmented-control viewport-control" aria-label="Viewport size">
                <button
                  type="button"
                  className={viewport === "desktop" ? "active" : undefined}
                  onClick={() => setViewport("desktop")}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  className={viewport === "tablet" ? "active" : undefined}
                  onClick={() => setViewport("tablet")}
                >
                  Tablet
                </button>
                <button
                  type="button"
                  className={viewport === "mobile" ? "active" : undefined}
                  onClick={() => setViewport("mobile")}
                >
                  Mobile
                </button>
              </div>
              <div className="segmented-control theme-control" aria-label="Theme">
                <button
                  type="button"
                  className={theme === "light" ? "active" : undefined}
                  onClick={() => setTheme("light")}
                >
                  Light
                </button>
                <button
                  type="button"
                  className={theme === "dark" ? "active" : undefined}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </button>
              </div>
              <button
                type="button"
                className={isInteractive ? "interaction-toggle active" : "interaction-toggle"}
                aria-pressed={isInteractive}
                onClick={() => setIsInteractive((value) => !value)}
              >
                {isInteractive ? "Interactive" : "Static"}
              </button>
            </div>
          </div>

          <div className="preview-frame">
            <div className="preview-frame__header" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="preview-canvas" data-viewport={viewport}>
              <div
                className={isInteractive ? "component-stage" : "component-stage is-static"}
                inert={isInteractive ? undefined : true}
              >
                <Button>Component under test</Button>
              </div>
            </div>
          </div>
        </section>
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
