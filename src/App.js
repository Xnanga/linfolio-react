import { useState } from "react";

import "./App.css";
import Desktop from "./UI/Desktop";
import TopBar from "./UI/Menus/TopBar/TopBar";
import VerticalMenu from "./UI/Menus/VerticalMenu/VerticalMenu";

function App() {
  const [currentVisibleModalId, setCurrentVisibleModalId] = useState("");
  const [modalChangedFlag, setModalChangedFlag] = useState(false);

  const modalIdHandler = (modalId) => {
    setModalChangedFlag((prevState) => setModalChangedFlag(!prevState));
    setCurrentVisibleModalId(modalId);
  };

  return (
    <div className="App">
      <Desktop
        modalVisibilityHandler={currentVisibleModalId}
        modalChangedFlag={modalChangedFlag}
      >
        <TopBar />
        <VerticalMenu modalIdHandler={modalIdHandler} />
      </Desktop>
    </div>
  );
}

export default App;
