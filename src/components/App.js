
import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="parent">
        <h2>Parent Component</h2>
        <ChildComponent1 onSelect={setSelectedOption} />
        <ChildComponent2 onSelect={setSelectedOption} />
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
  );
};

export default App;