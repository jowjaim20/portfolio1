import React from "react";
import "./App.css";
import Circle from "./images/svg";

function App() {
  return (
    <div
      onClick={() => console.log(window.innerHeight)}
      className={`bg-gradient-to-r from-fuchsia-500 to-violet-800 ${
        window.innerHeight <= 500 ? "h-[500px]" : "h-screen"
      }  `}
    >
      <div className=" flex justify-between p-8">
        <div className=" flex justify-center items-center text-white ">
          <Circle width="20" height="20" className=" text-white" />
          <h1 className=" font-medium">LOGO</h1>
        </div>
        <div className="flex justify-center items-center uppercase">
          <ul className=" text-white flex justify-center items-center gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Services</li>
            <li>Home</li>
            <li>faq</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
