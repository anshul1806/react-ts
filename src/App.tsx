import * as React from "react";
import "./styles.css";
import Header from "./header";

// //https://www.pluralsight.com/guides/how-to-handle-communication-between-parent-and-child-components-in-reactjs

export default function App() {
  const handleClick = () => {
    console.log("AN event came in from the client");
    alert("action inside parent for something that child caused.");
  };
  const user = {
    name: "Anshul pandey",
    address: "147  W Bethestha Dr, Maine,USA"
    //parentHandler: handleClick
  };
  const user2 = {
    name: "Archana pandey",
    address: "177  W Bethestha Dr, Maine,USA",
    click: handleClick
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Header user={user} clickedEvent={handleClick} />
      <Header user={user2} clickedEvent={handleClick} />
    </div>
  );
}
