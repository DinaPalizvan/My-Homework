import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "bisque",
        }}
      >
        <span style={{ margin: 20, fontSize: "xx-large" }}> {count} </span>
        <br />
        <span>
          <button
            onClick={()=>setCount((count)=>count+1)}
            style={{
              margin: 20,
              fontSize: "larger",
              width: 50,
              backgroundColor: "rgb(34, 203, 121)",
            }}
          >
            +
          </button>
          <button
            onClick={()=>setCount((count)=>count-1)}
            style={{
              margin: 20,
              fontSize: "larger",
              width: 50,
              backgroundColor: "rgb(241, 42, 102)",
            }}
          >
            -
          </button>
          <button
            onClick={()=>setCount(0)}
            style={{
              margin: 20,
              fontSize: "larger",
              backgroundColor: "rgb(141, 141, 141)",
            }}
          >
            Reset
          </button>
        </span>
      </div>
    </>
  );
}
