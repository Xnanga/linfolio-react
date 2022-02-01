import { useState } from "react";

import "./App.css";
import Desktop from "./UI/Desktop";
import TopBar from "./UI/Menus/TopBar/TopBar";
import VerticalMenu from "./UI/Menus/VerticalMenu/VerticalMenu";

function App() {
  // Look at lifting state up to single source of truth

  const [currentVisibleModalId, setCurrentVisibleModalId] = useState("Bio");
  const [modalToClose, setModalToClose] = useState(false);
  const [modalChangedFlag, setModalChangedFlag] = useState(false);

  const modalIdHandler = (modalId) => {
    setModalChangedFlag((prevState) => setModalChangedFlag(!prevState));
    setCurrentVisibleModalId(modalId);
  };

  return (
    <div className="App">
      <Desktop
        activeModal={currentVisibleModalId}
        modalChangedFlag={modalChangedFlag}
      >
        <TopBar />
        <VerticalMenu
          modalIdHandler={modalIdHandler}
          visibleModal={currentVisibleModalId}
          closeModal={modalToClose}
        />
      </Desktop>
    </div>
  );
}

export default App;
