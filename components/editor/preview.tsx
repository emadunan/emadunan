import { Box } from "@mui/material";
import { FC, useEffect, useRef } from "react";

interface PreviewProps {
  code: string;
  err: string;
}

const html = `
    <html>
      <head>
        <style>html { background-color: white; }</style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = (err) => {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          };

          window.addEventListener('error', () => {
            event.preventDefault();
            handleError(event.error);
          });

          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: FC<PreviewProps> = ({ code, err }) => {
  const iframeRef = useRef<any>();

  useEffect(() => {
    iframeRef.current.srcdoc = html;
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <Box
      component="div"
      className="relative h-full flex-grow-1 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:content-['']"
    >
      <Box
        component="iframe"
        className="h-full w-full"
        title="preview"
        sandbox="allow-scripts"
        srcDoc={html}
        ref={iframeRef}
      />
      {err && (
        <Box component="div" className="absolute top-2 left-2 text-red-900">
          <Box component="span">Compilation Error:</Box>
          {err}
        </Box>
      )}
    </Box>
  );
};

export default Preview;
