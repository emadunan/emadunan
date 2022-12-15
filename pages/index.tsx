import { FC, useEffect, useRef, useState } from 'react';
import { Box, Button, TextareaAutosize } from '@mui/material'
import * as esbuild from "esbuild-wasm";

import CodeEditor from "../components/editor/code-editor";

const Home: FC = () => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const esbuildRef = useRef<any>();

  const startService = async () => {
    esbuildRef.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.57/esbuild.wasm",
    })
  }

  useEffect(() => {
    startService();
  }, []);

  const onSubmitBtn = async () => {
    const result = await esbuildRef.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    });    

    setCode(result.code)
  }

  return (
    <Box component="div">
      <CodeEditor />
      <Button onClick={onSubmitBtn}>Submit</Button>
      <Box component="div">{code}</Box>
    </Box>
  );
}

export default Home;
