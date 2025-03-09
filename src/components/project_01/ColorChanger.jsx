import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("olive");

  return (
    <div
      style={{ backgroundColor: color }}
      className="flex h-screen w-screen items-center justify-center"
    >
      <div className="absolute bottom-12 mx-4 flex flex-wrap items-center justify-center gap-2 rounded-lg bg-amber-50 p-4 shadow-lg">
        <button
          className="rounded-full bg-yellow-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="rounded-full bg-blue-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="rounded-full bg-red-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="rounded-full bg-green-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="rounded-full bg-purple-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          className="rounded-full bg-pink-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="rounded-full bg-orange-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="rounded-full bg-teal-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("teal")}
        >
          Teal
        </button>
        <button
          className="rounded-full bg-indigo-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("indigo")}
        >
          Indigo
        </button>
        <button
          className="rounded-full bg-cyan-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("cyan")}
        >
          Cyan
        </button>
        <button
          className="rounded-full bg-lime-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("lime")}
        >
          Lime
        </button>
        <button
          className="rounded-full bg-amber-500 px-4 py-2 text-center text-white"
          onClick={() => setColor("#FFBF00")}
        >
          Amber
        </button>
      </div>
    </div>
  );
}

export default ColorChanger;
