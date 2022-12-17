import { FC, useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface ResizableProps {
  children: any;
  direction: "horizontal" | "vertical";
}

const Resizable: FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  // const [width, setWidth] = useState<number>(16)
  const [innerWidth, setInnerWidth] = useState<number>(16);
  const [innerHeight, setInnerHeight] = useState<number>(16);

  useEffect(() => {
    // Initiate inner height and width
    // setWidth(window.innerWidth * 0.75)
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);

    // Using Debouncing to improve performance!
    let timer: any;

    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);

        // if (window.innerHeight * 0.75 < width) {
        //   setWidth(window.innerHeight * 0.75);
        // }
      }, 100);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  if (direction === "horizontal") {
    resizableProps = {
      className: "flex flex-row",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width: innerWidth * 0.75,
      resizeHandles: ["e"],
      // onResizeStop: (_event, data) => {
      //   setWidth(data.size.width);
      // }
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 48],
      maxConstraints: [Infinity, innerHeight * 0.6],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
