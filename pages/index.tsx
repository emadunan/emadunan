import { FC, useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import * as esbuild from "esbuild-wasm";

import CodeEditor from "../components/editor/code-editor";
import { unpkgPathPlugin } from "../plugins/unpkg-path-plugin";
import { fetchPlugin } from "../plugins/fetch-plugin";

const Home: FC = () => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const esbuildRef = useRef<any>();

  const startService = async () => {
    esbuildRef.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.57/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onSubmitBtn = async () => {
    const result = await esbuildRef.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": "'production'",
        global: "window",
      }
    });

    setCode(eval(result.outputFiles[0].text));
  };

  return (
    <Box component="div">
      <CodeEditor onChange={(value) => setInput(value)} />
      <Button onClick={onSubmitBtn}>Submit</Button>
      <Box component="div">{code}</Box>
    </Box>
  );
};

export default Home;
