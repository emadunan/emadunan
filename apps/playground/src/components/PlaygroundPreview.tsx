import { useEffect, useState } from "react";
import ComponentUnderTest from "./ComponentUnderTest";

type Viewport = "desktop" | "tablet" | "mobile";
type Theme = "light" | "dark";

function PlaygroundPreview() {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [theme, setTheme] = useState<Theme>("light");
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
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
            <ComponentUnderTest />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaygroundPreview;
